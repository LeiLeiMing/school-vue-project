<!--首页-->
<template>
    <div>
        <!--顶部-->
        <toptab></toptab>
        <!--轮播图-->
        <van-swipe :autoplay="3000" indicator-color="blue" :height="220" >
            <van-swipe-item v-for="(image,index) in imges" :key="index">
                <img class="back" v-lazy="image.url" >
            </van-swipe-item>
        </van-swipe>
        <!--好看用的图片块-->
        <van-image
                width="100%"
                height="150"
                src="http://518taole.7-orange.cn/homead2.gif"
        />
        <!--分区商品展示块-->
        <van-grid  :border="false" :column-num="5">
            <van-grid-item v-for="(sortlist,index) in sortimges" :key="index">
                    <van-image round width="40px" height="40px" :src="sortlist.url" />
                <span style="font-size: 10px;margin-top: 10px">{{sortlist.name}}</span>
                </van-grid-item>
        </van-grid>
        <!--/分区-->
        <!--为了好看：组件中插入组件-->
        <!---->
        <!--宫格展示商品-->
        <div>
            <h4>每日推荐</h4>
            <van-tabs v-model="activeName">
                <van-tab title="新上架"  name="a"><indexrecommendnew></indexrecommendnew></van-tab>
                <van-tab title="销量多"  name="b"><indexrecommendsellmore></indexrecommendsellmore></van-tab>
                <van-tab title="评论多"  name="c"><indexrecommendnew></indexrecommendnew></van-tab>
                <van-tab title="收藏多"  name="d"><indexrecommendnew></indexrecommendnew></van-tab>
            </van-tabs>
        </div>
        <!--底部tab栏-->
        <apptab></apptab>
    </div>
</template>
<script>
    /*引入组件中的组件*/
    import toptab from '../components/TabComponents/AppTop.vue'
    import apptab from '../components/TabComponents/AppTab.vue'
    import indexrecommendnew from './IndexComponents/IndexRecommendNew.vue'
    import indexrecommendsellmore from './IndexComponents/IndexRecommendSellMore.vue'
    export default {
        data(){
            return{
                activeName:'a',
                /*轮播图*/
               imges:[
                   {url:"https://img.yzcdn.cn/vant/apple-2.jpg"},
                   {url:"https://img.yzcdn.cn/vant/apple-1.jpg"}
               ],
                /*分类展示*/
                sortimges:[
                    {name:"学习用品",url:"https://img.yzcdn.cn/vant/cat.jpeg"},
                    {name:"体育用品",url:"http://518taole.7-orange.cn/homead2.gif"},
                    {name:"生活用品",url:"https://img.ddimg.mobi/3f96191b097cd1562204510108.jpg"},
                    {name:"电脑",url:"https://img.ddimg.mobi/baf53e7d1e9ce1561980371874.jpg"},
                    {name:"手机",url:"https://img.yzcdn.cn/vant/cat.jpeg"},
                    {name:"衣服",url:"https://img.yzcdn.cn/vant/cat.jpeg"},
                    {name:"鞋子",url:"http://518taole.7-orange.cn/homead2.gif"},
                    {name:"家具电器",url:"https://img.ddimg.mobi/3f96191b097cd1562204510108.jpg"},
                    {name:"单车电车",url:"https://img.ddimg.mobi/baf53e7d1e9ce1561980371874.jpg"},
                    {name:"手办",url:"https://img.yzcdn.cn/vant/cat.jpeg"}
                ],

            }
        },
        components:{
            toptab,
            apptab,
            indexrecommendnew,
            indexrecommendsellmore
        }
    }
</script>
<style scoped>
    .back {
        height: 220px;
        width: 100%;
    }
</style>