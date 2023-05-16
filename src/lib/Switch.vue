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
> span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $circleHeight;
    width: $circleHeight;
    background: white;
    border-radius: $circleHeight / 2;
    transition: left 250ms;
  }

  &.checked {
    background: #1890ff;
  }

  &:focus {
    outline: none;
  }

  &:active {
    > span {
      width: $circleHeight + 6px;
    }
  }

  &.checked:active {
    > span {
      width: $circleHeight + 6px;
      margin-left: -6px;
    }
  }

  &.checked > span {
    left: calc(100% - #{$circleHeight} - 2px);
  }
}


</style>