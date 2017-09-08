<template>
  <div class="setting">
    
    <h1>
      <Icon type="settings" color="#19be6b"></Icon> {{msg}}
    </h1>
    <div style="padding-top:20px;">
      <h3>这里面使用子路由</h3>
      <div class="box">
        <ul class="clearfix">
          <li v-bind:class="{selected:selectedName == 'hst'}" v-on:click="changeTab('/setting/','hst')">云主机</li>
          <li v-bind:class="{selected:selectedName == 'dns'}" v-on:click="changeTab('/setting/dns','dns')">DNS</li>
          <li v-bind:class="{selected:selectedName == 'cdn'}" v-on:click="changeTab('/setting/cdn','cdn')">CDN</li>
        </ul>        
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'setting',
  data () {
    return {
      msg: '设置页面',
      selectedName:'hst'
    }
  },
  methods:{
    changeTab:function(path,name){
      this.$router.push(path);
      this.selectedName = name;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {font-weight: normal;}
.box > ul{padding:0; margin: 0 0 10px 0; width:100%; border-bottom:1px solid #CCC;}
.box li{list-style-type: none; float: left; width:120px; text-align: center; height: 50px; line-height: 50px; cursor: pointer;}
.box li:hover{color:#2d8cf0;}
.box .selected{color:#2d8cf0; border-bottom: 2px solid #2d8cf0;}
</style>
