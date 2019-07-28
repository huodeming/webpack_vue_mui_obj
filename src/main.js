
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);//把路由注册到Vue中
import VueSource from 'vue-source';
Vue.use(VueSource);//把远程请求注册到Vue中





import App from './App.vue';


var vm = new Vue({
    el:'#app',
    //component:{ App },
    render: c => c(App),//会把App中内容覆盖到index.html中的#app标签,所以router-link与router-view要写在App.vue文件中. 
    //router  //将路由对象挂载到 vm 实例上
});


