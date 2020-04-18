<!--界面组件-->
<template>
    <div>
        <!--加载栏-->
        <van-overlay :show="show" >
            <div class="wrapper" style="margin-top: 50%" @click.stop>
                <div class="block" >
                    <div style="margin-top: 20px;margin-left: 40px">
                        <div style="margin-left: 8px">
                            <van-loading type="spinner" color="#1989fa" />
                        </div>
                        <br>
                        加载中
                    </div>
                </div>
            </div>
        </van-overlay>

        <div>
            <div v-for="(g,key) in order"  :key="key" >
                <div v-for="(order,index) in g" :key="index">
                    <router-link  :to="'/list/all/'+order.goodsPojo.sellgoodsid">
                        <van-card :price=order.goodsPojo.goodsprice :desc=order.goodsPojo.goodsdesc  :title=order.goodsPojo.goodsname  :num=order.goodsmount :thumb=order.goodsPojo.imageaddress.imageaddress  :to="'/list/all/'+g.sellgoodsid"/>
                    </router-link>
                </div>
                <van-cell >
                    <div v-show="type=='tobepaid'" style="float: right">
                        <van-button type="default" round @click="deletedorder(g[0].orderid)" >删除订单</van-button>
                        <van-button type="danger" round >立即支付</van-button>
                    </div>
                </van-cell>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        props:['type'],
        name: "BuyFunctionTabComponents",
        data(){
            return{
                show:true,
                order:[],

            }
        },
        methods:{
            //删除待支付订单
            deletedorder:function (orderid) {
                this.$axios.get('http://localhost:1000/transaction-service/cart/deltopaidorder?token='+this.$cookies.get("AUTH_TOKEN")+'&orderid='+orderid).then((response) => {
                    this.$toast({
                        message:"删除成功"
                    });
                    this.$router.push({path:'/mine'})
                }).catch((error) => {
                    this.show = false;
                    if (error.response.status == 403){
                        this.$toast({
                            message:"登录信息失效，请重新登录~"
                        })
                        this.$router.push({path:'/mine'})
                    }
                    this.$toast({
                        message:"服务异常，请稍后重试"
                    })
                });
            },
        },
        //获取
        mounted() {
            if (this.$cookies.get("AUTH_TOKEN")==null){
                this.$toast({
                    message:"登录信息失效，请重新登录~"
                })
                this.$router.push({path:'/mine'})
                return;
            }
            console.log(this.type)
            switch (this.type) {
                //待支付
                case "tobepaid":
                    //待支付数据
                    this.$axios.get('http://localhost:1000/transaction-service/cart/gettobepaidorder?token='+this.$cookies.get("AUTH_TOKEN")).then((response) => {
                        this.order = response.data;
                        this.show = false;
                    }).catch((error) => {
                        this.show = false;
                        if (error.response.status == 403){
                            this.$toast({
                                message:"登录信息失效，请重新登录~"
                            })
                            this.$router.push({path:'/mine'})
                        }else{
                            this.$toast({
                                message:"服务器出小差了~"
                            })
                        }
                    });
                    break;
                //我的订单
                case "myorder":
                    this.$axios.get('http://localhost:1000/transaction-service/cart/getmyorder?token='+this.$cookies.get("AUTH_TOKEN")).then((response) => {
                        this.order = response.data;
                        this.show = false;
                    }).catch((error) => {
                        this.show = false;
                        if (error.response.status == 403){
                            this.$toast({
                                message:"登录信息失效，请重新登录~"
                            })
                            this.$router.push({path:'/mine'})
                        }else{
                            this.$toast({
                                message:"服务器出小差了~"
                            })
                        }
                    });
                    break;

            }
        }
    }
</script>

<style scoped>
    .wrapper {
        display: flex;
        justify-content: center;
        height: 100%;
    }

    .block {
        width: 120px;
        height: 120px;
        background-color: #fff;
    }
</style>