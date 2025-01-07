<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  /**
   * Initialized in app.vue
   * @DUPE app.vue
   */
  let localStorageColorScheme =
    localStorage.getItem("colorScheme") ?? "light dark";

  colorScheme.setValue(localStorageColorScheme);
});

const options = [
  { label: "Auto", value: "light dark" },
  { label: "Dark", value: "dark" },
  { label: "Light", value: "light" },
];

const id = "color-scheme";
</script>

<template>
  <div>
    <label :for="id">Theme: </label>

    <select
      class="{border:1px_solid_currentColor} {border-radius:4px} :focus-visible{background-color:color-mix(in_srgb,currentColor_20%,transparent)} :hover{background-color:color-mix(in_srgb,currentColor_20%,transparent)}"
      :id="id"
      v-model="colorScheme.value"
    >
      <option v-for="o in options" :value="o.value">{{ o.label }}</option>
    </select>
  </div>
</template>
