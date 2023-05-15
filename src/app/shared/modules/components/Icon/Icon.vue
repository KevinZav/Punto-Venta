<template>
  <component :is="icon" :class="assignClass"></component>
</template>
<script>
import { heroIcons } from "@/app/shared/utilities/icons";

export default {
  name: "IconComponent",
  components: {
    ...heroIcons,
  },
  props: {
    icon: {
      required: true,
      default: "MicrophoneIcon",
    },
    size: {
      type: String,
      default: "4",
    },
    color: {
      type: String,
    },
    extraClass: {
      type: String,
    },
  },
  computed: {
    assignClass() {
      const { size, color, extraClass } = this;

      return `w-[${size}] w-${size} aspect-square ${
        color ? `text-${color}` : ""
      } ${extraClass}`;
    },
  },
};
</script>
<style></style>
