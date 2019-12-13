<template>
    <!--轮播图-->
    <div>
        <van-swipe :autoplay="3000" indicator-color="blue" :height="220" >
            <van-swipe-item v-for="(image,index) in imges" :key="index">
                <img class="back" v-lazy="image.url" >
            </van-swipe-item>
        </van-swipe>
    </div>

</template>
<script>
    export default {
        data(){
            return{
                /*轮播图*/
                imges:[
                    {url:"https://img.yzcdn.cn/vant/apple-2.jpg"},
                    {url:"https://img.yzcdn.cn/vant/apple-1.jpg"},
                    {url:"https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619__340.jpg"},
                ],
            }
        }
    }
</script>
<style scoped>
    .back {
        height: 220px;
        width: 100%;
    }
</style>