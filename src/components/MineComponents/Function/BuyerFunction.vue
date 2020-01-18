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
                        待支付
                    </div>
                    <div v-if="activeNumber == 1">
                        待收货
                    </div>
                    <div v-if="activeNumber == 2">
                        已买到
                    </div>
                    <div v-if="activeNumber == 3">
                        待评价
                    </div>
                    <div v-if="activeNumber == 4">
                        我的订单
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
    export default {
        data(){
            return{
                activeNumber:0,
                buyerfunction:[
                    {name:"待支付"},
                    {name:"待收货"},
                    {name:"已买到"},
                    {name:"待评论"},
                    {name:"我的订单"},
                    {name:"我的收藏"},
                    {name:"我的收货地址"},
                ]
            }
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