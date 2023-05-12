<template>
  <div class="container">
    <typography :variant="'h1'" :color="'purple'" :light="'500'">
      Hello, <span class="text-underline">there</span>. Welcome to Testing Page
    </typography>
    <typography
      :variant="'body-2'"
      :color="'blue'"
      :text="'You can do some tests here about your components'"></typography>
      <typography
        :variant="'body-1'"
        :color="'red'"
        :text="'Are you ready?'"
        :fontBold="true"></typography>
    <hr>
  </div>
</template>

<script>
import Typography from '@/app/shared/modules/components/Typography/Typography.vue'

export default {
  name: 'TestingPage',
  components: {
    Typography
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/global/colors' as *;
.container {
  hr {
    height: 1px;

    background: $primary-blue-700;
    border: none;
  }

  .text-underline {
    text-decoration: underline;
  }
}
</style>