<script setup lang="ts">
import "@unocss/reset/tailwind-compat.css";

useHeadSafe({
  bodyAttrs: {
    class:
      "{background:var(--color-background)} {color:var(--color-foreground)}",
  },
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
