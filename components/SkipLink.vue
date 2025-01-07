<script setup lang="ts">
const DynamicSrOnly = resolveComponent("DynamicSrOnly");
import { Button } from "#components";
const runtimeConfig = useRuntimeConfig();
</script>

<template>
  <DynamicSrOnly
    class="{left:1.5rem} {top:1.5rem} :focus{position:fixed!important}"
    :disableOnFocus="true"
    :href="`#${runtimeConfig.public.ids.content}`"
    is="a"
  >
    <Button>Skip to content</Button>
  </DynamicSrOnly>
</template>
