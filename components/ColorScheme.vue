<script setup lang="ts">
import { onMounted } from "vue";
const DynamicSrOnly = resolveComponent("DynamicSrOnly");
const runtimeConfig = useRuntimeConfig();

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
  { label: "Computer", value: "light dark" },
  { label: "Dark", value: "dark" },
  {
    label: "Light",
    value: "light",
  },
];
</script>

<template>
  <div>
    <label
      class="@media(min-width:48rem){display:block}"
      :for="runtimeConfig.public.ids.colorScheme"
    >
      Theme:
    </label>

    <select
      class="{border:1px_solid_currentColor} {border-radius:4px} {padding:0.25rem} :focus-visible{background-color:color-mix(in_srgb,currentColor_20%,transparent)} :hover{background-color:color-mix(in_srgb,currentColor_20%,transparent)}"
      :id="runtimeConfig.public.ids.colorScheme"
      v-model="colorScheme.value"
    >
      <option v-for="o in options" :value="o.value">
        {{ o.label }}
      </option>
    </select>
  </div>
</template>
