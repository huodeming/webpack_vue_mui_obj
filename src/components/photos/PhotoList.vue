<template>
    <div>
        <!-- 顶部选项卡,可左右拖动 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a class="mui-control-item mui-active" href="#" @click="getimages(0)">全部</a>
                    <!-- 注意:只有MUI的组件才能用@tap事件.如果用@click在部分浏览器下点击不正常 -->
                    <a v-for="item in groups" :key="item.id" class="mui-control-item" href="#" @tap="getimages(item.gid)">{{item.gname}}</a>
                </div>
            </div>
        </div>
        <ul class="imglists">
            <router-link :to="'/home/photoinfo/' + item.cid" tag="li" v-for="item in imglist" :key="item.id">
                <img v-lazy="$http.options.root+item.img_url">
                <div class="info">
                    <h2 class="info-title">{{item.title}}</h2>
                    <div class="info-body">{{item.zhaiyao}}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            groups: [],
            imglist: [],
            //currGid: 0
        };
    },
    methods:{
        getGroups : function(){
            this.$http.get('img-group.php').then((result) => {
                //console.log(result);
                if(result.body.status == 0){
                    this.groups = result.body.list;
                }
            },(err) => {
                //获取失败时...
            });
        },
        getimages: function(gid){
            this.$http.get('img-list.php?gid=' + gid).then((result) => {
                //console.log(result);
                if(result.body.status == 0){
                    this.imglist = result.body.list;
                }
            },(err) => {
                //获取失败时...
            });
        }
    },
    created(){
        this.getGroups();
        this.getimages(0);
    },
    mounted() {
        this.$mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
}
</script>

<style lang="scss" scoped>
    /* #slider{
        position: fixed;
        top: 40px;
    } */
    image[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
    .imglists{
        margin: 0;
        list-style: none;
        padding: 10px 10px 0 10px;
    }
    .imglists>li{
        background-color: #ccc;
        text-align: center;
        margin-bottom: 10px;
        position: relative;
        img{
            max-width: 100%;
            vertical-align: middle;
            box-shadow: 0 0 6px #999;
        }
        .info{
            color: white;
            text-align: left;
            position: absolute;
            bottom: 0px;
            background-color: rgba($color: #000, $alpha: 0.3);
            width: 100%;
            .info-title{
                font-size: 14px;
            }
            .info-body{
                font-size: 13px;
            }
        }
    }
    

</style>
