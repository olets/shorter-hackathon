<script setup lang="ts">
const props = defineProps<{
  class?: string;
  is?: string;
  disableOnFocus?: boolean;
}>();

const is = props.is || "span";
</script>

<template>
  <component
    :is
    :class="[
      '{position:absolute} {width:1px} {height:1px} {padding:0} {margin:-1px} {overflow:hidden} {clip:rect(0,0,0,0)} {white-space:nowrap} {border-width:0}',
      props.disableOnFocus
        ? ':focus{position:static} :focus{width:auto} :focus{height:auto} :focus{padding:0} :focus{margin:0} :focus{overflow:visible} :focus{clip:auto} :focus{white-space:normal}'
        : '',
      props.class,
    ]"
  >
    <slot />
  </component>
</template>
