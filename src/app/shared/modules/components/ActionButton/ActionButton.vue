<template>
  <button type="button" :class="assignClass" @click="$emit('onClick', null)">
    <icon v-if="icon" :icon="icon"/>
    <typography v-if="!!text" :text="text" :variant="'button'"></typography>
  </button>
</template>
<script>
import { buttonTypes } from '@/app/shared/constants/button-types';
import Icon from '../Icon/Icon.vue';
import Typography from '../Typography/Typography.vue';

export default{
  name: 'ActionButton',
  emits: ['onClick'],
  components: {
    Typography,
    Icon,
  },
  props: {
    text: {
      type: String
    },
    variant: {
      type: String,
      required: true,
      validator (value) {
        return value.split(' ').every(item => buttonTypes.includes(item))
      }
    },
    icon: {
      type: String
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator (value) {
        return ['left', 'right'].includes(value)
      }
    },
    extraClass: {
      type: String
    }
  },
  computed: {
    assignClass () {
      const { variant, extraClass, iconPosition } = this

      return `button button-${variant} ${extraClass} gap-x-2 icon-${iconPosition}`
    }
  }
}
</script>
<style lang="scss" scoped>
button {

  &:focus {
    box-shadow: none;
  }

  &.icon-right {
    flex-direction: row-reverse;
  }
}
</style>