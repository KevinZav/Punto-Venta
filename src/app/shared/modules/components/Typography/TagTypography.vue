<template>
    <h1 v-if="variant === 'h1'"><slot></slot></h1>
    <h2 v-else-if="variant === 'h2'"><slot></slot></h2>
    <h3 v-else-if="variant === 'h3'"><slot></slot></h3>
    <h4 v-else-if="variant === 'h4'"><slot></slot></h4>
    <h5 v-else-if="variant.startsWith('subtitle')" :class="variant"><slot></slot></h5>
    <p v-else-if="variant.startsWith('body')" :class="variant"><slot></slot></p>
    <small v-else :class="variant"><slot></slot></small>
</template>

<script>
export default {
  name: 'TagTypography',
  props: {
    variant: {
      type: String,
      required: true,
    }
  }
}
</script>

<style>

</style>