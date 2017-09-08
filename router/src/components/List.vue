<template>
  <div class="list">
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>序号</th>
                <th>学号</th>
                <th>姓名</th>
                <th>性别</th>
                <th>出生日期</th>
                <th>家长姓名</th>
                <th>家长电话</th>
                <th>家庭住址</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(model,index) in list.data">
                <td v-text="index + 1"></td>
                <td v-text="model.id"></td>
                <td v-text="model.name"></td>
                <!-- <td v-text="model.sex == 0 ? '女' : '男'"></td> -->
                <!-- <td>{{model.sex | fsex}}</td> -->
                <td>{{model.sex | sex}}</td>
                <td v-text="model.brithday"></td>
                <td v-text="model.parent"></td>
                <td v-text="model.p_tel"></td>
                <td v-text="model.addres"></td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="8">
                    <div class="row">
                        <div class="col-sm-6 list-foot-left">
                            <ul class="clearfix">
                                <li>每页显示<span v-text="list.pageSize"></span>条</li>
                                <li>
                                    当前显示第
                                    <span v-text="(list.pageIndex - 1) * list.pageSize + 1"></span>
                                    ~
                                    <span v-text="(list.pageIndex - 1) * list.pageSize + list.data.length"></span>
                                    条
                                </li>
                                <li>共<span v-text="list.rowCount"></span>条数据</li>
                            </ul>
                        </div>
                        <div class="col-sm-6 clearfix list-foot-right">
                            <ul class="clearfix">
                                <li class="tfoot-fanye" v-bind:class="{'tfoot-fanye-disabled':list.pageIndex==1,'tfoot-fanye':list.pageIndex > 1}" v-on:click="getData(1,pageSize,list.pageIndex > 1)">首页</li>
                                <li class="tfoot-fanye" v-bind:class="{'tfoot-fanye-disabled':list.pageIndex==1,'tfoot-fanye':list.pageIndex > 1}" v-on:click="getData(list.pageIndex - 1,pageSize,list.pageIndex > 1)">上一页</li>
                                <li>
                                    <span v-text="list.pageIndex"></span> / <span v-text="list.pageCount"></span>
                                </li>
                                <li class="tfoot-fanye" v-bind:class="{'tfoot-fanye-disabled':list.pageIndex==list.pageCount,'tfoot-fanye':list.pageIndex < list.pageCount}" v-on:click="getData(list.pageIndex + 1,pageSize,list.pageIndex < list.pageCount)">下一页</li>
                                <li class="tfoot-fanye" v-bind:class="{'tfoot-fanye-disabled':list.pageIndex==list.pageCount,'tfoot-fanye':list.pageIndex < list.pageCount}" v-on:click="getData(list.pageCount,pageSize,list.pageIndex < list.pageCount)">尾页</li>
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

import {Math} from '@/filter/Math'

//console.log(Math);

export default {
  name: 'list',
  data () {
    return {
      list:null,
      pageSize:20,
      pageCount:1,
      pageIndex:1,
      curstomNum:null
    }
  },

  // 这样写过滤器是ok的。
  // filters:{
  //     fsex:function(value){
  //       var result = "妖怪";
  //       switch(value){
  //           case 0 :
  //               result = "女";
  //               break;
  //           case 1 :
  //               result = "男";
  //               break;
  //           default :
  //               break;
  //       }
  
  //       return result;
  //     }
  // },

  //这样写过滤器也可以。
  // filters:{
  //     fsex:function(value){
  //         return Math.sex(value);
  //     }
  // },

  //这样写过滤器也可以。
  filters:Math, 
  methods:{
    getData:function(p_index,p_size,flag){
        if(!flag){
            return;
        }
        var get_list = {
            pageIndex: p_index,
            pageSize:p_size,
            pageCount:3,
            rowCount:60,
            data:[
                {
                    id:"20173602016",
                    name:"郭靖",
                    sex:1,
                    brithday:"1987-08-21",
                    parent:"郭啸天",
                    p_tel:"13589898989",
                    addres:"内蒙古呼和浩特"
                },
                {
                    id:"20173602018",
                    name:"黄蓉",
                    sex:0,
                    brithday:"1997-06-28",
                    parent:"黄药师",
                    p_tel:"13669696969",
                    addres:"江苏省徐州市桃花岛"
                }
            ]
        };

        this.list = get_list;
        this.pageCount = get_list.pageCount;
        this.pageIndex = get_list.pageIndex;
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
tfoot{
    font-size:16px;
}
.list > table th{
    text-align: center;
}
.list-foot-left ul,
.list-foot-right ul
{
    padding: 0;
    margin: 0;
}
.list-foot-right ul{
    float: right;
}

.list-foot-left li,
.list-foot-right li
{
    float: left;
    margin-right:20px;
    margin-top:8px;
    list-style-type: none;
}
.list-foot-right li:last-child{
    margin-top: 0 !important;
}
#curstomPageNum{
    width:60px;
}
.tfoot-fanye{
    cursor: pointer;
    color:#2E8B57;
}
.tfoot-fanye-disabled{
    cursor: not-allowed;
    color:#666;
}
#tfoot-btn-fanye{
    cursor: pointer;
}
</style>
