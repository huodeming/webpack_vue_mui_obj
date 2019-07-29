<template>
    <div>
        <!-- mint-ui轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item, i) in lunbotu" :key="i" ><img :src="'http://localhost/webpack_vue_mui_obj_php/'+item" /></mt-swipe-item>
        </mt-swipe>
        <hr />
        <!-- 
            1.Mui的轮播图,HTML方面要求有点乱.它要求第一张图片是最后一张,最后一要第一张图,且class值有点不同,相当于(比如3张图,要放5个div: 3 1 2 3 1) 
            2.在图片后还要放个DIV,里面是图片上那个小圆点.初始化时第一个要激活class="mui-indicator mui-active" ....所在格式要处理下.
            3.在Vue上面.如果想在main.js加载mui.js,要注意,这个整了一晚上
                3.1 import mui from "./lib/mui/js/mui.js";  前提是要设置.babelrc 文件 增加
                    "ignore": [
                        "./src/lib/mui/js/*.js",
                    ]
                3.2 不能用Vue.use(mui);要用Vue.prototype.$mui = mui;
        -->
		<div id="slider" class="mui-slider" >
			<div class="mui-slider-group mui-slider-loop">
				<!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
				<div class="mui-slider-item mui-slider-item-duplicate">
					<a href="#">
						<img src="http://localhost/webpack_vue_mui_obj_php/img/lunbotu/008.jpg">
                        <p class="mui-slider-title">静静看这世界</p>
					</a>
				</div>
				<!-- 第一张 -->
				<div v-for="(item, i) in lunbotu" :key="i" class="mui-slider-item">
					<a href="#">
						<img :src="'http://localhost/webpack_vue_mui_obj_php/' + item">
                        <p class="mui-slider-title">{{item}}</p>
					</a>
				</div>
				<!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
				<div class="mui-slider-item mui-slider-item-duplicate">
					<a href="#">
						<img src="http://localhost/webpack_vue_mui_obj_php/img/lunbotu/001.jpg">
                        <p class="mui-slider-title">静静看这世界</p>
					</a>
				</div>
			</div>
			<div class="mui-slider-indicator">
				<div v-for="(item,i) in lunbotu" :key="i" class="mui-indicator"></div>
<!-- 				<div class="mui-indicator"></div>
				<div class="mui-indicator"></div>
				<div class="mui-indicator"></div> -->
			</div>
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
    updated(){
        this.$mui.init({});
        var slider = this.$mui("#slider");
        slider.slider({
            interval: 3000
        });
    }

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


