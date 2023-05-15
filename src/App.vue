<script lang="ts" >
import { provide,ref } from 'vue';
import { router } from './router';

export default {
  setup() {
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(true)
    provide('asideVisible',asideVisible)
    router.afterEach(()=>{
      if(width <= 500){
        asideVisible!.value = false 
      }
            
    })
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
