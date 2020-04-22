<!--下单页面-->
<template>
    <div v-show="this.allshow">
        <van-nav-bar title="确认订单" left-arrow  @click-left="onClickLeft"/>
        <!--提交订单顶部栏-->
        <van-sticky>
            <div style="height: 50px;background-color: white;">
                <router-link to="/buy">
                    <van-button @click="productorder" type="danger" round style="float: right">支付订单</van-button>
                </router-link>
                <span style="float:right;text-align: center;line-height: 50px;">
                        合计：<span style="color: red">￥{{allprice}}</span>
                </span>
            </div>
        </van-sticky>
        <router-link v-for="(goods,index) in goodsvalue" :key="index" :to="'/index/onegoods/'+goods.value.sellgoodsid">
            <van-card
                    :num=goods.mount
                    :price=goods.value.goodsprice
                    :desc=goods.value.goodsdesc
                    :title="goods.value.goodsname"
                    :thumb=goods.value.allimageaddress[0].imageaddress
            />
        </router-link>

        <van-cell-group>
            <van-field v-model="orderleavemessage" rows="1" autosize label="订单备注：" type="textarea" placeholder="请输入订单的备注"/>
        </van-cell-group>
        <!--修改收货地址-->
        <van-address-list v-model="chosenAddressId" :list="list" add-button-text="修改收货地址" @add="onChange"/>


    </div>
</template>
<script>
    export default {
        data(){
            return{
                allshow:false,
                goodsvalue:[],
                allprice:0,
                price:10,
                count:1,
                orderleavemessage:'',
                chosenAddressId: '1',
                addressid:"",
                id:"",
                name:"",
                tel:"",
                address:"",
                list: [],
            }
        },
        methods:{
            onClickLeft:function () {
                /*返回上一页*/
                this.$router.go(-1)
            },
            onChange() {
                this.$router.push({path:'/buygoods/changeaddress'})
            },
            reduce: function (index) {
                if (this.count == 0) {
                    return;
                }
                this.count--;
            },
            add: function (index) {
                this.count++;
            },
            //从服务器获取购物车数据
            getCartGoods:function () {
                this.$axios.get('http://localhost:1000/transaction-service/cart/getcart?token=' + this.$cookies.get("AUTH_TOKEN")).then((response) => {
                    for (var j =0;j<response.data.length;j++){
                        this.goodsvalue.push(response.data[j]);
                    }
                    for (var j =0;j<this.goodsvalue.length;j++){
                        this.allprice = this.allprice + (this.goodsvalue[j].value.goodsprice * this.goodsvalue[j].mount);
                    }
                    this.allshow = true;
                }).catch((error) => {

                });
            },
            //生成订单
            productorder:function () {
                this.$dialog.confirm({
                    title: '消息提示',
                    message: '即将离开前往支付宝页面支付'
                }).then(() => {
                    //确定
                    var outTradeNo = "";
                    for(var i=0;i<6;i++) //6位随机数，用以加在时间戳后面。
                    {
                        outTradeNo += Math.floor(Math.random()*10);
                    }
                    //时间戳，用来生成订单号。
                    outTradeNo = new Date().getTime() + outTradeNo;
                    //将当前的订单号存进local数据库
                    localStorage.setItem("orderid",outTradeNo);
                    for (var i =0 ; i<this.goodsvalue.length;i++){
                        this.$axios.post('http://localhost:1000/transaction-service/cart/generateorder?'
                            +'token='+this.$cookies.get("AUTH_TOKEN")
                            +'&sellerid='+this.goodsvalue[i].value.userid
                            +'&goodsid='+this.goodsvalue[i].value.sellgoodsid
                            +'&goodsmount='+this.goodsvalue[i].mount
                            +'&allprice='+this.allprice
                            +'&orderleavemessage='+this.orderleavemessage
                            +'&orderid='+outTradeNo
                            +'&orderaddress='+this.list[0].address
                            +'&addressid='+this.addressid
                        ).then((response) => {
                        }).catch((error) => {

                        });
                    }
                    this.payorder(outTradeNo,this.allprice,"desc")
                }).catch(() => {
                    //取消
                    this.$router.push({path:'/mine'})
                });
            },
            //支付订单
            payorder:function (orderid,allprice,ordername) {
                this.orderid = orderid;
                window.location.href = 'http://localhost:1000/transaction-service/alipay/pay?orderid='+orderid+'&orderprice='+allprice+'&ordername='+orderid+'&orderdesc=111111';
            }
        },
        mounted() {
            //从localstorag获取orderid
            var orderid = localStorage.getItem("orderid");
            if (orderid!=null){
                //查询订单的交易状态
                this.$axios.get('http://localhost:1000/transaction-service/alipay/query?orderid='+orderid).then((response) => {
                    if (response.data.alipay_trade_query_response.code == "10000"){
                        this.$axios.get('http://localhost:1000/transaction-service/alipay/alipayresult?orderid='+orderid).then((response) => {
                        }).catch((error) => {});
                    }
                }).catch((error) => {
                    // this.$router.push({path:'/loginAndRegister/login'})
                });
            }
            //判断登录状态
            this.$axios.get('http://localhost:1000/auth-service/auth/userinfo?token='+this.$cookies.get("AUTH_TOKEN")).then((response) => {
                this.getCartGoods();
            }).catch((error) => {
                this.$router.push({path:'/loginAndRegister/login'})
            });
            //获取当前用户下的收货地址
            this.$axios.get('http://localhost:1000/project-service/goods/getaddress?token=' + this.$cookies.get("AUTH_TOKEN")).then((response) => {
                this.addressid = response.data[0].id;
                this.id = response.data[0].selectid;
                this.name=response.data[0].username;
                this.tel = response.data[0].usertel;
                this.address = response.data[0].useraddress+response.data[0].userdateliaddress;
                var l =  {id: this.id, name: this.name, tel: this.tel, address: this.address};
                this.list.push(l)
            }).catch((error) => {
            });
        }
    }
</script>
<style scoped>

</style>