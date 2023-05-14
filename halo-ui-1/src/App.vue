<script lang="ts" >
import { provide,ref } from 'vue';

export default {
  setup() {
    const asideVisible = ref(true)
    provide('asideVisible',asideVisible)
  }
}
</script>

<template>
  <div id="app">
    <router-link to="/doc"></router-link>
    <router-view></router-view>
  </div>
  
</template>

<style scoped>

</style>
