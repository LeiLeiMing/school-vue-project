<!--已上架的商品-->
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

        <!--已上架-->
        <div v-show="typevalue=='onsell'" v-for="(g,index) in groundinggoods"  :key="index" >
            <div>
                <router-link  :to="'/list/all/'+g.sellgoodsid">
                    <van-card :price=g.goodsprice :desc=g.goodsdesc  :title=g.goodsname  :num=g.goodsmount :thumb=g.imageaddress.imageaddress  :to="'/list/all/'+g.sellgoodsid"/>
                </router-link>
            </div>
        </div>

        <!--待发货-->
        <div v-show="typevalue=='tobeshiped'" v-for="(goods,index) in ordervalue" :key="index">
            <van-swipe-cell>
                <van-card
                        :num=goods.goodsmount
                        :price=goods.goodsPojo.goodsprice
                        :desc=goods.goodsPojo.goodsdesc
                        :title=goods.goodsPojo.goodsname
                        :thumb=goods.goodsPojo.imageaddress.imageaddress
                        tag="待发货"
                />
            </van-swipe-cell>
            <van-cell >
                <div style="float: left">
                    <span>共<font color="red"> {{goods.goodsmount}}</font>件商品 合计:<font color="red">￥{{goods.goodsmount * goods.goodsPojo.goodsprice}}</font></span>
                </div>
                <br>
                <div style="float: left">
                    {{goods.ordertime}}
                </div>
                <br>
                <div style="float: right">
                    <van-button type="default" round >协商退单</van-button>
                    <van-button type="danger" round v-on:click="fahuo(goods.goodsPojo.sellgoodsid,goods.orderid)" >安排发货</van-button>
                </div>
            </van-cell>
        </div>

        <!--已发货-->
        <div v-show="typevalue=='hadshiped'">
            <div v-show="typevalue=='hadshiped'" v-for="(g,index) in ordervalue"  :key="index" >
                <div>
                    <router-link  :to="'/list/all/'+g.goodsid">
                        <van-card :price=g.goodsPojo.goodsprice :desc=g.goodsPojo.goodsdesc  :title=g.goodsPojo.goodsname  :num=g.goodsmount :thumb=g.goodsPojo.imageaddress.imageaddress  />
                    </router-link>
                </div>
            </div>
        </div>

        <!--已售出-->
        <div v-if="typevalue=='hadsell'">
            <a>
                <van-divider>功能开发中--</van-divider>
            </a>
        </div>

        <!--收到的议价-->
        <div v-if="typevalue=='takeprice'">
            <a>
                <van-divider>功能开发中--</van-divider>
            </a>
        </div>

    </div>
</template>

<script>
    export default {
        props:['typevalue'],
        data(){
            return{
                show:true,
                groundinggoods:[],
                ordervalue:[],
            }
        },
        methods:{
            fahuo(id,orderid){
                this.$router.push({
                    path: '/sell/fahuo/'+id+'/'+orderid
                })
            }
        },
        //查询当前用户下的已经出售的商品
        mounted() {
            if (this.$cookies.get("AUTH_TOKEN")==null){
                this.$toast({
                    message:"登录信息失效，请重新登录~"
                })
                this.$router.push({path:'/mine'})
                return;
            }
            //待发货
            if (this.typevalue =="tobeshiped"){
                this.$axios.get('http://localhost:1000//transaction-service/cart/getshippedorder?token=' + this.$cookies.get("AUTH_TOKEN")).then((response) => {
                    //从服务器数据库获取
                    this.ordervalue = response.data;
                    this.show = false;
                }).catch((error) => {
                    this.show = false;
                    if (error.response.status == 403){
                        this.$toast({
                            message:"登录信息过期，请重新登录"
                        })
                        this.$router.push({path:'/mine'});
                    }else{
                        this.$toast({
                            message:"服务异常，请稍后再试"
                        })
                    }
                });
            }
            if(this.typevalue=="onsell"){
                this.$axios.get('http://localhost:1000/project-service/goods/findsellgoods?authtoken='+this.$cookies.get("AUTH_TOKEN")).then((response) => {
                    this.groundinggoods = response.data;
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
            }
            if (this.typevalue=="hadshiped"){
                this.$axios.get('http://localhost:1000/transaction-service/cart/getshiped?token='+this.$cookies.get("AUTH_TOKEN")).then((response) => {
                    this.ordervalue = response.data;
                    console.log(this.ordervalue)
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

            }

            if (this.typevalue=="hadsell"){
                this.show = false;
            }

            if (this.typevalue=="takeprice"){
                this.show = false;
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