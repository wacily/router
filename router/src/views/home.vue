<template>
  <div class="home">
    <hello></hello>
  </div>
</template>

<script>

import Hello from '@/components/Hello'

export default {
  name: 'home',
  data () {
    return {}
  },
  components:{
    Hello
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
