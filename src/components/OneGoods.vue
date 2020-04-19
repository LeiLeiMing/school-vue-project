<!--商品详情页面-->
<!--因为是二手物品，尺寸方面可能对于卖家而已专业性不强，将会取消-->
<template>
    <div>
        <van-sticky :offset-top="0">
            <van-nav-bar style="height: 45px" title="商品详情" left-arrow  @click-left="onClickLeft"/>
        </van-sticky>
        <van-swipe  :height="300" >
            <van-swipe-item v-for="(image, index) in indeximage" :key="index">
                <img class="back" v-lazy="image.imageaddress" />
            </van-swipe-item>
        </van-swipe>
        <div>
            <van-panel>
                <div>
                    <h4>
                        {{this.goodsinfo.goodsname}}
                    </h4>
                </div>
                <div>
                    <font size="2px">
                        {{this.goodsinfo.goodsdesc}}
                    </font>
                </div>
                <van-divider />
                <div style="color: red">价格：￥{{this.goodsinfo.goodsprice}}</div>
                <div>
                    <h6>
                        浏览次数:{{this.goodsinfo.clickmount}} &nbsp &nbsp &nbsp 库存:{{this.goodsinfo.goodsmount}}
                        &nbsp &nbsp &nbsp{{this.goodsinfo.goodsaddress}}
                    </h6>
                    <br>
                    <h6>
                        {{this.goodsinfo.fresh}}
                    </h6>
                </div>
                <van-divider />
                <div v-if="this.goodsinfo.baoyou == 1">
                    <h6>包邮</h6>
                </div>
                <div v-if="this.goodsinfo.baoyou == 0">
                    <h6>此商品不支持包邮</h6>
                </div>
                <br>
                <div v-if="this.goodsinfo.nogotable == 1">
                    <van-cell title="可议价" value="去议价" is-link @click="showBuySize"/>
                </div>
                <div v-if="this.goodsinfo.nogotable == 0">
                    <van-cell title="不可议价" is-link @click="showBuySize"/>
                </div>
                <div>
                    <van-tabs>
                        <van-tab title="宝贝详情">
                            <van-grid :border="false" :column-num="1">
                                <van-grid-item v-for="(image,index) in detailsimage" :key="index">
                                    <img class="back" v-lazy="image.imageaddress" />
                                </van-grid-item>
                            </van-grid>
                        </van-tab>
                    </van-tabs>
                </div>
                <br><br><br><br>
            </van-panel>
        </div>

        <!--购买栏-->
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="联系卖家"  />
            <van-goods-action-icon icon="star-o" text="收藏" />
            <van-goods-action-button type="danger" text="加入购物车" @click="addcart" />
<!--            <van-goods-action-button type="danger" text="立即购买" @click="buynow"  />-->
        </van-goods-action>
        <!---->
    </div>
