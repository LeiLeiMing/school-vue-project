<!--买家功能实现栏-->
<template>
    <div>
        <van-sticky>
            <van-nav-bar title="买家" left-arrow  @click-left="onClickLeft"/>
        </van-sticky>
        <div>
            <van-tabs v-model="activeNumber"
                      swipeable
                      sticky
                      :border="false"
                      :offset-top="45"
                      ref="tabs"
                      type="line"
                      color="red"
                      title-active-color="red"
                     >
                <van-tab v-for="(buyer,index) in buyerfunction" :key="index" :title=buyer.name>
                    <div v-show="activeNumber == 0">
                        <son :type=type[0].name />
                    </div>
                    <div v-show="activeNumber == 1">
                        <son :type=type[1].name />
                    </div>
                    <div v-show="activeNumber == 2">
                        <son :type=type[2].name />
                    </div>
                    <div v-show="activeNumber == 3">
                        <son :type=type[3].name />
                    </div>
                    <div v-show="activeNumber == 4">
                        我的收藏
                    </div>

                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
    import son from "./BuyFunctionTabComponents.vue"
    import myallorder from "../MyAllOrder.vue"
    export default {
        data(){
            return{
                activeNumber:0,
                buyerfunction:[
                    {name:"待支付"},
                    {name:"待收货"},
                    {name:"已买到"},
                    {name:"我的订单"},
                    {name:"我的收藏"},
                ],
                type:[
                    {name:"tobepaid"}, //待支付
                    {name:"tobereceived"}, //待收货
                    {name:"hadbuy"}, //已买到
                    {name:"myorder"}, //我的订单
                    {name:"mystart"}, //我的收藏
                ]
            }
        },
        components:{
            myallorder,
            son
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
        }
    }
</script>

<style scoped>

</style>