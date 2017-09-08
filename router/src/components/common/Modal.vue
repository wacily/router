<template>
    <div class="Modal">
        <div v-if="alertShow.show" :class="['common-node-message', alertShow.ok ? 'common-node-message-success' : 'common-node-message-error']">
            {{ alertShow.msg }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    computed:{
        alertShow(){
            var message = this.$store.state.message;

            //console.log('this.$store.message',this.$store.message);  //调用全局的state
            //console.log('this.$store.getters.product.testName',this.$store.getters.product.testName);  //调用product模块的state

            return message;
        }
    }
}
</script>