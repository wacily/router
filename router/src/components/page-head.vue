<template>
  <div class="page-head">
    <nav class="page-nav">
      <ul class="clearfix">
        <li class="logo">
          <router-link to="/"><img src="../assets/logo.png"></router-link>
        </li>
        <li v-for="menu in menuList">
          <router-link :to="menu.url" v-text="menu.name"></router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'pageHead',
  data(){
    return{
      menuList:[]
    }
  },
  created:function(){
    this.menuList = [
        {name:"数据列表", url:"/list"},
        {name:"添加数据", url:"/add"},
        {name:"数据设置", url:"/setting"},
        {name:"用户列表", url:"/users/list"},
        {name:"测试页面", url:"/test"},
        {name:"Element-Ui", url:"/testEUI"}
    ];
  }
}
</script>

<style scoped>
.page-head{
  background-color: #D9EDF7;
  height: 60px;
  line-height: 60px;
  padding-left:25px;
}
</style>