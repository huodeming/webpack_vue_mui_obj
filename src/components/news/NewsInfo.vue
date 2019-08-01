<template>
<div class="container">
    <h3 class="title">{{ newinfo.title }}</h3>
    <p class="subtitle">
        <span>发表时间: {{ newinfo.add_time }}</span>
        <span>点击: {{ newinfo.count }} 次</span>
    </p>
    <hr>
    <div v-html="newinfo.content" class="content">
    </div>
    <comment-box :cid="id" :mid="'1'"></comment-box>
</div>
    
</template>

<script>
import Comment from '../public/subcompoments/comment.vue';//评论组件
export default {
    data(){
        return {
            id: this.$route.params.id,
            newinfo:{},
        }
    },
    methods: {
        getNewsInfo : function(){
            this.$http.jsonp("http://localhost/webpack_vue_mui_obj_php/newsinfo.php?id=" + this.id).then((result) => {
                if(result.body.status == 0){
                    this.newinfo = result.body.newinfo;
                }
            });
        }
    },
    created(){
        this.getNewsInfo();
    },
    components: {
        'comment-box': Comment,
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
    .content >>> p{
        text-indent: 2em;
        line-height: 2em
    }

</style>

