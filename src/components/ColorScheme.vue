<script lang="ts">
// Importing `reactive` in the <script setup> works, but I don't trust that to not break in future versions.
import { reactive } from "vue";
import { ids } from "../constants";

interface ColorScheme {
  value: string;
  setValue(colorScheme: string): void;
}

export const colorScheme: ColorScheme = reactive({
  value: "",

  setValue(colorScheme: string) {
    this.value = colorScheme;
  },
});
</script>

<script setup lang="ts">
import { onMounted, watch } from "vue";

// TODO not working
watch(
  () => colorScheme.value,
  (value) => {
    localStorage.setItem("colorScheme", value);
  }
);

onMounted(() => {
  // SEEALSO src/layouts/Layout.astro, components/ColorScheme.vue
  let localStorageColorScheme =
    localStorage.getItem("colorScheme") ?? "light dark";

  colorScheme.setValue(localStorageColorScheme);
  console.log("Color scheme set to:", colorScheme.value);
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
  <div :class="`${colorScheme.value ? '' : '{display:xnone}'}`">
    <label
      class="@media(min-width:48rem){display:block}"
      :for="ids.colorScheme"
    >
      Theme:
    </label>

    <select
      class="{border:1px_solid_currentColor} {border-radius:4px} {padding:0.25rem} :focus-visible{background-color:color-mix(in_srgb,currentColor_20%,transparent)} :hover{background-color:color-mix(in_srgb,currentColor_20%,transparent)}"
      :id="ids.colorScheme"
      v-model="colorScheme.value"
    >
      <option v-for="o in options" :value="o.value">
        {{ o.label }}
      </option>
    </select>
  </div>
</template>
