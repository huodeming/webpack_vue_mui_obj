<template>
    <div>
        <div class="container">
            <h3 class="title">{{ imginfo.title }}</h3>
            <p class="subtitle">
                <span>发表时间: {{ imginfo.c_time }}</span>
                <span>点击: {{imginfo.count}} 次</span>
            </p>
            <hr>
            <!-- 缩略图区域 -->
            <div class="imgs-thumb">
                <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
            </div>
            <!-- 图片内容区域 -->
            <div class="content" v-html="imginfo.remarks"></div>

            <!-- 评论组件 -->
            <comment-box :cid="cid" :mid="'2'"></comment-box>
        </div>
    </div>
</template>

<script>
import Comment from '../public/subcompoments/comment.vue';//评论组件
import { log } from 'util';
export default {
    data(){
        return {
            cid: this.$route.params.cid,
            imginfo:{},
            slide1: []
        }
    },
    methods:{
        getImgInfo: function(){
            this.$http.get('img-info.php?cid=' + this.cid).then((result) => {
                //console.log(result);
                if(result.body.status == 0){
                    this.imginfo = result.body.imginfo;
                    this.slide1 = result.body.imglist;
                }else{

                }
            },(err) => {
                
            });
        },
        handleClose () {
            console.log('close event')
        }
    },
    components: {
        'comment-box': Comment,
    },
    created(){
        this.getImgInfo();
    }
}
</script>

<style scoped>
    .container{
        padding: 10px;
    }
    .title{
        text-align: center;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .subtitle{
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
    .imgs-thumb >>> img{
        width: 30%;
        height: auto;
        float: left;
        margin: 5px 5px 5px 0; 
    }
    .content{
        clear: both;
        color: #444;
    }

</style>

