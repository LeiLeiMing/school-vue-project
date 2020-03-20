<!--购物车页面-->
<template>
    <div>
        <van-nav-bar title="购物车"/>
        <!--加载栏-->
        <van-overlay :show="show" >
            <div class="wrapper" @click.stop>
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
            <div v-show="this.goodsvalue.length != 0">
                <van-sticky>
                    <div style="height: 50px;background-color: white;">
                        <div>
                            <van-button @click="addorder" type="danger" round style="float: right">提交订单</van-button>
                        </div>
                        <span style="float:left;text-align: center;line-height: 50px;">
                            合计：<span style="color: red">￥{{allprice}}</span>
                        </span>
                    </div>
                </van-sticky>
                <van-notice-bar text="向左滑动商品单元格可以执行删除的操作哦~~" left-icon="volume-o" />
                <van-swipe-cell v-for="(goods,index) in goodsvalue" :key="index">
                    <van-card
                            :num=goods.mount
                            :price=goods.value.goodsprice
                            :desc=goods.value.goodsdesc
                            :title=goods.value.goodsname
                            :thumb=goods.value.allimageaddress[0].imageaddress
                    />
                    <van-button
                            @click="deletegoods(index)"
                            slot="right"
                            square
                            text="删除"
                            type="danger"
                            class="delete-button"
                    />
                </van-swipe-cell>
            </div>
            <div v-show="this.goodsvalue.length == 0">
                <van-image
                        width="100%"
                        height="300"
                        src="https://img.51miz.com/Element/00/84/49/15/669eb23d_E844915_786f43c5.png!/quality/90/unsharp/true/compress/true/format/png/fh/630"
                />
                <span style="margin-left: 100px;color: gray">你的购物车空空如也~~</span>
                <span><van-button round size="large" type="danger">去逛逛~~</van-button></span>
            </div>
            <div>
                <span><h6 style="text-align: center">猜你喜欢</h6><hr></span>
                <!--猜你喜欢-->
                <van-grid  :border="false" :column-num="2" :gutter="5">
                    <van-grid-item v-for="(image,index) in showgoods" :key="index">
                        <router-link :to="'/index/everyday/'+index">
                            <img width="130px" height="150px" :src=image.url />
                        </router-link>
                        <span style="font-size: 10px;margin-top: 10px">大头牌手机，用了头就大</span>
                        <span>￥2000</span>
                        <router-link :to="'/index/everyday/'+index">
                            <span style="margin-left: 100px"><van-icon name="cart-circle-o" color="red" size="30px" /></span>
                        </router-link>
                        <br><br>
                    </van-grid-item>
                </van-grid>
            </div>
        </div>
        <!--底部tab栏-->
        <!--把amount传给子组件展示-->
        <apptab ></apptab>
    </div>
</template>
<script>
    import apptab from '../components/TabComponents/AppTab.vue'
    export default {
        data(){
            return{
                show:true,
                amount: 0,
                checked: true,
                /*购物车*/
                cartgoods:[], //载体，接收localStorage的双层数组
                goodsvalue:[], //最终解析，解析成单层数组
                allprice:0, //全部购物车价格
                allmount:0, //购物车商品总数
                /*商品展示*/
                showgoods:[
                    {url:"https://img.yzcdn.cn/vant/apple-3.jpg"},
                    {url:"https://img.yzcdn.cn/vant/apple-3.jpg"},
                    {url:"https://img.yzcdn.cn/vant/apple-3.jpg"},
                    {url:"https://img.yzcdn.cn/vant/apple-3.jpg"},
                    {url:"https://img.yzcdn.cn/vant/apple-3.jpg"},
                    {url:"https://img.yzcdn.cn/vant/apple-3.jpg"},
                ]
            }
        },
        components:{
            apptab
        },
        methods:{
            //从服务器获取购物车数据
            getCartGoods:function () {
                this.$axios.get('http://localhost:1000/transaction-service/cart/getcart?token=' + this.$cookies.get("AUTH_TOKEN")).then((response) => {
                    for (var j =0;j<response.data.length;j++){
                        this.goodsvalue.push(response.data[j]);
                    }
                    for (var j =0;j<this.goodsvalue.length;j++){
                        this.allprice = this.allprice + (this.goodsvalue[j].value.goodsprice * this.goodsvalue[j].mount);
                    }
                }).catch((error) => {

                });
            },
            //加入订单
            addorder:function () {
                this.$axios.get('http://localhost:1000/auth-service/auth/userinfo?token='+this.$cookies.get("AUTH_TOKEN")).then((response) => {
                    //跳转页面
                    this.$router.push({path:'/buygoods'})
                }).catch((error) => {
                    this.$router.push({path:'/loginAndRegister/login'})
                });
            },
            //删除商品
            deletegoods:function (id) {
                //清空本地存储，避免点击商品加入购物车时叠加
                localStorage.clear();
                this.$dialog.confirm({
                    //title: '消息提示',
                    message: '确定移除该商品吗'
                }).then(() => {
                    // on confirm
                    //从ths.goodsvalue中移除该id内容，发布到后台重新覆盖
                    this.goodsvalue.splice(id,1);
                    this.$axios({
                        method:'post',
                        url:'http://localhost:1000/transaction-service/cart/deletegoods?token='+this.$cookies.get("AUTH_TOKEN"),
                        data:this.goodsvalue,
                        header:{
                            'Content-Type':'application/json'  //如果写成contentType会报错
                        }
                    }).then((response)=>{
                        //delete success update goodsvalue
                        this.$toast({
                            message:"删除成功~~"
                        })
                    }).catch((error) =>{
                        this.$toast({
                            message:"服务器出错，删除失败，请稍后尝试~~"
                        })
                    });
                }).catch(() => {
                    // on cancel
                });
            },
        },
        created: function () {
            //判断用户是否登录
            this.$axios.get('http://localhost:1000/auth-service/auth/userinfo?token=' + this.$cookies.get("AUTH_TOKEN")).then((response) => {
                //从服务器数据库获取
                this.getCartGoods();
                this.show = false;
            }).catch((error) => {
                this.show = false;
                this.$toast({
                    message:"您未登录，登录后可查看购物车的商品哦"
                })
            });
        }
    }
</script>
<style scoped>
    [v-cloak]{
        display: none;
    }

    .delete-button {
        height: 100%;
    }

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