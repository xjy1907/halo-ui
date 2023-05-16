<template>
    <div>
      <button @click="toggle" :class="{checked:checked}">
        <span></span>
      </button>
    </div>
  </template>

<script lang="ts">
import {ref} from 'vue'

export default {
  props: {
    checked:Boolean
  },
  setup(props,context) {
    // const props = defineProps({checked:Boolean})
    const toggle = () => {    
      context.emit('update:checked',!props.checked)
    }
    return {
      toggle,
    }
  }
}
</script>

<style lang="scss" scoped>
$buttonHeight: 26px;
$circleHeight: $buttonHeight - 4px;
button {
  background: #969696;
  width: $buttonHeight*2;
  height: $buttonHeight;
  border: none;
  border-radius: $buttonHeight/2;
  position: relative;
  > span {
  background: white;
  height: $circleHeight;
  width: $circleHeight;
  border-radius: $circleHeight / 2;
  position: absolute;
  top: 2px;
  left: 2px;
  transition: left 250ms;

}
}

button.checked{
  background: #0066FF;
}

button.checked span {
  left: calc(100% - #{$circleHeight} - 2px);;
  
  
}

button:focus {
  outline: none;
}
</style>