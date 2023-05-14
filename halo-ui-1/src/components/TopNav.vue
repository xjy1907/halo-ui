<template>
    <div class="top-nav">
        <div class="logo">logo</div>
        <ul class="menu">
            <li>菜单一</li>
            <li>菜单二</li>
        </ul>
        <span class="toggleAside" @click="toggleAside"></span>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue';

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
.top-nav {
    background-color: pink;
    display: flex;
    padding: 16px;
    position: relative;
    z-index: 10;

    >.logo {
        max-width: 6em;
        margin-right: auto;
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