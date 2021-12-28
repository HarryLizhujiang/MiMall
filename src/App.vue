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

<style>

</style>
