<script setup lang="ts">
import { Header, SkipLink } from "#components";
const runtimeConfig = useRuntimeConfig();
</script>

<template>
  <div class="{padding-bottom:2rem}">
    <SkipLink />

    <Header />

    <main :id="runtimeConfig.public.ids.content">
      <slot />
    </main>
  </div>
</template>
