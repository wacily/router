<template>
  <div id="app" class="container-fluid">
    <div class="alert alert-info" role="alert">
      <nav class="page-nav">
        <ul class="clearfix">
          <li class="logo">
            <router-link to="/">
              <img src="./assets/logo.png">
            </router-link>
          </li>
          <li>
            <router-link to="/list">数据列表</router-link>
          </li>
          <li>
            <router-link to="/add">添加数据</router-link>
          </li>
          <li>
            <router-link to="/setting">数据设置</router-link>
          </li>
          <li>
            <router-link to="/users/list">用户列表</router-link>
          </li>
          <li>
            <router-link to="/test">测试页面</router-link>
          </li>
        </ul>
      </nav>
    </div>
  
    <router-view></router-view>    

    <modal></modal>
  
  </div>
</template>

<script>

import Modal from './components/common/Modal'

export default {
  name: 'app',
  components:{
    Modal
  }
}
</script>