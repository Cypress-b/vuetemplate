<template>
    <div id="demo">
        <el-button @click="getSomeThing" size="large" type="primary">Hello World!</el-button>
    </div>
</template>

<script>
import ElButton from 'element-ui/packages/button/src/button';
export default {
  name: 'index',
  data () {
    return {
    }
  },
  methods:{
      getSomeThing(){
          this.$test();
      }
  },
  components:{
        ElButton
    },
}

</script>

<style scoped lang="less" rel="stylesheet/less">
@import '../assets/css/globel.less';
#demo{
    background-color: @bgcolor;
    text-align: center
}
</style>
