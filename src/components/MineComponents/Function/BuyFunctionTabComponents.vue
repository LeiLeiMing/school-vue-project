<!--界面组件-->
<template>
    <div>
        <div v-for="(g,key) in tobepaidorder"  :key="key" >
            <div v-for="(order,index) in g" :key="index">
                <router-link  :to="'/list/all/'+order.goodsPojo.sellgoodsid">
                    <van-card :price=order.goodsPojo.goodsprice :desc=order.goodsPojo.goodsdesc tag="待支付"  :title=order.goodsPojo.goodsname  :num=order.goodsmount :thumb=order.goodsPojo.imageaddress.imageaddress  :to="'/list/all/'+g.sellgoodsid"/>
                </router-link>
            </div>
            <van-cell >
                <div style="float: right">
                    <van-button type="default" round >删除订单</van-button>
                    <van-button type="danger" round >立即支付</van-button>
                </div>
            </van-cell>
        </div>
    </div>
</template>

<script>
    export default {
        props:['type'],
        name: "BuyFunctionTabComponents",
        data(){
            return{
                tobepaidorder:[]
            }
        },
        //获取
        mounted() {
            console.log(this.type)
            if (this.type=="tobepaid"){
                //待支付数据
                this.$axios.get('http://localhost:1000/transaction-service/cart/gettobepaidorder?token='+this.$cookies.get("AUTH_TOKEN")).then((response) => {
                    this.tobepaidorder = response.data;
                    console.log(this.tobepaidorder)
                }).catch((error) => {

                });
            }
        }
    }
</script>

<style scoped>

</style>