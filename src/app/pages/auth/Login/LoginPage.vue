<template>
  <div
    class="login w-screen h-screen flex items-center justify-center bg-gradient-to-r from-primary-900 to-purple-300"
  >
    <form
      class="login-container rounded-lg bg-blue-100 p-8 w-[400px] text-start"
      @submit="submit()">
      <div class="flex items-center justify-center mb-8">
        <img src="../../../../assets/img/logo.png" class="h-8 mr-3" alt="FlowBite Logo" />
        <typography variant="h4" :color="'black'" :text="'PixelLab'"></typography>
      </div>
      <typography
        :variant="'h3'"
        :text="loginConfig.title"
        :color="'black-400'"
      ></typography>
      <div class="form mt-6 bg-[inherit]">
        <div class="bg-[inherit] mb-6">
          <input-text
            v-model="credentials.userId"
            :variant="'primary'"
            :labelText="loginConfig.inputs.userId.labelText"
            :placeholder="loginConfig.inputs.userId.placeholder"
            :lightText="500"
          ></input-text>
        </div>
        <div class="bg-[inherit] mb-6">
          <input-text
            v-model="credentials.password"
            :type="'password'"
            :variant="'primary'"
            :labelText="loginConfig.inputs.password.labelText"
            :placeholder="loginConfig.inputs.password.placeholder"
            :lightText="500"
            :validators="loginConfig.inputs.password.validators"
            :setVariantByStatus="true"
            :messageHelp="loginConfig.inputs.password.messageHelp"
          ></input-text>
        </div> 
        <router-link class="text-blue-600 hover:text-blue-700" :to="{name: 'auth-login'}">
          <typography :variant="'body-2'" :text="loginConfig.forgotPasswordText"></typography>
        </router-link>
        <div class="mt-2 w-full text-end">
          <action-button :type="'submit'" :variant="'primary'" :text="loginConfig.buttonSubmit.text"></action-button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { loginConfig } from "@/app/config/pages/auth/login.config";
import ActionButton from "@/app/shared/modules/components/ActionButton/ActionButton.vue";
import Typography from "@/app/shared/modules/components/Typography/Typography.vue";
import InputText from "@/app/shared/modules/components/inputs/InputText.vue";

export default {
  name: "LoginPage",
  components: {
    Typography,
    InputText,
    ActionButton
  },
  data() {
    return {
      credentials: {
        userId: '',
        password: ''
      },
      loginConfig,
    }
  },
  methods: {
    submit () {
      console.log(this.credentials)
    }
  }
};
</script>
