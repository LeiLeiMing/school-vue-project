<!--首页-->
<template>
    <div>
        <!--顶部-->
        <toptab></toptab>
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
                      :offset-top="47"
                      ref="tabs"
                      type="line"
                      color="red"
                      title-active-color="red"
                      animated:yes>
                <van-tab title="同城" ><indexrecommendnew></indexrecommendnew></van-tab>
                <van-tab title="新品" ><indexrecommendsellmore></indexrecommendsellmore></van-tab>
                <van-tab title="人气" ><indexrecommendnew></indexrecommendnew></van-tab>
                <van-tab title="精选" ><indexrecommendnew></indexrecommendnew></van-tab>
            </van-tabs>
        </div>
        <!--底部文字-->
        <div>
            <van-divider>到底啦~~</van-divider>
        </div><br><br>
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
            indexrecommendnew,
            indexrecommendsellmore,
            lunbo,
            sort
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
</style>