<!--代发货-->
<template>
    <div>
        <div v-for="(goods,index) in ordervalue" :key="index">
            <van-swipe-cell>
                <van-card
                        :num=goods.goodsmount
                        :price=goods.goodsPojo.goodsprice
                        :desc=goods.goodsPojo.goodsdesc
                        :title=goods.goodsPojo.goodsname
                        thumb="http://leiming-secondhand.oss-cn-beijing.aliyuncs.com/wave-2089959__340.jpg?Expires=1584950573&OSSAccessKeyId=LTAI4aW45giA1D7p&Signature=flTeU0urj2V5z8iZ2cQcyU3G2Yg%3D"
                        tag="待发货"
                />
            </van-swipe-cell>
            <van-cell >
                <div style="float: left">
                    共{{goods.goodsmount}}件商品 合计:￥{{goods.goodsmount * goods.goodsPojo.goodsprice}}
                </div>
                <div style="float: right">
                    <van-button type="default" round >协商退单</van-button>
                    <van-button type="danger" round >安排发货</van-button>
                </div>
            </van-cell>
        </div>
    </div>
</template>

<script>
    import back from './back.png'
    export default {
        name: "Tobeshipped",
        data(){
            return{
                back:back,
                ordervalue:[]
            }
        },
        methods:{

        },
        //获取当前卖家的待发货商品
        mounted() {
            //判断用户是否登录
            this.$axios.get('http://localhost:1000//transaction-service/cart/getshippedorder?token=' + this.$cookies.get("AUTH_TOKEN")).then((response) => {
                //从服务器数据库获取
                this.ordervalue = response.data;
            }).catch((error) => {
                this.$toast({
                    message:"网络异常，请稍后再试"
                })
            });
        }
    }
</script>

<style scoped>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .block {
        width: 120px;
        height: 120px;
        background-color: #fff;
    }
</style>