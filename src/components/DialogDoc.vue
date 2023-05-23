<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">111</Button>
  <Dialog v-model:visible="isVisible" :closeOnClickOverlay="true" :ok="f1" :cancel="f2"></Dialog>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {ref} from 'vue'

export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const isVisible = ref(false)
    const toggle = ()=> {
      isVisible.value = !isVisible.value
    }
    const f1 = ()=> {
      return false
    }
    const f2 = ()=> {

    }
    return {
      isVisible,
      toggle,
      f1,
      f2
    }
  }
}
</script>

<style scoped>

</style>