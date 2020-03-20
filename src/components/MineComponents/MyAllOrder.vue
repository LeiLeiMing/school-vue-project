<!--买家的全部订单-->
<template>
   <div>
       <van-cell title="发布者">
           <div style="float: right">
               待发货
           </div>
       </van-cell>
       <van-swipe-cell v-for="(goods,index) in ordervalue" :key="index">
           <van-card
                   :num=goods.ordermount
                   :price=goods.orderprice
                   :desc=goods.orderdesc
                   :title=goods.ordername
                   :thumb=goods.orderimage
           />
       </van-swipe-cell>
       <van-cell >
           <div style="float: right">
               共1件商品 合计:￥200
           </div><br>
           <div style="float: right">
               <van-button type="default" round >删除订单</van-button>
           </div>
       </van-cell>
   </div>
</template>

<script>
    export default {
        name: "MyAllOrder",
        data(){
            return{
                ordervalue:[
                    {
                        orderid:"1234567833344",
                        ordermount:"20",
                        orderprice:"20",
                        orderdesc:"111111111",
                        ordername:"大大大撒打算",
                        orderimage:"http://leiming-secondhand.oss-cn-beijing.aliyuncs.com/moon-1859616__340.jpg?Expires=1585301602&OSSAccessKeyId=LTAI4aW45giA1D7p&Signature=o2oGjdYxsy881DZXAgcY5dvTKGE%3D",
                    }
                ]
            }
        },
        methods:{

            getOrder:function () {
                this.$axios.get('http://localhost:1000/auth-service/auth/userinfo?token=' + this.$cookies.get("AUTH_TOKEN")).then((response) => {
                    //从服务器数据库获取
                }).catch((error) => {
                });
            }
        },
        //获取当前用户下的订单信息
        created() {
            //判断用户是否登录
            this.$axios.get('http://localhost:1000/auth-service/auth/userinfo?token=' + this.$cookies.get("AUTH_TOKEN")).then((response) => {
                //从服务器数据库获取

            }).catch((error) => {
                this.$toast({
                    message:"登录实失效，请重新登录"
                })
            });
        }
    }
</script>

<style scoped>

</style>