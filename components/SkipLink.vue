<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const DynamicSrOnly = resolveComponent("DynamicSrOnly");
import { Button } from "#components";
</script>

<template>
  <DynamicSrOnly
    class="{left:1.5rem} {top:1.5rem} :focus{position:fixed!important}"
    :disableOnFocus="true"
    :href="`#${runtimeConfig.public.contentId}`"
    is="a"
  >
    <Button>Skip to content</Button>
  </DynamicSrOnly>
</template>
