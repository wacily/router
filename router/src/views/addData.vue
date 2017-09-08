<template>
  <div class="addData">
    <h1 v-text="msg"></h1>

    <div>
      <h3 style="margin:20px 0;">手动跳转页面</h3>
      <input type="button" class="btn btn-primary" style="width:200px;" value="用户设置" @click="FnGoSetting" />
    </div>
    <div class="mydiv">
      <Slider 
        v-model="slider.value" 
        range 
        @on-change="showVal" 
        :min="slider.min" 
        :max="slider.max" 
        :step="slider.step" 
        :show-stops="slider.showStops">
      </Slider>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'addData',
    data () {
      return {
        msg: '添加数据页面',
        slider:{
          value:[30,70],
          min:0,
          max:100,
          step:10,
          showStops:true
        }
      }
    },
    methods:{
      FnGoSetting:function(){
        this.$router.push("/setting");
      },
      showVal:function(val){
        alert(val[0] + '--' + val[1]);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {font-weight: normal;}
  .mydiv{padding-top:20px;}
</style>
