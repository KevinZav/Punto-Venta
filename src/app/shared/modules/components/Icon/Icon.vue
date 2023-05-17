<template>
  <span :style="{ 'width': `${size}`, height: `${size}` }">
    <component :is="icon" :class="assignClass"></component>
  </span>
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
      default: "16px",
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
      const { color, extraClass } = this;

      return `aspect-square ${color ? `text-${color}` : ""
        } ${extraClass}`;
    },
    assignStyle() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`
      }
    }
  },
};
</script>
<style></style>
