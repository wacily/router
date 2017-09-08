<<template>
  <div class="host">
      <h1 v-text="msg" style="margin:10px 0 30px 0;"></h1>
      <Tabs type="card" name='tab1' @on-click="eventClick">
        <Tab-pane name="tab1" label="标签一">标签一的内容</Tab-pane>
        <Tab-pane name="tab2" label="标签二">标签二的内容</Tab-pane>
        <Tab-pane name="tab3" label="标签三">标签三的内容</Tab-pane>
      </Tabs>
  </div>
</template>

<script>
export default {
  name:"host",
  data(){
      return {
          msg:"this is HOST page"
      }
  },
  methods:{
      eventClick:function(name){
          alert(name);
      }
  }
}
</script>

<style scoped>
    .host{width:800px; margin: auto;}
</style>

