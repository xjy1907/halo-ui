<template>
    <div class="top-nav">
        <div class="logo">
            <svg class="icon" >
    <use xlink:href="#icon-halo"></use>
                </svg>
        </div>
        <ul class="menu">
            <li>
      <router-link to="/doc">文档</router-link>
          </li>
        </ul>
        <span class="toggleAside" @click="toggleAside"></span>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue';

export default {
    setup() {
        const asideVisible = inject<Ref<boolean>>('asideVisible');

        const toggleAside = () => {
            asideVisible!.value = !asideVisible?.value
            
        }
        return {
            toggleAside
        }
    }

}
</script>

<style lang="scss" scoped>
.top-nav {
    display: flex;
    padding: 4px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;

    >.logo {
        max-width: 6em;
        margin-right: auto;
        >svg {
            width: 32px;
            height: 32px;
        }
    }

    >.menu {
        display: flex;
        white-space: nowrap;
        flex: nowrap;

        >li {
            margin: 0 1em;
        }
    }

    > .toggleAside {
        display: none;
        width: 24px;
        height: 24px;
        background-color: red;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
    }

  @media(max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>