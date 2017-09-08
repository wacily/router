<template>
  <div class="Test">
    <h1 v-text="msg"></h1>

    <div class="mydiv">
        <Button type="success" v-on:click="FnGetServerData">发送请求</Button>
    </div>
    <div class="mydiv">
        <Button type="success" v-on:click="FnLogin">用户登录</Button>
    </div>

  </div>
</template>

<script>
  
  import {service_users} from '@/http/service_users'
  
  export default {
    name: 'Test',
    data () {
      return {
        msg: 'ASIOX封装测试页面'
      }
    },
    methods:{
      FnGetServerData:function(){        
        var reqData = {
            pageIndex:1,
            pageSize:20
        };
        service_users.getAll(reqData).then(
            function(data){
                console.log(data);
            }
        );        
      },
      FnLogin:function(){
        var reqData = {
            userName:"mahui",
            userPwd:"123456"
        };        
        service_users.login(reqData).then(
            function(resData){
                console.log(resData);
            }
        ).catch(
            function(error){
                console.log(error);
            }
        );
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {font-weight: normal;}
  .mydiv{padding-top:20px;}
</style>
