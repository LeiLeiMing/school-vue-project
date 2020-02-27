<!--商品详情页面-->
<!--因为是二手物品，尺寸方面可能对于卖家而已专业性不强，将会取消-->
<template>
    <div>
        <van-sticky :offset-top="0">
            <van-nav-bar style="height: 45px" title="爆款衣服" left-arrow  @click-left="onClickLeft"/>
        </van-sticky>
        <van-swipe  :height="300" >
            <van-swipe-item v-for="(image, index) in indexgoods" :key="index">
                <img class="back" v-lazy="image.url" />
            </van-swipe-item>
        </van-swipe>
        <div>
            <van-panel>
                <div>纯白色短袖t恤男女宽松DIY白t恤半袖纯棉圆领打底衫广告衫印logo</div>
                <van-divider />
                <div><h6>月销量:100 &nbsp &nbsp &nbsp 累计评价:100</h6></div>
                <div style="color: red">价格：￥200</div>
                <div>
                    <h6>此商品包邮，七天无忧退换</h6>
                </div>
                <br>
                <div>
                    <van-cell title="可议价" value="去议价" is-link @click="showBuySize"/>
                </div>
                <div>
                    <van-tabs>
                        <van-tab title="宝贝详情"><aboutgoods /></van-tab>
                        <van-tab title="累计评价(100)"><comments /></van-tab>
                    </van-tabs>
                </div>
                <br><br><br><br>
            </van-panel>
        </div>

        <!--购买栏-->
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="联系卖家"  />
            <van-goods-action-icon icon="cart-o" text="购物车" />
            <van-goods-action-button type="warning" text="加入购物车" />
            <van-goods-action-button type="danger" text="立即购买"  />
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
                indexdefaultImage:"https://img.yzcdn.cn/vant/t-thirt.jpg",
                size:"无",
                color:"无",
                message:"",
                value:0,
                show: false,
                indexgoods:[
                    {url:'https://img.yzcdn.cn/vant/t-thirt.jpg'},
                    {url:'https://img.yzcdn.cn/vant/t-thirt.jpg'},
                    {url:'https://img.yzcdn.cn/vant/t-thirt.jpg'},
                    {url:'https://img.yzcdn.cn/vant/t-thirt.jpg'},
                ],
                goodscolor:[
                    {imageurl:"https://img.yzcdn.cn/vant/t-thirt.jpg",colorname:"白色"},
                    {imageurl:"https://img.yzcdn.cn/vant/apple-2.jpg",colorname:"黑色"},
                    {imageurl:"https://img.yzcdn.cn/vant/apple-1.jpg",colorname:"褐色"},
                ],
                goodssize:[
                    {sizeValue:"X"},
                    {sizeValue:"L"},
                    {sizeValue:"XL"},
                    {sizeValue:"XXL"},
                ],
            }
        },
        methods:{
            onClickLeft:function () {
                /*返回上一页*/
                this.$router.go(-1)
            },
            showBuySize:function () {
                this.show = true
            },
            add:function () {
                this.value++;
            },
            reduce:function () {
                this.value--;
            },
            selectColor:function (data,imageurl) {
                this.color = data;
                this.indexdefaultImage = imageurl;
            },
            selectSize:function (data) {
                this.size = data;
            },
            success:function () {
                this.show = false;
            }
        },
        components:{
            aboutgoods,
            comments
        }
    }
</script>
<style scoped>
    .back {
        height: 300px;
        width: 100%;
    }
</style>