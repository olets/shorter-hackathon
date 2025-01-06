<script setup lang="ts">
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

console.log({ length: props.items.length });
</script>

<template>
  <ul class="{margin-left:2rem}">
    <template v-for="(item, index) in props.items">
      <li
        v-if="index === 0"
        class="::marker{content:-__} ::marker{color:color-mix(in_srgb,currentColor_60%,transparent)}"
      >
        {{ item }}
      </li>

      <li
        v-else
        class="::marker{content:-__} ::marker{color:color-mix(in_srgb,currentColor_60%,transparent)} {margin-top:1rem}"
      >
        {{ item }}
      </li>
    </template>
  </ul>
</template>
