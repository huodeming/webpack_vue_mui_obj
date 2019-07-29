<template>
    <div>
        <!-- 轮插图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
        <h1>主页</h1>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    /* 设置高度,在页面上才显示,不然高度是0 */
    .mint-swipe{
        height: 200px;
    }
    /* 为了突出显示,为每个轮播加上背景颜色 */
    .mint-swipe-item:nth-child(1) {
        background-color:coral;
    }
    .mint-swipe-item:nth-child(2) {
        background-color:blueviolet;
    }
    .mint-swipe-item:nth-child(3) {
        background-color:cyan;
    }
</style>


