<script setup>
// *must* assign the defineProps result to a variable in order to correctly handle brackets in prop val
const props = defineProps({
  class: String,
  tag: {
    type: String,
    default: "div",
  },
});
</script>

<template>
  <component
    data-component="Box"
    :is="props.tag"
    :class="[
      '{position:relative}',
      '{border:var(--border-width)_solid_currentColor}',

      // before and after
      '::before{background:var(--color-background)}',
      '::before{content:}',
      '::before{position:absolute}',
      '::before{border-width:1px}',
      '::before{border-style:solid}',
      '::before{width:var(--width-fancy-corners)}',
      '::before{aspect-ratio:1_/_1}',
      '::after{background:var(--color-background)}',
      '::after{content:}',
      '::after{position:absolute}',
      '::after{border-width:1px}',
      '::after{border-style:solid}',
      '::after{width:var(--width-fancy-corners)}',
      '::after{aspect-ratio:1_/_1}',

      // before
      '::before{top:-1px}',
      '::before{left:-1px}',
      '::before{border-top-color:transparent}',
      '::before{border-right-color:currentColor}',
      '::before{border-bottom-color:currentColor}',
      '::before{border-left-color:transparent}',

      // after
      '::after{right:-1px}',
      '::after{bottom:-1px}',
      '::after{border-top-color:currentColor}',
      '::after{border-right-color:transparent}',
      '::after{border-bottom-color:transparent}',
      '::after{border-left-color:currentColor}',

      props.class,
    ]"
  >
    <slot />
  </component>
</template>
