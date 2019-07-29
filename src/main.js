
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);//把路由注册到Vue中
import VueSource from 'vue-source';
Vue.use(VueSource);//把远程请求注册到Vue中

import router from './router.js';//导入路由文件,里面有个export default;

//导入Mint-ui组件相关
import "mint-ui/lib/style.min.css";
import { Header, Swipe, SwipeItem } from 'mint-ui';
//页面顶部固定区域
Vue.component(Header.name, Header);
//轮播图
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入MUI相关
import "./lib/mui/css/mui.css";
import "./lib/mui/css/icons-extra.css";



import App from './App.vue';


var vm = new Vue({
    el:'#app',
    //component:{ App },
    render: c => c(App),//会把App中内容覆盖到index.html中的#app标签,所以router-link与router-view要写在App.vue文件中. 
    router  //将路由对象挂载到 vm 实例上
});


