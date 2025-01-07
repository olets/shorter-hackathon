import { watch, reactive } from "vue";

interface ColorScheme {
  value: string;
  setValue(colorScheme: string): void;
}

export const colorScheme: ColorScheme = reactive({
  /**
   * Initialized in components/ColorScheme.vue
   */
  value: "",

  setValue(colorScheme: string) {
    this.value = colorScheme;
  },
});

watch(
  () => colorScheme.value,
  (value) => {
    localStorage.setItem("colorScheme", value);
  }
);
