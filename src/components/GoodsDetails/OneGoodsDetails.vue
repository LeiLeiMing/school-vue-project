<template>
    <div>
        <router-link :to=url>
            <van-nav-bar title="衣服" left-text="返回" left-arrow @click-left="fromOneGoods"/>
        </router-link>
        <van-image
                width="100%"
                height="250"
                src="https://img.yzcdn.cn/vant/t-thirt.jpg"
        />
        <span>
            <h4>流行短袖保加利亚诸葛村夫爆款波兰哥</h4>
            <h5>好看耐用   用了都说好</h5>
            <h4 style="color: red">￥200</h4>
            <h5>月销量:10000</h5>
            <br>
            <h6>此商品包邮，七天无忧退换</h6>
        </span>
        <br>
        <span>
            <h5>规格选择</h5>
        </span>
        <van-sticky :offset-top="500">
            <van-goods-action>
                <van-goods-action-icon icon="chat-o" text="客服"/>
                <van-goods-action-icon icon="cart-o" text="购物车"  />
                <van-goods-action-butidton type="warning" text="加入购物车"/>
                <van-goods-action-button type="danger" text="立即购买" />
            </van-goods-action>
        </van-sticky>

    </div>
</template>
<script>
    export default {
        data(){
            return{
                url:this.$route.path
            }
        },
        methods: {
            fromOneGoods() {
                this.$emit('toGoodsApp',false)
            }
        }
    }
</script>
<style scoped>

</style>