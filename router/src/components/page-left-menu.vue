<template>
  <Row>
       <Col span="24">
            <div>
              <Row class="left-menu-top-box">
                <Col span="8">
                  <Icon type="navicon-round" size="22" color="#bbb"></Icon>
                </Col>
                <Col offset="8" span="8">
                  <Icon type="chevron-left" size="22" color="#bbb" style="cursor: pointer"></Icon>
                </Col>
              </Row>
            </div>
            <Menu :theme="theme2" :open-names="['1']" accordion>
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper"></Icon>
                        内容管理
                    </template>
                    <MenuItem name="1-1">文章管理</MenuItem>
                    <MenuItem name="1-2">评论管理</MenuItem>
                    <MenuItem name="1-3">举报管理</MenuItem>
                    <MenuItem name="1-4">这个管理</MenuItem>
                    <MenuItem name="1-5">那个管理</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        用户管理
                    </template>
                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                    <MenuItem name="2-2">超级用户</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        统计分析
                    </template>
                    <MenuGroup title="使用">
                        <MenuItem name="3-1">新增和启动</MenuItem>
                        <MenuItem name="3-2">活跃分析</MenuItem>
                        <MenuItem name="3-3">时段分析</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="留存">
                        <MenuItem name="3-4">用户留存</MenuItem>
                        <MenuItem name="3-5">流失用户</MenuItem>
                    </MenuGroup>
                </Submenu>
            </Menu>
        </Col>
     </Row>     
</template>

<script>
export default {
  name: 'pageLeftMenu',
  data(){
    return{
      theme2: 'dark'
    }
  },
  methods:{
    FnMenuFold:function(){

    },
    FnMenuOpen:function(){
      
    }
  }
}
</script>

<style scoped>

</style>