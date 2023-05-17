    <template>
      <div>
        <Button @click="onClick">我是按钮1</Button>
      </div>
    </template>
    
    <script lang="ts">
    import Button from '../lib/Button.vue'
    
    export default {
      components: {Button},
      setup() {
        const onClick = () => {
          console.log(1)
        }
        return {onClick}
      }
    }
    </script>
    
    <style lang='scss' scoped>
    
    </style>