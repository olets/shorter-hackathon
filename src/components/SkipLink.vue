<script setup lang="ts">
import DynamicSrOnly from "../components/DynamicSrOnly.vue";
import { ids } from "../constants";
import Button from "../components/Button.vue";
</script>

<template>
  <DynamicSrOnly
    class="{left:1.5rem} {top:1.5rem} :focus{position:fixed!important}"
    :disableOnFocus="true"
    :href="`#${ids.content}`"
    is="a"
  >
    <Button>Skip to content</Button>
  </DynamicSrOnly>
</template>
