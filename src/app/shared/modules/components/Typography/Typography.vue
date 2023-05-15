<template>
    <tag-typography v-if="!!text" :class="assignClass" :variant="variant">{{ text }}</tag-typography>
    <tag-typography v-else :class="assignClass" :variant="variant"><slot></slot></tag-typography>
</template>

<script>
import { typographyTags } from '@/app/shared/constants'
import TagTypography from './TagTypography.vue'

export default {
  name: 'TypographyComponent',
  components: {
    TagTypography,
  },
  props: {
    text: {
      type: String,
    },
    variant: {
      type: String,
      default: 'h1',
      validator (value) {
        return typographyTags.includes(value)
      }
    },
    fontBold: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
    },
    extraStyles: {
      type: String,
      default: ''
    }
  },
  computed: {
    assignClass () {
      const { color, extraStyles, fontBold} = this

      return `${extraStyles} ${color ? `text-${color}` : ''} ${fontBold ? 'bold' : ''}`
    }
  }
}
</script>

<style lang="scss">
.bold {
  font-weight: bold;
}
</style>