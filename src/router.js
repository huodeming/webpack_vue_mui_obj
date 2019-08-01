//1.导入路由组件
import VueRouter from 'vue-router';


import Home from "./components/tabbar/Home.vue";
import Member from "./components/tabbar/Member.vue";
import Shopcar from "./components/tabbar/Shopcar.vue";
import Search from "./components/tabbar/Search.vue";
import NewList from './components/news/NewsList.vue';
import NewInfo from './components/news/NewsInfo.vue';

//2.创建路由对象
var router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: Home},
        {path: '/member', component: Member},
        {path: '/shopcar', component: Shopcar},
        {path: '/search', component: Search},
        {path: '/home/newlist', component: NewList},
        {path: '/home/newinfo/:id', component: NewInfo},
    ],
    linkActiveClass: "mui-active",//如不设置它,默认值是:link-router-active
});

//3.对外暴露出路由对象,以方便import得到对象.
export default router;
