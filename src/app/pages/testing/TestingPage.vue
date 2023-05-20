<template>
  <div class="container">
    <typography :variant="'h1'" :color="'red-700'">
      Hello, <span class="text-underline">there</span>. Welcome to Testing Page
    </typography>
    <typography
      :variant="'body-2'"
      :color="'blue-400'"
      :text="'You can do some tests here about your components'"></typography>
      <typography
        :variant="'body-1'"
        :color="'red-100'"
        :text="'Are you ready?'"
        :fontBold="true"></typography>
    <hr class="bg-red-400">
    <div class="buttons">
      <h3>Buttons</h3>
      <div class="flex gap-3 m-5">
        <action-button @onClick="onClickButton" :text="'Default'" :variant="'primary-outline pill'"/>
      </div>
    </div>
  </div>
  <custom-badge-vue :variant="'purple'" :text="'adios'"></custom-badge-vue>
  <custom-badge-vue :variant="'pink'" :extraClass="'red-bordered pink-large pink-pills'" :text="'holiwis'"></custom-badge-vue>
</template>

<script>
import Typography from '@/app/shared/modules/components/Typography/Typography.vue'
import ActionButton from '@/app/shared/modules/components/ActionButton/ActionButton.vue'
import CustomBadgeVue from '@/app/shared/modules/components/Badge/CustomBadge.vue'
export default {
  name: 'TestingPage',
  components: {
    Typography,
    ActionButton,
    CustomBadgeVue
  },
  methods: {
    onClickButton () {
      alert(`It's Britney, bitch!`)
    }
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/global/colors' as *;
.container {
  hr {
    height: 1px;

    border: none;
  }

  .text-underline {
    text-decoration: underline;
  }
}
</style>