<template>
  <nav class="fixed top-0 z-50 w-full border-b bg-gray-800 border-gray-700">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start">
          <action-button
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            :icon="'EllipsisVerticalIcon'"
            :extraClass="'text-gray-400 hover:bg-gray-700 sm:!hidden'"
            :variant="'dark icon'"></action-button>
            <router-link :to="{name: 'testing'}" class="flex items-center ml-2 md:mr-24">
              <img src="../../../../../assets/img/logo-light.png" class="h-8 mr-3" alt="FlowBite Logo" />
              <typography variant="h4" :color="'white'" :text="'PixelLab'"></typography>
            </router-link>
        </div>
        <div class="flex items-center">
          <div class="flex items-center ml-3">
              <action-button
                aria-expanded="false"
                data-dropdown-toggle="dropdown-user"
                :variant="'dark icon'"
                :extraClass="'flex bg-gray-800 rounded-full !p-0'">
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="user photo">
              </action-button>
            <div
              class="z-50 hidden !-left-2.5 list-none divide-y rounded shadow bg-gray-800 divide-gray-600"
              id="dropdown-user">
              <div class="px-4 py-3 text-gray-300" role="none">
                <typography :text="user.name" :variant="'body-2'"></typography>
                <typography :text="user.email" :variant="'body-2'"></typography>
              </div>
              <ul class="py-1" role="none">
                <li v-for="action in actions" :key="action.text">
                  <router-link
                    role="menuitem"
                    :to="action.to"
                    class="block px-4 py-2 hover:bg-gray-100 text-gray-300 hover:bg-gray-600 hover:text-white">
                    <typography :text="action.text" :variant="'body-2'"></typography>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { initDrawers } from 'flowbite';
import ActionButton from '../ActionButton/ActionButton.vue';
import Typography from '../Typography/Typography.vue';

export default {
  name: 'NavBar',
  components: {
    ActionButton,
    Typography
  },
  data () {
    return {
      user: {
        name: 'Kevin Zavala',
        email: 'kevinzavala132@gmail.com'
      },
      actions: [
        { to: { name: 'testing' }, text: 'Dashboard' },
        { to: { name: 'testing' }, text: 'Settings' },
        { to: { name: 'testing' }, text: 'Earnings' },
        { to: { name: 'testing' }, text: 'Sign out' },
      ]
    }
  },
  mounted() {
    initDrawers()
  }
}
</script>

<style></style>