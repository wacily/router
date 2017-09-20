import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'

// 路由初始化时全部加载。
// import Home from '@/views/home'
// import List from '@/views/dataList'
// import Add from '@/views/addData'
// import Setting from '@/views/setting'
// import Users from '@/views/users/userList'

// 懒加载（按需加载），根据需要加载，单个组件
// const Home = resolve => require(['@/views/home.vue'],resolve)

// 懒加载（按需加载），根据需要加载，按组分块
// const Home = r => require.ensure([], () => r(require('@/views/home.vue')), 'group-foo')

// import SettingHst from '@/views/sets/host'
// import SettingDns from '@/views/sets/dns'
// import SettingCdn from '@/views/sets/cdn'


//首页
const Home = resolve => require(['@/views/home.vue'], resolve)

//固定数据的列表页面
const List = resolve => require(['@/views/dataList.vue'], resolve)

//添加数据页面
const Add = r => require.ensure([], () => r(require('@/views/addData.vue')), 'addpage')

//用户设置页面
const Setting    = r => require.ensure([],()=>r(require('@/views/setting.vue')),'settings')
const SettingHst = r => require.ensure([],()=>r(require('@/views/setting/host.vue')),'settings')
const SettingDns = r => require.ensure([],()=>r(require('@/views/setting/dns.vue')),'settings')
const SettingCdn = r => require.ensure([],()=>r(require('@/views/setting/cdn.vue')),'settings')

//用户数据页面，通过接口获取
const Users = resolve => require(['@/views/users/userList.vue'], resolve)

// const SettingHst = resolve => require(['@/views/set/host.vue'], resolve)
// const SettingDns = resolve => require(['@/views/set/dns.vue'], resolve)
// const SettingCdn = resolve => require(['@/views/set/cdn.vue'], resolve)

//ASIOX封装测试页面
const Test = resolve => require(['@/views/Test.vue'], resolve)

//Element-Ui的测试和使用
const TElementUi = resolve => require(['@/views/testElementUi.vue'], resolve)

Vue.use(Router)

// export default new Router({
//   routes: [
//     { path: '/', name: 'Home', component: Home },
//     { path: '/list', name: 'List', component: List },
//     { path: '/add', name: 'Add', component: Add },
//     {
//       path: '/setting', name: 'Setting', component: Setting
//       , children: [
//         { path: "/", name: "host", component: SettingHst },
//         { path: "dns", name: "dns", component: SettingDns },
//         { path: "cdn", name: "cdn", component: SettingCdn }
//       ]
//     },
//     { path: '/users/list', name: 'Users', component: Users },
//     {path: '/test', name:"Test", component: Test}
//   ]
// })

var router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/list', name: 'List', component: List },
    { path: '/add', name: 'Add', component: Add },
    {
      path: '/setting', name: 'Setting', component: Setting
      , children: [
        { path: "/", name: "host", component: SettingHst },
        { path: "dns", name: "dns", component: SettingDns },
        { path: "cdn", name: "cdn", component: SettingCdn }
      ]
    },
    { path: '/users/list', name: 'Users', component: Users },
    {path: '/test', name:"Test", component: Test},
    {path: '/testEUI', name: 'TestEUI', component: TElementUi}
  ]
});

//在 每次每一个路由改变的时候都得执行一遍，即：离开当前路由之后，进入下一个路由之前
router.beforeEach(function(to,from,next){
  console.log('================beforeEach  begin===================>');
  console.log('this : ',this);
  console.log('to : ',to);
  console.log('from : ',from);
  console.log('next : ',next);

  var flag = store.state.user.islogin
  
  if(!flag){
    //掉接口，判断当前是否已经登录。

    //如果已经登录 ==》设置用户信息
    store.commit('login', {name:'用户姓名'});

    //如果没有登录 ==》啥也不做。

  }

  if(!flag && to.path != '/login'){  //如果没有登录 && 没有去登录页面
    next({path: '/login'});
  }else{
    next();
  }

  // to.matched.some(function(record){
  //   console.log('record : ',record);
  //   console.log('record.meta.requiresAuth',record.meta.requiresAuth);
  // })

  // next();
  // console.log('================beforeEach  end===================>');
});

//在 每次每一个路由改变的时候都得执行一遍，即：进入下一个新路由之后
router.afterEach(function(to,from){
  console.log('================afterEach  begin===================>');
  console.log('to : ',to);
  console.log('from : ',from);
  console.log('================afterEach  end===================>');
});

export default router;
