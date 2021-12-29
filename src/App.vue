<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage'
export default {
  name: 'App',
  mounted() {
    storage.clear('user1')
  },
}
</script>

<style lang="scss">
  @import url('./../public/scss/reset.scss');

</style>
