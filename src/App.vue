<template>
    <div class="app-box">
        <!-- 顶部Header区域 -->
        <mt-header fixed title="欢迎来到鲲鹏IT"></mt-header>

        <!-- 中间VueRouter区域 -->
        <transition>
            <router-view></router-view>
        </transition>
        
        
        <!-- 底部Tabbar区域 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item1" to="/home" tag="span">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
            <router-link class="mui-tab-item1" to="/member" tag="span">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/shopcar" tag="span">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/search" tag="span">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>


<script>
//导入Toast组件,才可以使用.
import { Toast } from 'mint-ui';

export default {
    data(){
        return {}
    },
    methods:{

    }
}
</script>

<style scoped>
    .mui-bar-tab .mui-tab-item1 {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }
    .mui-bar-tab .mui-tab-item1.mui-active {
        color: #007aff;
    }
    .mui-bar-tab .mui-tab-item1 .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .mui-bar-tab .mui-tab-item1 .mui-icon ~ .mui-tab-label {
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }


    .app-box{
        padding-top: 40px;
        padding-bottom: 50px;
        overflow-x: hidden;
    }
    .v-enter{
        opacity: 0;
        transform: translateX(100%);
    }
    .v-leave-to{
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;/* 动画关键代码,一边消失一边就进来了 */
    }
    .v-enter-active,.v-leave-active{
        transition: all 0.5s ease;
    }
</style>


