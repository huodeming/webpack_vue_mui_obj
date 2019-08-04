
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);//把路由注册到Vue中
import VueResource from 'vue-resource';
Vue.use(VueResource);//把远程请求注册到Vue中

Vue.http.options.xhr = {withCredentials: true};//作用就是允许跨域请求携带cookie做身份认证的；
//Vue-resource拦截器: 跨域携带cookie 或者在每个请求中 this.$http.get('URL',{params: 参数对象,credentials: true})
Vue.http.interceptors.push(function(request, next) {
    // 跨域携带cookie
    request.credentials = true;
    next();
})
Vue.http.options.emulateJSON = true;//如果web服务器无法处理 application/json的请求，我们可以启用 emulateJSON 选项；POST请求数据用JSON格式必须这么设置
Vue.http.options.root = 'http://192.168.203.104/webpack_vue_mui_obj_php/';
console.log(Vue.http.options.root);

import router from './router.js';//导入路由文件,里面有个export default;

//导入Mint-ui组件相关
import MintUI from 'mint-ui'
Vue.use(MintUI);
import "mint-ui/lib/style.min.css";
/* import { Header, Swipe, SwipeItem, Lazyload} from 'mint-ui';
//页面顶部固定区域
Vue.component(Header.name, Header);
//轮播图
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//Vue.component(Lazyload.name, Lazyload);//不能这么用,懒加载是Vue子插件.
Vue.use(Lazyload);//如果按需加载,这个懒加载有点问题.不显示加载的loding图片.所以按需加载又是扯蛋. */




//导入MUI相关
import mui from "./lib/mui/js/mui.js";//这么用一直报错,可能是mui.js中没有export default进行向外暴露对象.最后把babel-loader的配置(.babelrc)文件中加入了忽略严格模式转换节点:"ignore": ["./src/lib/mui/js/*.js",] 好了,可以用了.
//Vue.use(mui);//这么用报错,用不了
Vue.prototype.$mui = mui;//这么用不报错.就这么干了.....全局引入 那么后续的vm实例都有一个 this.$mui的对象了. 没用.最后与路由冲突....
import "./lib/mui/css/mui.css";
import "./lib/mui/css/icons-extra.css";

//导入三方Vue-preview缩略图包
import VuePreview from 'vue-preview';
//Vue.use(VuePreview);
Vue.use(VuePreview, {
    mainClass: 'pswp--minimal--dark',
    barsSize: {top: 0, bottom: 0},
    captionEl: false,
    fullscreenEl: false,
    shareEl: false,
    bgOpacity: 0.85,
    tapToClose: true,
    tapToToggleControls: false
  })



import moment from 'moment';
//定义一个全局过滤器,用来格式化日期或时间
Vue.filter('dateFormat', function(dateStr, pattern="YYYY-MM-DD HH:mm"){
    return moment(dateStr).format(pattern);
});

import App from './App.vue';


var vm = new Vue({
    el:'#app',
    //component:{ App },//runtime的Vue不能这么用
    render: c => c(App),//会把App中内容覆盖到index.html中的#app标签,所以router-link与router-view要写在App.vue文件中. 
    router  //将路由对象挂载到 vm 实例上
});


