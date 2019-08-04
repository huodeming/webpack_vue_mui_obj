<template>
    <div>
        <ul class="mui-table-view">
            <li v-for="item in news" :key="item.id" class="mui-table-view-cell mui-media">
                <router-link :to="'/home/newinfo/' + item.id">
                    <img class="mui-media-object mui-pull-left" :src="$http.options.root + item.img_url">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间: {{item.add_time | dateFormat}}</span>
                            <span>点击: {{item.count}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
    
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            news:{},
        };
    },
    methods:{
        getnews: function(){
            this.$http.jsonp('newslist.php').then((result) => {
                if(result.body.status == 0){
                    //console.log(result.body.news);
                    this.news = result.body.news;
                }else{
                    Toast({
                        message: '轮播图加载失败!',
                    });
                }
            }).catch((err) => {
                
            });;
        }
    },
    created(){
        this.getnews();
    }
    
}
</script>

<style scoped>
.mui-media-body>h1{
    font-size: 14px
}
.mui-media-body>.mui-ellipsis{
    font-size: 12px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
}
</style>

