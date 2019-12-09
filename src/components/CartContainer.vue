<!--购物车页面-->
<template>
    <div>
        <van-nav-bar title="购物车"/>
        <div v-if="cartgoods.length==0">
            <van-image
                    width="100%"
                    height="300"
                    src="https://img.51miz.com/Element/00/84/49/15/669eb23d_E844915_786f43c5.png!/quality/90/unsharp/true/compress/true/format/png/fh/630"
            />
            <span style="margin-left: 100px">你的购物车空空如也~~</span>
            <span><van-button round size="large" type="danger">去逛逛~~</van-button></span>
            <span><hr><h6 style="text-align: center">猜你喜欢</h6><hr></span>
            <!--猜你喜欢-->
            <van-grid  :border="false" :column-num="2" :gutter="5">
                <van-grid-item v-for="(image,index) in showgoods" :key="index">
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
        <div v-if="cartgoods.length!=0">
            <van-sticky>
                <div style="height: 50px;background-color: white;">
                    <router-link to="/buy">
                        <van-button type="danger" round style="float: right">提交订单</van-button>
                    </router-link>
                    <span style="float:right;text-align: center;line-height: 50px;">
                        合计：<span style="color: red">￥1000</span>
                    </span>
                    <span style="float: left;margin-top: 15px;">
                        <van-checkbox  checked-color="#07c160">全选</van-checkbox>
                    </span>
                </div>
            </van-sticky>

            <van-card
                    num="2"
                    price="2.00"
                    desc="描述信息"
                    title="商品标题"
                    thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
            />
            <van-card
                    num="2"
                    price="2.00"
                    desc="描述信息"
                    title="商品标题"
                    thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
            />
        </div>
        <div>
            <span><h6 style="text-align: center">猜你喜欢</h6><hr></span>
                <!--猜你喜欢-->
            <van-grid  :border="false" :column-num="2" :gutter="5">
                <van-grid-item v-for="(image,index) in showgoods" :key="index">
                    <router-link :to="'/index/everyday/'+index">
                        <img width="130px" height="150px" :src=image.url />
                    </router-link>
                    <span style="font-size: 10px;margin-top: 10px">大头牌手机，用了头就大</span>
                    <span>￥2000</span>
                    <router-link :to="'/index/everyday/'+index">
                        <span style="margin-left: 100px"><van-icon name="cart-circle-o" color="red" size="30px" /></span>
                    </router-link>
                    <br><br>
                </van-grid-item>
            </van-grid>
        </div>
        <!--底部导航栏-->
        <apptab></apptab>
    </div>
</template>
<script>
    import apptab from '../components/TabComponents/AppTab.vue'
    export default {
        data(){
            return{
                /*购物车*/
                cartgoods:[
                     {name:'大坛子',price:1200,url:'https://img.51miz.com/Element/00/87/17/44/0dba2479_E871744_be288ee8.png!/quality/90/unsharp/true/compress/true/format/png/fh/630'}
                ],
                /*商品展示*/
                showgoods:[
                    {url:"https://img.yzcdn.cn/vant/apple-3.jpg"},
                    {url:"https://img.yzcdn.cn/vant/apple-3.jpg"},
                    {url:"https://img.yzcdn.cn/vant/apple-3.jpg"},
                    {url:"https://img.yzcdn.cn/vant/apple-3.jpg"},
                    {url:"https://img.yzcdn.cn/vant/apple-3.jpg"},
                    {url:"https://img.yzcdn.cn/vant/apple-3.jpg"},
                ]
            }
        },
        components:{
            apptab
        }
    }
</script>
<style>

</style>