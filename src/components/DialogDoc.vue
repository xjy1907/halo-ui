<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <div style="position: relative; z-index: 1;">
  <Button @click="toggle">111</Button>
  <Dialog v-model:visible="isVisible" :closeOnClickOverlay="true" :ok="f1" :cancel="f2">
  <template v-slot:title>
    <strong>加粗的标题</strong>
  </template>
  <template v-slot:content>
    <div>
      内容一
    </div>
    <div>
      内容二
    </div>
  </template>

  </Dialog>
</div>
<div style="position: relative; z-index: 2; width: 300px; height: 300px; background: red;"></div>
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