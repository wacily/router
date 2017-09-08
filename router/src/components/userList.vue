<template>
  <div class="list">
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>序号</th>
                <th>编号</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>电话</th>
                <th>邮箱</th>
                <th>详情</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(model,index) in list">
                <td v-text="index + 1"></td>
                <td v-text="model.UserId"></td>
                <td v-text="model.UserName"></td>
                <td v-text="model.Age"></td>
                <td v-text="model.Tel"></td>
                <td v-text="model.Mail"></td>
                <td v-text="model.Detail"></td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="7">
                    <div class="row">
                        <div class="col-sm-12 clearfix tfoot-list">
                            <ul class="clearfix">
                                <li class="tfoot-fanye" v-bind:class="{'tfoot-fanye-disabled':pageIndex==1,'tfoot-fanye':pageIndex > 1}" v-on:click="getData(1,pageSize,pageIndex > 1)">首页</li>
                                <li class="tfoot-fanye" v-bind:class="{'tfoot-fanye-disabled':pageIndex==1,'tfoot-fanye':pageIndex > 1}" v-on:click="getData(pageIndex - 1,pageSize,pageIndex > 1)">上一页</li>
                                <li>
                                    <span v-text="pageIndex"></span> / <span v-text="pageCount"></span>
                                </li>
                                <li class="tfoot-fanye" v-bind:class="{'tfoot-fanye-disabled':pageIndex==pageCount,'tfoot-fanye':pageIndex < pageCount}" v-on:click="getData(pageIndex + 1,pageSize,pageIndex < pageCount)">下一页</li>
                                <li class="tfoot-fanye" v-bind:class="{'tfoot-fanye-disabled':pageIndex==pageCount,'tfoot-fanye':pageIndex < pageCount}" v-on:click="getData(pageCount,pageSize,pageIndex < pageCount)">尾页</li>
                                <li>
                                    <form class="form-inline">
                                        <div class="form-group">
                                            <div class="input-group">
                                                <input type="text" v-model="curstomNum" class="form-control" id="curstomPageNum" placeholder="页码">
                                                <div class="input-group-addon" id="tfoot-btn-fanye" v-on:click="pageGo">跳转</div>
                                            </div>
                                        </div>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                </td>
            </tr>
        </tfoot>
    </table>
  </div>
</template>

<script>

import {service_users} from '@/http/service_users'

export default {
  name: 'list',
  data () {
    return {
      list:{},
      pageSize:20,
      pageCount:1,
      pageIndex:1,
      curstomNum:null
    }
  },
  methods:{
    getData:function(p_index,p_size,flag){
        if(!flag){
            return;
        }

        var self = this;

        var reqData = {
            pageIndex:p_index,
            pageSize:p_size
        };
        
        service_users.getAll(reqData)
            .then(
                function(request){
                    
                    var req = request.data;
                    
                    if(req.status){
                        self.list = req.Data.list;
                        self.pageCount = 6;
                        self.pageIndex = p_index;
                    }
                }
            )
            .catch(error=>console.log(error));

        
    },
    pageGo: function(){
        var index = parseInt(this.curstomNum);

        if(!index || index < 1){
            index = 1;
        }else if(index > this.pageCount){
            index = this.pageCount;
        }

        this.curstomNum = index;

        //如果当前页码 == 输入的页码值  ==》 直接返回，什么也不做。

        if(index != this.pageIndex){
            this.getData(index,this.pageSize,true);
        }else{
            
            console.log("$store._modules : ", this.$store);
            
            //this.$emit('eventShowMessage','当前已经是这一页了！',false);
            //this.$store.commit('product/reName','新名称');  //调用模块下的mutations
            this.$store.commit('alertError','跳转的页码与当前页码相同！');
        }
    }
  },
  created:function(){
    this.getData(1,20,true);
  }
}
</script>

<style scoped>
tfoot{font-size: 16px;}
.list > table th{text-align: center;}
.tfoot-list ul{padding: 0; margin: 0; float: right;}
.tfoot-list li{float: left; margin-right: 20px; margin-top: 8px; list-style-type: none;}
.tfoot-list li:last-child{margin-top: 0 !important;}
#curstomPageNum{width: 60px;}
.tfoot-fanye{cursor: pointer; color: #2E8B57;}
.tfoot-fanye-disabled{cursor: not-allowed; color: #666;}
#tfoot-btn-fanye{cursor: pointer;}
</style>
