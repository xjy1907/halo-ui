<template>
    
    <div class="doc">
        <TopNav/>
    <div class="content">
        <aside>侧边栏</aside>
        <main>主内容区</main>
        
    </div>
    </div>
</template>

<script lang="ts">
import TopNav from '../components/Topnav.vue'
export default {
    components: {
        TopNav
    }
}
</script>

<style scoped>

</style>