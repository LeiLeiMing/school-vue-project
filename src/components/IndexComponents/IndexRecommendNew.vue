<template>
    <div>
        <van-grid  :border="false" :column-num="2" :gutter="5">
            <van-grid-item v-for="(image,index) in recommendgoods" :key="index">
                <router-link :to="'/index/everyday/'+index">
                    <img width="130px" height="150px" :src=image.url />
                </router-link>
                <span style="font-size: 10px;margin-top: 10px">大头牌手机，用了头就大</span>
                <span>￥2000</span>
                <div @click="select(image.id)">
                  <span style="margin-left: 100px" ><van-icon name="cart-circle-o" color="red" size="30px" /></span>
                </div>
            </van-grid-item>
        </van-grid>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                recommendgoods:[
                    {url:"https://img.yzcdn.cn/vant/apple-3.jpg",id:1},
                    {url:"https://img.yzcdn.cn/vant/apple-3.jpg",id:2},
                    {url:"https://img.yzcdn.cn/vant/apple-3.jpg",id:3},
                    {url:"https://img.yzcdn.cn/vant/apple-3.jpg",id:4},
                    {url:"https://img.yzcdn.cn/vant/apple-3.jpg",id:5},
                    {url:"https://img.yzcdn.cn/vant/apple-3.jpg",id:6},
                    {url:"https://img.yzcdn.cn/vant/apple-3.jpg",id:7},
                    {url:"https://img.yzcdn.cn/vant/apple-3.jpg",id:8},
                    {url:"https://img.yzcdn.cn/vant/apple-3.jpg",id:9},
                    {url:"https://img.yzcdn.cn/vant/apple-3.jpg",id:10},
                ],
            }
        },
        methods:{
            select(id){
                /*测试获取id，该id就是商品id，将被用于把加入购物车的商品和用户的购物车连接*/
                console.log(id)
                /*传给父组件*/
                this.$emit('addCart',1)
                this.$toast({
                    message:"加入购物车成功"
                })
            }
        }

    }
</script>
<style scoped>

</style>