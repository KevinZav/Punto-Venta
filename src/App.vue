<template>
  <router-view></router-view>
  <Badge text="+2" bgColor="red" textColor="white"></Badge>
  <Badge text="+10" bgColor="orange" textColor="white"></Badge>
  <Badge text="2" bgColor="#ad9ee5" textColor="#1e2ab5"></Badge>
  <Badge text="+2" bgColor="#C4E7D0" textColor="#106132"></Badge>
  <Badge text="+99" bgColor="#EEFF00" textColor="#106132"></Badge>
  <CustomLabel text="Label" bgColor="#393B3F" textColor="white"></CustomLabel>
  <CustomLabel text="Label" bgColor="#C4E7D0" textColor="#106132"></CustomLabel>
  <CustomLabel text="Label" bgColor="#513CCC" textColor="white"></CustomLabel>
</template>

<script>
import Badge from './app/shared/modules/components/Badge/CustomBadge.vue'
import CustomLabel from './app/shared/modules/components/Label/CustomLabel.vue'
export default {
  components:{
    Badge,
    CustomLabel
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
