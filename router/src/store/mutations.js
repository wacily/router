export const mutations = {
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