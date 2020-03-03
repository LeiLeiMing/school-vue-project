<!--购物车页面-->
<template>
    <div>
        <van-nav-bar title="购物车" right-text="删除"/>
        <div v-if="this.cartgoods.length==0">
            <van-image
                    width="100%"
                    height="300"
                    src="https://img.51miz.com/Element/00/84/49/15/669eb23d_E844915_786f43c5.png!/quality/90/unsharp/true/compress/true/format/png/fh/630"
            />
            <span style="margin-left: 100px;color: gray">你的购物车空空如也~~</span>
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
        <div v-if="this.cartgoods.length!== 0">
            <van-sticky>
                <div style="height: 50px;background-color: white;">
                    <router-link to="/buy">
                        <van-button type="danger" round style="float: right">提交订单</van-button>
                    </router-link>
                    <span style="float:right;text-align: center;line-height: 50px;">
                        合计：<span style="color: red">￥{{allprice}}</span>
                    </span>
                    <span style="float: left;margin-top: 15px;">
                        <van-checkbox v-model="checked" checked-color="#07c160">全选</van-checkbox>
                    </span>
                </div>
            </van-sticky>
            <router-link v-for="(goods,index) in goodsvalue" :key="index" to="/">
                <van-card
                        :num=goods.mount
                        :price=goods.value.goodsprice
                        :desc=goods.value.goodsdesc
                        :title=goods.value.goodsname
                        :thumb=goods.value.allimageaddress[0].imageaddress
                />
            </router-link>
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
        <!--底部tab栏-->
        <!--把amount传给子组件展示-->
        <apptab ></apptab>
    </div>
</template>
<script>
    import apptab from '../components/TabComponents/AppTab.vue'
    export default {
        data(){
            return{
                amount: 0,
                checked: true,
                /*购物车*/
                cartgoods:[], //载体，接收localStorage的双层数组
                goodsvalue:[], //最终解析，解析成单层数组
                allprice:0, //全部购物车价格
                allmount:0, //购物车商品总数
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
        },
        mounted: function () {
            //判断用户是否登录
            this.$axios.get('http://localhost:1000/auth-service/auth/userinfo?token=' + this.$cookies.get("AUTH_TOKEN")).then((response) => {
                //已登录，从服务器数据库获取
            }).catch((error) => {
                //未登录，从浏览器数据库获取
                for (var i = 0; i < localStorage.length; i++) {
                    //玄学过滤~~~~
                    if (localStorage.getItem(localStorage.key(i))[0] === "["&&localStorage.getItem(localStorage.key(i))[4] === "a"&& localStorage.getItem(localStorage.key(i))[7] === "e") {
                        //取出来是String类型，转为JSON时是双层数组，需要解析层单层数组
                        this.cartgoods =JSON.parse(localStorage.getItem(localStorage.key(i)));
                        //解析层单层数组
                        for (var j =0;j<this.cartgoods.length;j++){
                            this.goodsvalue.push(this.cartgoods[j]);
                        }
                    }
                }
                for (var j =0;j<this.goodsvalue.length;j++){
                    this.allprice = this.allprice + (this.goodsvalue[j].value.goodsprice * this.goodsvalue[j].mount);
                }
            });
        }
    }
</script>
<style>

</style>