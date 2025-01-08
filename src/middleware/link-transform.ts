import type { MiddlewareHandler } from "astro";
import { parse } from "node-html-parser";

const TRUSTED_HOSTNAMES = ["olets.dev"];

const middlewareHandler: MiddlewareHandler =
  async function linkTransformMiddleware(context, next) {
    const response = await next();
    const text = await response.text();
    const transformedText = transform(text, context.url.hostname);

    return new Response(transformedText, {
      status: 200,
      headers: response.headers,
    });
  };

function transform(text: string, contextHostname: string): string {
  const html = parse(text);
  const els = Array.from(html.querySelectorAll("a"));

  function transform(el: HTMLElement): void {
    el.setAttribute("rel", "noopener noreferrer");
  }

  for (const el of els) {
    const href = el.getAttribute("href");

    if (!href) {
      // not linked

      continue;
    }

    if (el.hasAttribute("data-link-transform-middleware-external")) {
      // forced to be treated as external link

      // @ts-ignore
      transform(el);
      continue;
    }

    if (el.hasAttribute("data-link-transform-middleware-internal")) {
      // forced to be treated as interal link
      continue;
    }

    if (!href.match(/^(\S+:\/|\/\/)/)) {
      // relative link (does not match absolute URLs, with or without scheme)
      continue;
    }

    const { hostname } = new URL(href);

    const contextHostnameRegExp = new RegExp(`^(.+\\.)?${contextHostname}$`);

    if (hostname.match(contextHostnameRegExp)) {
      // internal absolute link
      continue;
    }

    let trusted = false;

    for (const trustedHostname of TRUSTED_HOSTNAMES) {
      const trustedHostnameRexExp = new RegExp(`^(.+\.)?${trustedHostname}$`);

      if (hostname.match(trustedHostnameRexExp)) {
        // trusted external link
        break;
      }
    }

    if (trusted) {
      continue;
    }

    // @ts-ignore
    transform(el);
  }

  return html.toString();
}

export default middlewareHandler;
