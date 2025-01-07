<script setup lang="ts">
import { Subheading } from "#components";
const DynamicBox = resolveComponent("DynamicBox");
</script>

<template>
  <DynamicBox
    class="{display:inline-block} {padding:.8rem_1.5rem} {--width-fancy-corners:10px} {transition:background-color_200ms} :focus-visible{background-color:color-mix(in_srgb,currentColor_20%,transparent)} :hover{background-color:color-mix(in_srgb,currentColor_20%,transparent)} [:focus-visible_&]{background-color:color-mix(in_srgb,currentColor_20%,transparent)} [:hover_&]{background-color:color-mix(in_srgb,currentColor_20%,transparent)}"
  >
    <Subheading>
      <slot></slot>
    </Subheading>
  </DynamicBox>
</template>
