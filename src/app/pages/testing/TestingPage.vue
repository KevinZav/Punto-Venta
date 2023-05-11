<template>
  <div class="container">
    <h1>This is a Testing Page</h1>
    <p>You can do some test in your components in this page</p>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'TestingPage'
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/index.scss';
.container {
  h1 {
    color: $primary-blue-900;
  }

  p {
    color: $primary-blue-800;
  }

  hr {
    height: 1px;

    background: $primary-blue-700;
    border: none;
  }
}
</style>