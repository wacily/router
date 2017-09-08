import Vue from 'vue'
import Vuex from 'vuex'

import {product} from './modules/product'
import {mutations} from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        message:{
            show:false,
            msg:"",
            ok:true
        },
        settimeout:{
            alert_settimeout:null
        }
    },
    getters:{
        message: state => state.message
    },
    mutations:{
        alertOk(state,messager){
            state.message = {
                show:true,
                msg:messager,
                ok:true
            }
            
            clearTimeout(state.settimeout.alert_settimeout);
            state.settimeout.alert_settimeout = setTimeout(function(){
                state.message.show = false;
            },5000);
        },
        alertError(state,messager){
            state.message = {
                show:true,
                msg:messager,
                ok:false
            }
            
            clearTimeout(state.settimeout.alert_settimeout);
            state.settimeout.alert_settimeout = setTimeout(function(){
                state.message.show = false;
            },5000);
        }
    }
    ,modules:{
        product
    }
});