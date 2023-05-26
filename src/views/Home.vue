<template>
    <div class="home">
        <div class="topNavAndBanner">
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
    <div class="features">
        <svg class="icon" >
             <use xlink:href="#icon-Vue"></use>
        </svg>
        <svg class="icon" >
             <use xlink:href="#icon-typescript"></use>
        </svg>
        <svg class="icon" >
             <use xlink:href="#icon-sass"></use>
        </svg>
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
.topNavAndBanner {
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
.features {
    >svg {
        width: 64px;
        height: 64px;
    }
}

</style>