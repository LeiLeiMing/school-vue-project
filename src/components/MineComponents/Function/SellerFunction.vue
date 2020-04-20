<template>
    <div>
        <van-sticky>
            <van-nav-bar title="卖家" left-arrow  @click-left="onClickLeft"/>
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
                      animated:yes>
                <van-tab v-for="(seller,index) in buyerfunction" :key="index" :title=seller.name>
                    <div v-show="activeNumber == 0">
                        <!--待发货-->
                        <son :typevalue=type[0].name />
                    </div>
                    <div v-show="activeNumber == 1">
                        <son :typevalue=type[1].name />
                    </div>
                    <div v-show="activeNumber == 2">
                        <son :typevalue=type[2].name />
                    </div>
                    <div v-show="activeNumber == 3">
                        <!--已上架-->
                        <son :typevalue=type[3].name />
                    </div>
                    <div v-show="activeNumber == 4">
                        <son :typevalue=type[4].name />
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
    import son from './SellerFunctionTabComponents.vue'
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
                ],
                type:[
                    {name:"tobeshiped"}, //待发货
                    {name:"hadshiped"}, //已发货
                    {name:"hadsell"}, //已售出
                    {name:"onsell"}, //上架中
                    {name:"takeprice"}, //议价
                ]
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
        }
    }
</script>

<style scoped>

</style>