import axios from 'axios'
import store from '@/store/index'

//添加请求拦截器
axios.interceptors.request.use(
  function(config){ //在发送请求之前做些什么
    return config;
  },
  function(error){ //对请求错误做些什么
    return Promise.reject(error);
  }
);

//添加响应拦截器
axios.interceptors.response.use(
  function(response){ //对响应数据做点什么
    return response;
  },
  function(error){ //对响应错误做点什么
    //store.commit('alertError',"Error：" + error.response.statusText + "，HttpCode = " + error.response.status);
    store.commit('alertError',"Error：" + error.msg);
    console.log("-------------------------begin-------------------------")
    console.log(error);
    console.log("-------------------------end---------------------------")
    return Promise.reject(error);
  }
)

export let http = {
  baseUrl: "http://172.20.0.130",  
  request:function(_method, _url, _reqdata){

    _reqdata = _reqdata || {};

    var config = {
      method: _method,
      url: _url,
      baseURL:this.baseUrl
    };

    if(/^http[s]?:\/\//.test(_url)){
      config.baseURL = '';
    }

    switch(_method.toLowerCase()){
      case 'get':
        config.params = _reqdata;
        break;
      case 'post':
      case 'put':
      case 'patch':
        config.data = _reqdata;  
        break;
      default:
        break;
    }

    return new Promise(function(resolve, reject){
      axios(config).then(function(resData){
        resolve(resData);
      }).catch(function(error){
        reject(error);
      });
    });
  },
  get:function(url,reqdata){
    return this.request('get',url,reqdata);
  },
  post:function(url,reqdata){
    return this.request('post',url,reqdata);
  },
}