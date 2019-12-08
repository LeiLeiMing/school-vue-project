<template>
    <div>
        <toptab></toptab>
        <!--轮播图-->
        <van-swipe :autoplay="3000" indicator-color="blue" :height="220" >
            <van-swipe-item v-for="(image,index) in imges" :key="index">
                <img class="back" v-lazy="image.url" >
            </van-swipe-item>
        </van-swipe>
        <!--图片资源：http://518taole.7-orange.cn/homead2.gif-->
        <!--菜头：http://518taole.7-orange.cn/homead2.gif-->
        <!--鱼头：https://img.ddimg.mobi/3f96191b097cd1562204510108.jpg-->
        <!--早餐：https://img.ddimg.mobi/baf53e7d1e9ce1561980371874.jpg-->
        <!--好看用的图片块-->
        <van-image
                width="100%"
                height="150"
                src="http://518taole.7-orange.cn/homead2.gif"
        />
        <!--分区商品展示块-->
        <van-grid  :border="false" :column-num="5">
            <van-grid-item v-for="(image,index) in sortimges" :key="index">
                    <van-image round width="40px" height="40px" :src="image.url" />
                <span style="font-size: 10px;margin-top: 10px">手机</span>
                </van-grid-item>
        </van-grid>
        <!--/分区-->
        <!--为了好看：组件中插入组件-->
        <!---->
        <!--每日精选-->

        <!--/每日精选-->
        <!--宫格展示商品-->
        <div>
            <h4>每日精选</h4>
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

       <br><br>
       <br><br>
       <br><br>
       <br><br>
    </div>
</template>
<script>
    /*引入组件中的组件*/
    import viewundersort from './components-son/ViewUnderSort.vue'
    import toptab from '../components/TabComponents/AppTop.vue'
    export default {
        data(){
            return{
                /*轮播图*/
               imges:[
                   {url:"https://img.yzcdn.cn/vant/apple-2.jpg"},
                   {url:"https://img.yzcdn.cn/vant/apple-1.jpg"}
               ],
                /*分类展示*/
                sortimges:[
                    {url:"https://img.yzcdn.cn/vant/cat.jpeg"},
                    {url:"http://518taole.7-orange.cn/homead2.gif"},
                    {url:"https://img.ddimg.mobi/3f96191b097cd1562204510108.jpg"},
                    {url:"https://img.ddimg.mobi/baf53e7d1e9ce1561980371874.jpg"},
                    {url:"https://img.yzcdn.cn/vant/cat.jpeg"},
                    {url:"https://img.yzcdn.cn/vant/cat.jpeg"},
                    {url:"http://518taole.7-orange.cn/homead2.gif"},
                    {url:"https://img.ddimg.mobi/3f96191b097cd1562204510108.jpg"},
                    {url:"https://img.ddimg.mobi/baf53e7d1e9ce1561980371874.jpg"},
                    {url:"https://img.yzcdn.cn/vant/cat.jpeg"}
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
            viewundersort,
            toptab
        }
    }
</script>
<style scoped>
    .back {
        height: 220px;
        width: 100%;
    }
</style>