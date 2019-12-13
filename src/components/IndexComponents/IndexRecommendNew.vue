<template>
    <div>
        <van-grid  :border="false" :column-num="2" :gutter="5">
            <van-grid-item v-for="(image,index) in recommendgoods" :key="index">
                <router-link :to="'/index/everyday/'+index">
                    <img width="130px" height="150px" :src=image.url />
                </router-link>
                <span style="font-size: 10px;margin-top: 10px">大头牌手机，用了头就大</span>
                <span>￥2000</span>
                <router-link :to="'/index/everyday/'+index">
                    <span style="margin-left: 100px"><van-icon name="cart-circle-o" color="red" size="30px" /></span>
                </router-link>
            </van-grid-item>
        </van-grid>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                recommendgoods:[
                    {url:"https://img.yzcdn.cn/vant/apple-3.jpg"},
                    {url:"https://img.yzcdn.cn/vant/apple-3.jpg"},
                    {url:"https://img.yzcdn.cn/vant/apple-3.jpg"},
                    {url:"https://img.yzcdn.cn/vant/apple-3.jpg"},
                    {url:"https://img.yzcdn.cn/vant/apple-3.jpg"},
                    {url:"https://img.yzcdn.cn/vant/apple-3.jpg"},
                    {url:"https://img.yzcdn.cn/vant/apple-3.jpg"},
                    {url:"https://img.yzcdn.cn/vant/apple-3.jpg"},
                    {url:"https://img.yzcdn.cn/vant/apple-3.jpg"},
                    {url:"https://img.yzcdn.cn/vant/apple-3.jpg"},
                ]
            }
        }
    }
</script>
<style scoped>

</style>