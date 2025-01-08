import type { MiddlewareHandler } from "astro";
import { parse } from "node-html-parser";

import {
  LINK_TRANSFORM_MIDDLEWARE_LOG_LEVEL as LOG_LEVEL,
  LINK_TRANSFORM_MIDDLEWARE_TRUSTED_HOSTNAMES as trustedHostnamesRaw,
} from "astro:env/server";

const TRUSTED_HOSTNAMES = trustedHostnamesRaw.split(",").map((s) => s.trim());

const middlewareHandler: MiddlewareHandler =
  async function linkTransformMiddleware(context, next) {
    const response = await next();
    const text = await response.text();
    const transformedText = transformer(text, context.url.hostname);

    return new Response(transformedText, {
      status: 200,
      headers: response.headers,
    });
  };

function transformer(text: string, contextHostname: string): string {
  const html = parse(text);
  const els = Array.from(html.querySelectorAll("a"));

  function transform(el: HTMLElement, href: string): void {
    el.setAttribute("rel", "noopener noreferrer");
  }

  for (const el of els) {
    const href = el.getAttribute("href");

    if (!href) {
      continue;
    }

    if (el.hasAttribute("data-link-transform-middleware-external")) {
      devLog("Forced link to be treated as external", href, true);

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

    const contextHostnameRegExp = new RegExp(`^(.+\\.)?${contextHostname}$`);

    if (hostname.match(contextHostnameRegExp)) {
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

    devLog("Transformed link to external URL", href, true);

    // @ts-ignore
    transform(el, href);
  }

  return html.toString();
}

/**
 * Logs debugging messages development mode.
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
 * @param transformed whether the element is transformed
 * @returns
 */
function devLog(
  message: string,
  href: string,
  transformed: boolean = false
): void {
  if (LOG_LEVEL === 0) {
    return;
  }

  if (LOG_LEVEL === 1 && transformed !== true) {
    return;
  }

  console.log(`[link-transform Astro middleware]: ${message}\n${href}\n`);
}

export default middlewareHandler;
