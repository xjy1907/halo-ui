<template>
  <div class="top-nav">
          <div class="logo" @click="toggleAside">logo</div>
          <ul class="menu">  
        <li>菜单一</li>   
        <li>菜单二</li>
            </ul>
      </div>
</template>

<script lang="ts">
import { inject,Ref } from 'vue';

export default {
    setup() {
        const asideVisible = inject<Ref<boolean>>('asideVisible');
            console.log(asideVisible?.value);
        const toggleAside = () => {
            console.log(1)
            asideVisible!.value = !asideVisible?.value 
            console.log(`切换后的value：${asideVisible?.value}`)
        }
        return {
            toggleAside
        }
    }
        
}
</script>

<style lang="scss" scoped>
.top-nav{
    background-color: pink;
    display: flex;
    padding: 16px;
    position: relative;
    z-index: 10;
    > .logo {
        max-width: 6em;
        margin-right: auto;
    }
    > .menu {
        display: flex;
        white-space: nowrap;
        flex: nowrap;
        > li {
            margin: 0 1em;
        }
    }
}


</style>