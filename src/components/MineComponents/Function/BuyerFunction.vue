<!--买家功能实现栏-->
<template>
    <div>
        <van-sticky>
            <van-nav-bar title="买家" left-arrow  @click-left="onClickLeft"/>
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
                <van-tab v-for="(buyer,index) in buyerfunction" :key="index" :title=buyer.name>
                    <div v-if="activeNumber == 0">
                        <son :type=type[0].name />
                    </div>
                    <div v-if="activeNumber == 1">
                        待收货
                    </div>
                    <div v-if="activeNumber == 2">
                        已买到
                    </div>
                    <div v-if="activeNumber == 3">
                        购买记录
                    </div>
                    <div v-if="activeNumber == 4">
                        <son :type=type[4].name />
                    </div>
                    <div v-if="activeNumber == 5">
                        我的收藏
                    </div>
                    <div v-if="activeNumber == 6">
                        我的收货地址
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
                    {name:"购买记录"},
                    {name:"我的订单"},
                    {name:"我的收藏"},
                    {name:"我的收货地址"},
                ],
                type:[
                    {name:"tobepaid"}, //待支付
                    {name:"tobereceived"}, //待收货
                    {name:"hadbuy"}, //已买到
                    {name:"buyrecord"}, //购买记录
                    {name:"myorder"}, //我的订单
                    {name:"mystart"}, //我的收藏
                    {name:"myaddress"}, //收货地址
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