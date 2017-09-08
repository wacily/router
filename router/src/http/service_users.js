import {api}  from './api'
import {http} from './http'

export let service_users = {
    login: function(reqData){
        return http.get(api.login,reqData);
    },
    getAll:function(reqData){
        return http.get(api.getAll, reqData);
    }
}