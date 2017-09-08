<template>
  <div id="app" class="container-fluid">
    <header><page-head></page-head></header>
    <bodyer>
      <div class="page-left-menu"><page-menu></page-menu></div>
      
      <div class="page-v-line"></div>
      <div class="page-right-content"><router-view></router-view> </div>
    </bodyer>
    <footer><page-foot></page-foot></footer>
    <modal></modal>  
  </div>
</template>

<script>

import Modal from './components/common/Modal'
import pageHead from './components/page-head.vue'
import pageFoot from './components/page-foot.vue'
// import pageMenu from './components/page-left-menu.vue'
import pageMenu from './components/newLeftMenu.vue'

export default {
  name: 'app',
  components:{
    Modal,
    'page-head':pageHead,
    'page-foot':pageFoot,
    'page-menu':pageMenu
  }
}
</script>