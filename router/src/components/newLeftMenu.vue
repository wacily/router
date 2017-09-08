<template>
    <div class="page-left-menu">       
       <ul class="left-menu-top clearfix left-menu-top-open">
           <li><Icon type="navicon-round" size="22" color="#bbb"></Icon></li>
           <li><Icon type="chevron-left" size="22" color="#bbb"></Icon></li>
       </ul>
       <ul class="left-menu-list clearfix left-menu-list-open">
           <li>
               <div class="menu-list-first-text"><Icon type="ios-paper"></Icon><span>内容管理</span><Icon type="chevron-up"></Icon></div>
               <ul class="menu-list-second">
                   <li>dgffdfg</li>
                   <li>dfdfg</li>
                   <li>dfgdfgd</li>
               </ul>
           </li>
           <li>
               <div class="menu-list-first-text"><Icon type="ios-people"></Icon><span>用户管理</span><Icon type="chevron-down"></Icon></div>
           </li>
           <li>
               <div class="menu-list-first-text"><Icon type="ios-body"></Icon><span>角色管理</span><Icon type="chevron-down"></Icon></div>
           </li>
           <li>
               <div class="menu-list-first-text"><Icon type="ios-albums"></Icon><span>权限管理</span><Icon type="chevron-down"></Icon></div>
           </li>
       </ul>
    </div>
</template>

<script>
  export default {
    name:"pageLeftMenu",
    data() {
      return {
        isCollapse: false,
        iconSize:18
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  li{
      list-style-type: none;
  }
  .left-menu-top{
      background-color: #495060;
      margin: 0;
      border-bottom: 1px solid #bbb;
      height:40px;
  }
  .left-menu-top > li{      
      height: 30px;
      width: 30px;
      margin:5px 15px;
      text-align: center;
      padding-top:5px;
  }
  .left-menu-top-open > li:first-child{
      float:left;
  }
  .left-menu-top-open > li:last-child{
      float:right;
      cursor: pointer;
  }

  .left-menu-list{
      margin: 0;
      padding: 0;
  }
  .left-menu-list > li:not(:last-child){
      margin-bottom: 1px;
  }
  .left-menu-list-open li{
      margin: 0;
      padding: 0;
  } 
  .left-menu-list-open .menu-list-first-text{
      background-color: #495060;
      margin: 0;
      height:40px;
      line-height: 40px;
      color:#bbb;
  }
  .left-menu-list-open .menu-list-first-text i{
      font-size:18px;
  }
  .left-menu-list-open .menu-list-first-text i:first-child{
      margin: 0 20px;
      position: relative;
      top:2px;
  }
  .left-menu-list-open .menu-list-first-text span{
      font-size:16px;
      display: inline-block;
      width:150px;
  }
  .left-menu-list-open .menu-list-first-text i:last-child{
      
  }
</style>