<template>
  <div class="top-nav">
          <div class="logo">logo</div>
          <ul class="menu">  
        <li>菜单一</li>   
        <li>菜单二</li>
            </ul>
      </div>
</template>

<script>
export default {
  
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