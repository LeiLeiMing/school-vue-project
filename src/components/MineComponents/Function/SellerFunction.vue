<template>
    <div>
        <van-sticky>
            <van-nav-bar title="卖家" left-arrow  @click-left="onClickLeft"/>
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
                <van-tab v-for="(seller,index) in buyerfunction" :key="index" :title=seller.name>
                    <div v-if="activeNumber == 0">
                        待发货
                    </div>
                    <div v-if="activeNumber == 1">
                        已发货
                    </div>
                    <div v-if="activeNumber == 2">
                        已售出
                    </div>
                    <div v-if="activeNumber == 3">
                        上架的商品
                    </div>
                    <div v-if="activeNumber == 4">
                        收到的议价
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
                    {name:"待发货"},
                    {name:"已发货"},
                    {name:"已售出"},
                    {name:"上架的商品"},
                    {name:"收到的议价"},
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