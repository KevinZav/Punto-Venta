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
    <person-tag nameColor="blue" imgAvatar="" namePerson="La chata"></person-tag>
    <br>
    <person-tag nameColor="purple" imgAvatar="" namePerson="Alan Eduardo"></person-tag>
    <br>
    <person-tag nameColor="yellow" imgAvatar="" namePerson="La bambina"></person-tag>
  </div>
</template>

<script>
import Typography from '@/app/shared/modules/components/Typography/Typography.vue'
import PersonTag from '@/app/shared/modules/components/PersonTag/PersonTag.vue'
export default {
  name: 'TestingPage',
  components: {
    Typography,
    PersonTag
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