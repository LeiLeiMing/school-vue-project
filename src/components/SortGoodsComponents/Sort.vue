<!--商品分类-->
<template>
    <div>
        <van-sticky>
            <van-nav-bar title="商品分类" left-arrow  @click-left="onClickLeft"/>
        </van-sticky>
        <div>
            <van-tabs v-model="activeNumber"
                      animated
                      swipeable
                      sticky
                      :border="false"
                      :offset-top="45"
                      ref="tabs"
                      type="line"
                      color="red"
                      title-active-color="red"
                      animated:yes>
                <van-tab v-for="(sort,index) in sortimges" :key="index" :title=sort.name>
                    <div v-if="activeNumber == 0">
                        <son :type=sortimges[0].name />
                    </div>
                    <div v-if="activeNumber == 1">
                        <son :type=sortimges[1].name />
                    </div>
                    <div v-if="activeNumber == 2">
                        <son :type=sortimges[2].name />
                    </div>
                    <div v-if="activeNumber == 3">
                        <son :type=sortimges[3].name />
                    </div>
                    <div v-if="activeNumber == 4">
                        <son :type=sortimges[4].name />
                    </div>
                    <div v-if="activeNumber == 5">
                        <son :type=sortimges[5].name />
                    </div>
                    <div v-if="activeNumber == 6">
                        <son :type=sortimges[6].name />
                    </div>
                    <div v-if="activeNumber == 7">
                        <son :type=sortimges[7].name />
                    </div>
                    <div v-if="activeNumber == 8">
                        <son :type=sortimges[8].name />
                    </div>
                    <div v-if="activeNumber == 9">
                        <son :type=sortimges[9].name />
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>
<script>
    /*引入分类的组件*/
    import son from './SortSonComponents.vue'
    export default {
        data(){
            return{
                activeNumber:0,
                /*分类展示*/
                sortimges:[
                    {name:"学习用品"},
                    {name:"体育用品"},
                    {name:"生活用品"},
                    {name:"电脑"},
                    {name:"手机"},
                    {name:"衣服"},
                    {name:"鞋子"},
                    {name:"家具电器"},
                    {name:"单车电车"},
                    {name:"手办"}
                ],
            }
        },
        components:{
            son,
        },
        methods:{
            onClickLeft:function () {
                /*返回上一页*/
                this.$router.go(-1)
            },
        },
        /*获取路由传过来的参数*/
        mounted() {
            this.activeNumber =parseInt(this.$route.params.id);
            console.log(this.activeNumber)
        }
    }
</script>
<style scoped>

</style>