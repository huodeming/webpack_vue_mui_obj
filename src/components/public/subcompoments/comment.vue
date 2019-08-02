<template>
    <div>
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要评论的内容(最多吐槽120字)" maxlength="120" v-model="msg"></textarea>
        <button type="button" class="mui-btn mui-btn-primary mui-btn-block" @click="postComm">提交评论</button>
        <div class="cmt-list">
            <div v-for="item in comms" :key="item.id" class="cmt-item">
                <div class="cmt-title">
                    <span class="mui-icon mui-icon-contact"> 匿名用户</span>
                    <span class="mui-icon-extra mui-icon-extra-outline"> {{item.c_time | dateFormat}}</span>
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
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            msg: '',
            showmove: false,
            movehtml: '加载更多...',
            movedisabled: false,
            page: 1,
            comms: [],
            maxid: -1
        }
    },
    methods:{
        //提交评论应该做个AJAX等待效果.在加载更多按扭中我做了........在这暂时不做,后续再来补充.
        postComm:function(){
            if(this.msg.trim().length == 0){
                return Toast("评论内容不能为空!")
            }
            this.$http.post('news-comment-add.php',{'user':'匿名用户','content':this.msg,'cid':this.cid,'mid':this.mid},{emulateJSON:true}).then((result) => {
                //console.log(result);
                if(result.body.status == 0){
                    //解决一个v-for中的id不重复.我试着用负数来解决.
                    this.comms.unshift({id:this.maxid--,c_time:new Date,content:this.msg});
                }

            },(err) => {
                Toast({
                    message: '发表评轮失败!',
                });
            });
            
        },
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
            },err => {
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
