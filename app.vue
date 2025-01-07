<script setup lang="ts">
import "@unocss/reset/tailwind-compat.css";
import title from "#shared/title";
import { ColorScheme } from "#components";

useHead({
  script: [
    {
      innerHTML: `
      let initializeColorScheme = () => {
        let initialColorScheme = localStorage.getItem("colorScheme");

        if (!initialColorScheme || !['light', 'dark', 'light dark'].includes(initialColorScheme)) {
          initialColorScheme = "light dark";
          localStorage.setItem("colorScheme", initialColorScheme);
        }

        document.documentElement.setAttribute(
          "data-initial-color-scheme",
          initialColorScheme
        );
      }

      initializeColorScheme();

      initializeColorScheme = undefined;`,
    },
  ],
});

useHeadSafe({
  bodyAttrs: {
    class:
      "{background:var(--color-background)} {color:var(--color-foreground)}",
  },
});

useHeadSafe({
  link: {
    rel: "icon",
    type: "image/png",
    href: "/favicon-96x96.png",
    sizes: "96x96",
  },
});

useHeadSafe({
  link: {
    rel: "icon",
    type: "image/svg+xml",
    href: "/favicon.svg",
  },
});

useHeadSafe({
  link: {
    rel: "shortcut icon",
    href: "/favicon.ico",
  },
});

useHeadSafe({
  link: {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png",
  },
});

useHeadSafe({
  meta: {
    name: "apple-mobile-web-app-title",
    content: "Shorter Hackathon",
  },
});

useHeadSafe({
  link: {
    rel: "manifest",
    href: "/site.webmanifest",
  },
});

useSeoMeta({
  title: title,
  ogTitle: title,
  twitterTitle: title,
  ogType: "website",
  description:
    "A one hour and fifty minutes AI-free remote coding challenge for everyone",
  ogDescription:
    "A one hour and fifty minutes AI-free remote coding challenge for everyone",
  url: "https://shorter-hackathon.vercel.app",
  ogUrl: "https://shorter-hackathon.vercel.app",
  ogImage: "https://shorter-hackathon.vercel.app/open-graph.jpg",
  twitterImage: "https://shorter-hackathon.vercel.app/open-graph.jpg",
  twitterCard: "summary_large_image",
  ogImageWidth: 1200,
  ogImageHeight: 630,
});

useHeadSafe({
  meta: [
    {
      property: "fediverse:creator",
      content: "@olets@hachyderm.io",
    },
  ],
});
</script>

<template>
  <div>
    <div
      class="{border:1px_solid_currentColor} {padding:0.5rem} {position:fixed} {bottom:20px} {right:20px}"
    >
      <ColorScheme />
    </div>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
