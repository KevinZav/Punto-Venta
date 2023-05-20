<template>
  <navbar></navbar>
  <side-bar></side-bar>
  <div class="p-4 sm:ml-64">
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <div class="grid grid-cols-3 gap-4 mb-4">
        <div class="container">
          <typography :variant="'h1'" :color="'red-700'">
            Hello, <span class="text-underline">there</span>. Welcome to Testing Page
          </typography>
          <typography :variant="'body-2'" :color="'blue-400'" :text="'You can do some tests here about your components'">
          </typography>
          <typography :variant="'body-1'" :color="'red-100'" :text="'Are you ready?'" :fontBold="true"></typography>
          <hr class="bg-red-400">
          <div class="buttons">
            <h3>Buttons</h3>
            <div class="flex gap-3 m-5">
              <action-button
                @onClick="onClickButton"
                :variant="'red-outline icon'"
                :icon="'MoonIcon'"
                :iconPosition="'right'"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3>Indicators</h3>
      <indicator :variant="'yellow'" :colorText="'blue-600'" :text="'Desde la importacion'" />
    </div>
  </div>
</template>

<script>
import Typography from '@/app/shared/modules/components/Typography/Typography.vue'
import ActionButton from '@/app/shared/modules/components/ActionButton/ActionButton.vue'
import Navbar from '@/app/shared/modules/components/Navigation/Navbar.vue'
import SideBar from '@/app/shared/modules/components/Navigation/SideBar.vue'
import Indicator from '@/app/shared/modules/components/Indicators/Indicators.vue'

export default {
  name: 'TestingPage',
  components: {
    Typography,
    ActionButton,
    Navbar,
    SideBar,
    Indicator
  },
  methods: {
    onClickButton() {
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