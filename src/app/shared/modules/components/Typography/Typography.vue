<template>
    <tag-typography v-if="!!text" :class="assignClass" :variant="variant">{{ text }}</tag-typography>
    <tag-typography v-else :class="assignClass" :variant="variant"><slot></slot></tag-typography>
</template>

<script>
import { typographyLights, typographyTags, colors } from '@/app/shared/constants'
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
    light: {
      type: String,
      default: '700',
      validator (value) {
        return typographyLights.includes(value)
      }
    },
    color: {
      type: String,
      default: 'black',
      validator (value) {
        return colors.includes(value)
      }
    },
    extraStyles: {
      type: String,
      default: ''
    }
  },
  computed: {
    assignClass () {
      const { color, light, extraStyles, fontBold} = this

      return `${extraStyles} text-${color}-${light} ${fontBold ? 'bold' : ''}`
    }
  }
}
</script>

<style lang="scss">
.bold {
  font-weight: bold;
}
</style>