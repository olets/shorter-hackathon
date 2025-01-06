<script setup lang="ts">
import { Subheading } from "#components";
const DynamicBox = resolveComponent("DynamicBox");

const props = defineProps<{
  to: string;
}>();
</script>

<!-- @TODO fancy hover effect -->

<template>
  <NuxtLink :to>
      class="{padding:.8rem_1.5rem} {--width-fancy-corners:10px} :focus-visible{background-color:color-mix(in_srgb,currentColor_20%,transparent)} :hover{background-color:color-mix(in_srgb,currentColor_20%,transparent)} {transition:background-color_400ms}"
    <DynamicBox
    >
      <Subheading>
        <slot></slot>
      </Subheading>
    </DynamicBox>
  </NuxtLink>
</template>
