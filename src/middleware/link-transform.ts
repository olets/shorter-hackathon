import type { APIContext, MiddlewareHandler } from "astro";
import { parse } from "node-html-parser";

const LOG_LEVEL = Number(
  import.meta.env.LINK_TRANSFORM_MIDDLEWARE_LOG_LEVEL || 0
);

const TRUSTED_HOSTNAMES = (
  import.meta.env.LINK_TRANSFORM_MIDDLEWARE_TRUSTED_HOSTNAMES || ""
)
  .split(",")
  .map((s) => s.trim());

const middlewareHandler: MiddlewareHandler =
  async function linkTransformMiddleware(context, next) {
    const response = await next();
    const text = await response.text();
    const transformedText = transformer(text, context);

    console.log({ contextUrlHostname: context.url.hostname });

    return new Response(transformedText, {
      status: 200,
      headers: response.headers,
    });
  };

function transformer(text: string, context: APIContext): string {
  devLog(`\nProcessing page ${context.routePattern}`, "========", 1);

  const html = parse(text);

  const els = Array.from(
    html.querySelectorAll("a")
  ) as unknown as HTMLAnchorElement[];

  function transform(el: HTMLAnchorElement): void {
    el.setAttribute("rel", "noopener noreferrer");
  }

  for (const el of els) {
    const href = el.getAttribute("href");

    if (!href) {
      continue;
    }

    if (href === context.routePattern) {
      /**
       * Add classes to active links
       */
      const activeClass = el.getAttribute(
        "data-link-transform-middleware-active-class"
      );

      if (activeClass) {
        devLog("Applied active classes to link", href, 1);
        el.classList.add(...activeClass.split(" "));
      }

      /**
       * Add aria-current to active links
       */
      let ariaCurrentValue = el.getAttribute(
        "data-link-transform-middleware-aria-current-value"
      );

      if (ariaCurrentValue !== undefined) {
        ariaCurrentValue = ariaCurrentValue || "page";

        devLog("Applied aria-current value to link", href, 1);
        el.setAttribute("aria-current", ariaCurrentValue);
      }
    }

    /**
     * Add rel="noopener noreferrer" to external links
     */
    if (el.hasAttribute("data-link-transform-middleware-external")) {
      devLog("Forced link to be treated as external", href, 1);

      // @ts-ignore
      transform(el, href);
      continue;
    }

    if (el.hasAttribute("data-link-transform-middleware-internal")) {
      devLog("Forced link to be treated as internal", href);

      continue;
    }

    // does not match absolute URLs, with or without scheme
    if (!href.match(/^(\S+:\/|\/\/)/)) {
      devLog("Found link to relative URL", href);

      continue;
    }

    const { hostname } = new URL(href);
    const { hostname: siteHostname } = new URL(import.meta.env.SITE);

    const siteHostnameRegExp = new RegExp(`^(.+\\.)?${siteHostname}$`);

    if (hostname.match(siteHostnameRegExp)) {
      devLog("Found link to absolute internal URL", href);

      continue;
    }

    let trusted = false;

    for (const trustedHostname of TRUSTED_HOSTNAMES) {
      const trustedHostnameRexExp = new RegExp(`^(.+\.)?${trustedHostname}$`);

      if (hostname.match(trustedHostnameRexExp)) {
        devLog("Found link to trusted external URL", href);
        trusted = true;

        break;
      }
    }

    if (trusted) {
      continue;
    }

    devLog("Transformed link to external URL", href, 1);

    // @ts-ignore
    transform(el, href);
  }

  return html.toString();
}

/**
 * Logs debugging messages if the environment's log level is at least as high as the required log level.
 *
 * Log level is configured with the `LINK_TRANSFORM_MIDDLEWARE_LOG_LEVEL` environment variable.
 *
 * Levels are:
 *  - 0: no logging (default)
 *  - 1: log transformed elements
 *  - 2: log all elements
 *
 * @param message
 * @param data
 * @param logLevel minimum required log level to display the message
 * @returns
 */
function devLog(message: string, href: string, logLevel: 0 | 1 | 2 = 2): void {
  if (LOG_LEVEL === 0) {
    return;
  }

  if (LOG_LEVEL < logLevel) {
    return;
  }

  console.log(`[link-transform Astro middleware]: ${message}\n${href}\n`);
}

export default middlewareHandler;
