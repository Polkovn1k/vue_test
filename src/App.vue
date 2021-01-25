<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view></router-view>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import TheNavbar from './components/TheNavbar'

export default {
  setup() {
    return {};
  },
  components: {
    TheNavbar,
  }
}
</script>

<style>

</style>
