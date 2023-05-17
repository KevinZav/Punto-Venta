<template>
  <aside id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full border-r sm:translate-x-0 bg-gray-800 border-gray-700"
    aria-label="Sidebar">
    <div class="h-full px-3 pb-4 overflow-y-auto bg-gray-800">
      <ul class="space-y-2 font-medium">
        <li v-for="navigator in navigators" :key="navigator.text">
          <router-link
            :to="navigator.to"
            class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 hover:text-primary-300">
            <icon
              :icon="navigator.icon"
              :size="6"
              :extraClass="'transition duration-75'"></icon>
            <typography :variant="'body-2'" :text="navigator.text" :extraStyles="'ml-3'"></typography>
          </router-link>
        </li>
    </ul>
  </div>
</aside></template>

<script>
import { sidebarNavigation } from '@/app/shared/constants/sidebar-navigation'
import Icon from '../Icon/Icon.vue'
import Typography from '../Typography/Typography.vue'

export default {
  name: 'SideBar',
  components: {
    Icon,
    Typography
  },
  data() {
    return {
      navigators: sidebarNavigation
    }
  }
}
</script>

<style></style>