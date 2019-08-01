<template>
    <div>
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要评论的内容(最多吐槽120字)" maxlength="120"></textarea>
        <button type="button" class="mui-btn mui-btn-primary mui-btn-block">提交评论</button>
        <div class="cmt-list">
            <div v-for="item in comms" :key="item.id" class="cmt-item">
                <div class="cmt-title">
                    <span class="mui-icon mui-icon-contact"> 匿名用户</span>
                    <span class="mui-icon-extra mui-icon-extra-outline"> {{item.c_time}}</span>
                </div>
                <div class="cmt-body">
                    {{ item.content }}
                </div>
                <hr>
            </div>
        </div>
        <button v-if="showmove" type="button" :disabled="movedisabled" class="mui-btn mui-btn-danger mui-btn-block mui-btn-outlined" @click="getComm()" v-html="movehtml"></button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            showmove: false,
            movehtml: '加载更多...',
            movedisabled: false,
            page: 1,
            comms:[]
        }
    },
    methods:{
        getComm: function(){
            this.movehtml = '加载更多...<span class="mui-spinner"></span>';
            this.movedisabled = true;
            this.$http.jsonp('news-comment.php?mid='+ this.mid +'&cid='+ this.cid +'&p='+this.page).then((result) => {
                this.movehtml = '加载更多...';
                this.movedisabled = false;
                //console.log(result);
                if(result.body.status == 0){
                    //this.comms = result.body.comments;
                   this.comms = this.comms.concat(result.body.comments);
                   if (result.body.comments.length == 10) this.showmove = true; else this.showmove = false;
                   this.page++;
                }else{
                    this.showmove = false;
                }
            }).catch(err => {
                this.movehtml = '加载更多...';
                this.movedisabled = false;
            })
        }
    },
    props:['cid','mid'],
    created(){
        this.getComm();
    }   
}
</script>

<style lang="scss" scoped>
    .cmt-title{
        display: flex;
        justify-content: space-between;
        background-color: #ccc;
        padding: 5px 3px;
        margin-bottom: 5px;
        span{
            font-size: 13px;
            color: #226aff;
        }
    }
    .cmt-body{
        color: 666;
        font-size: 13px;
    }
</style>
