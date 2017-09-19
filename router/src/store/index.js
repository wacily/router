import Vue from 'vue'
import Vuex from 'vuex'

import {product} from './modules/product'
import {mutations} from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        user:{
            islogin:false,
            name:"mahui"
        },
        message:{
            show:false,
            msg:"",
            ok:true
        },
        settimeout:{
            alert_settimeout:null,
            logintime:null
        }
    },
    getters:{
        message: state => state.message
    },
    mutations,
    modules:{
        product
    },

});