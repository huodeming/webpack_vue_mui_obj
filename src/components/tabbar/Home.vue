<template>
    <div>
        <!-- mint-ui轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item, i) in lunbotu" :key="i" ><img :src="'http://localhost/webpack_vue_mui_obj_php/'+item" /></mt-swipe-item>
        </mt-swipe>
        <!-- 中间九宫格 -->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">Home</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                        <div class="mui-media-body">Email</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">Chat</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">location</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">Search</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">Phone</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-gear"></span>
                        <div class="mui-media-body">Setting</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-info"></span>
                        <div class="mui-media-body">about</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-more"></span>
                        <div class="mui-media-body">more</div></a></li>
            </ul> 
		</div>


        <h1>主页</h1>
    </div>
</template>

<script>
		// mui.init({
		// });
		// var slider = mui("#slider");
        // slider.slider({
        //     interval: 3000
        // });
export default {
    data(){
        return{
            lunbotu: null,
        }
    },
    methods:{
        //获取轮播图数据的方法
        getLunbotu(){
            this.$http.jsonp('http://localhost/webpack_vue_mui_obj_php/lunbotu.php').then(result => {
                //console.log(result);
                if(result.body.status === 0 && result.body.length > 0){
                    this.lunbotu = result.body.list;
                }else{
                    Toast({
                        message: '轮播图加载失败!',
                    });
                }
            });
        },
    },
    created(){
        this.getLunbotu();
    },

}
</script>

<style scoped>
    /* 设置高度,在页面上才显示,不然高度是0 */
    .mint-swipe{
        height: 200px;
    }
    /* 为了突出显示,为每个轮播加上背景颜色 */
    /* .mint-swipe-item:nth-child(1) {
        background-color:coral;
    }
    .mint-swipe-item:nth-child(2) {
        background-color:blueviolet;
    }
    .mint-swipe-item:nth-child(3) {
        background-color:cyan;
    } */
    .mint-swipe-item{
        text-align: center;
    }
    img{
        width: 100%;
        height: 100%;
    }
</style>


