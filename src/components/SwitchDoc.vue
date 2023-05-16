<template>
  <div>
    <Switch :checked="isChecked" @update:checked="isChecked = $event"/>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import {ref} from 'vue'

export default {
    components: { Switch },
    setup() {
      let isChecked = ref(false)
      return {isChecked}
    }
}
</script>

<style scoped>

</style>