<!--首页-->
<template>
    <div>
        <!--顶部-->
        <toptab @searchGoods="getData"></toptab>
        <van-image
                src="https://leiming-zhiqiu.oss-cn-beijing.aliyuncs.com/%E5%96%B5%E5%86%85%E7%9A%84%E5%BA%93/%E9%A6%96%E9%A1%B52.png"
        />
        <!--轮播图-->
        <lunbo/>
        <!--分区商品展示块-->
        <sort/>
        <!--/分区-->
        <!--宫格展示商品-->
        <div>
            <div>
                <h4 class="title">每日推荐</h4>
            </div>
            <!--吸顶的方式参考了ddbuy的样式-->
            <van-tabs v-model="active"
                      animated
                      swipeable
                      sticky
                      :border="false"
                      :offset-top="52"
                      ref="tabs"
                      type="line"
                      color="red"
                      title-active-color="red"
                      animated:yes>
                <van-tab title="推荐" ><indexrecommendgoods/></van-tab>
                <van-tab title="新品" ><indexrecommendsellnew/></van-tab>
                <van-tab title="人气" ><indexrecommendsellhot /></van-tab>
                <van-tab title="精选" ><indexrecommendnew /></van-tab>
            </van-tabs>
        </div>
        <!--校园动态-->
        <div id="schoolday">
            <h4 class="title">校园动态</h4>

        </div>
        <div>
            <a>
                <van-divider>查看更多动态+</van-divider>
            </a>
        </div><br><br>
        <!--底部tab栏-->
        <!--把amount传给子组件展示-->
        <apptab ></apptab>
    </div>
</template>
<script>
    /*引入组件中的组件*/
    import toptab from '../components/TabComponents/AppTop.vue'
    import apptab from '../components/TabComponents/AppTab.vue'
    import indexrecommendsellhot from './IndexComponents/IndexRecommendSellHot.vue'
    import indexrecommendsellnew from './IndexComponents/IndexRecommendSellNew.vue'
    import indexrecommendgoods from './IndexComponents/IndexRecommendGoods.vue'
    import lunbo from './IndexComponents/LunboView.vue'
    import sort from './IndexComponents/Sort.vue'
    export default {
        data(){
            return{
                active: 0,
            }
        },
        components:{
            toptab,
            apptab,
            indexrecommendsellhot,
            indexrecommendsellnew,
            indexrecommendgoods,
            lunbo,
            sort
        },
        methods:{

            getData:function (data) {
                //console.log(data)
            }
        },
        /*页面加载完毕时从数据库获取最新的amount*/
        mounted() {

        }
    }
</script>
<style scoped>
    .title {
        display: inline-block;
        border-left: 4px #3cb963 solid;
        padding-left: 0.3125rem;
        height: 1.3125rem;
        line-height: 1.3125rem;
        vertical-align: middle;
        font-size: 1.1875rem;
    }
    #schoolday{
        height: 400px;
    }
</style>