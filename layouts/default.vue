<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
import { Header, SkipLink } from "#components";
</script>

<template>
  <div class="{padding-bottom:2rem}">
    <SkipLink />

    <Header />

    <main :id="runtimeConfig.public.contentId">
      <slot />
    </main>
  </div>
</template>