</template>
<script>
    import aboutgoods from './OneGoodsComponents/AboutGoods.vue'
    import comments from  './OneGoodsComponents/Comments.vue'
    export default {
        data(){
            return{
                //商品信息
                goodsinfo:[],
                //首页展示图片
                indeximage:[],
                //商品详情图片
                detailsimage:[],
                /*购物车*/
                cartgoods:[], //载体，接收localStorage的双层数组
                goodsvalue:[], //最终解析，解析成单层数组
            }
        },
        methods:{
            onClickLeft:function () {
                /*返回上一页*/
                this.$router.go(-1)
            },
            //立即购买
            buynow:function(){
                //核对用户
                //根据判断用户是否登录
                var authtoken = this.$cookies.get("AUTH_TOKEN");
                if (authtoken == null || authtoken === ''){
                    this.$toast({
                        message:"您未登录，请登录后再购买哦~~"
                    })
                    return;
                }
                this.$axios.get('http://localhost:1000/auth-service/auth/userinfo?token='+this.$cookies.get("AUTH_TOKEN")).then((response) => {
                    //登录无误，生成订单

                    //跳转结算
                    this.$router.push({path:'/buygoods'})
                }).catch((error) => {
                    this.$toast({
                        message:"您未登录，请登录后再购买哦~~"
                    })
                });
            },

            //加入购物车
            addcart:function () {
                //判断当前用户是否登录
                this.$axios.get('http://localhost:1000/auth-service/auth/userinfo?token='+this.$cookies.get("AUTH_TOKEN")).then((response) => {
                    //已登录,先将数据保存到本地在获取本地数据并全部传到redis
                    //把数据存进本地的原因是为了保持数据格式的一致性，不至于大规模更改
                    this.savecartlocal();
                    this.useraddcart();
                }).catch((error) => {
                    //清空上一次记录
                    this.$toast({
                        message:"您未登录，请登录后加入购物车哦~~"
                    })
                });
            },
            //登录状态下将商品加入购物车
            useraddcart:function () {
                //获取所有本地购物车数据
                for (var i = 0; i < localStorage.length; i++) {
                    //玄学过滤
                    if (localStorage.getItem(localStorage.key(i))[0] === "["&&localStorage.getItem(localStorage.key(i))[4] === "a"&& localStorage.getItem(localStorage.key(i))[7] === "e") {
                        //取出来是String类型，转为JSON时是双层数组，需要解析层单层数组
                        this.cartgoods =JSON.parse(localStorage.getItem(localStorage.key(i)));
                        //解析层单层数组
                        for (var j =0;j<this.cartgoods.length;j++){
                            this.goodsvalue.push(this.cartgoods[j]);
                        }
                    }
                }
                //将本地购物车记录以JSON传到传至浏览器
                this.$axios({
                    method:'post',
                    url:'http://localhost:1000/transaction-service/cart/savelocal?token='+this.$cookies.get("AUTH_TOKEN"),
                    data:this.goodsvalue,
                    header:{
                        'Content-Type':'application/json'  //如果写成contentType会报错
                    }
                }).then((response)=>{
                    //清空数组内的缓存,否则会越加越多
                    this.goodsvalue.length = 0;
                }).catch((error) =>{
                    this.$toast({
                        message:"添加失败~"
                    })
                });
            },
            //将商品数据存进本地
            savecartlocal:function () {
                var cartinfo = localStorage.getItem(this.goodsinfo.sellgoodsid)
                //已经有了，数量加1
                if (cartinfo!==null){
                    var oldmount = JSON.parse(localStorage.getItem(this.goodsinfo.sellgoodsid))[0].mount;
                    var cartgoods = [{ value:this.goodsinfo, mount:oldmount+1}]
                    localStorage.setItem(this.goodsinfo.sellgoodsid,JSON.stringify(cartgoods))
                    //localStorage.setItem(this.goodsinfo.id+"&_&key",JSON.stringify(info))
                }else{
                    var cartgoods = [{ value:this.goodsinfo, mount: 1}]
                    localStorage.setItem(this.goodsinfo.sellgoodsid,JSON.stringify(cartgoods))
                }
                this.$toast({
                    message:"已添加至购物车"
                })
            }
        },
        components:{
            aboutgoods,
            comments
        },
        mounted() {
            //获取路由传过来的商品id
           this.goodsid = this.$route.params.id;
           //记录点击次数
            this.$axios.post('http://localhost:1000/project-service/goods/goodsclick?sellgoodsid='+this.goodsid).then((response) => {
            }).catch((error) => {});
           //通过商品id查询该商品信息
            this.$axios.get('http://localhost:1000/project-service/goods/goodsdetails?sellgoodsid='+this.goodsid).then((response) => {
                this.goodsinfo = response.data
                for (var i = 0;i<this.goodsinfo.allimageaddress.length;i++){
                    if(this.goodsinfo.allimageaddress[i].lunboordateils == 1){
                        this.indeximage.push(this.goodsinfo.allimageaddress[i])
                    }else{
                        this.detailsimage.push(this.goodsinfo.allimageaddress[i])
                    }
                }
            }).catch((error) => {
                this.$toast({
                    message:"服务器器出小差了~~"
                })

            });
            this.$axios.get('http://localhost:1000/auth-service/auth/userinfo?token='+this.$cookies.get("AUTH_TOKEN")).then((response) => {
            }).catch((error) => {
                //检查立马清空上一次记录，避免本地购物车数据叠加进去
                localStorage.clear();
            });
        }
    }
</script>
<style scoped>
    .back {
        height: 300px;
        width: 100%;
    }
</style>