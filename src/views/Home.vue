<template>
    <div class="home">
        <TopNav/>
      <div class="banner">
          <h1>Halo UI</h1>
          <h2>一个厉害的 UI 框架</h2>
          <p class="actions">
              <a href="http://github.com">GitHub</a>
              <router-link to="/doc">开始</router-link>
          </p>
      </div>
    </div>
  </template>
<script lang="ts">
import TopNav from '../components/TopNav.vue'
export default {
    components:{
        TopNav
    }
}
</script>

<style lang="scss" scoped>
.home {
    background: linear-gradient(90deg, rgb(90, 242, 222) 0%, rgba(0,232,255,1) 100%);

}
.banner {
    padding: 100px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    > .actions {
        padding: 8px 0;
        a {
            margin: 0 8px;
            background-color: #fff;
            display: inline-block;
            $h:14px;
            border-radius: $h/2;
            padding: 8px 14px;
            &:hover {
                text-decoration: none;
            }
        }
    }
}


</style>