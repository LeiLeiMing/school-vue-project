<template>
    <div>
        <!--买家-->
        <van-grid>
            <van-grid-item icon="shopping-cart-o"  text="待支付" to="/buyer/0" />
            <van-grid-item icon="gold-coin-o" text="待收货" to="/buyer/1" />
            <van-grid-item icon="phone-o" text="已买到" to="/buyer/2" />
            <van-grid-item icon="gift-o" text="待评价" to="/buyer/3"/>
        </van-grid>
        <van-cell title="我的订单" icon="label" size="large" is-link value="查看全部订单" to="/buyer/4"  />
        <van-cell title="我的收藏" icon="star" size="large" is-link  to="/buyer/5"  />
        <van-cell title="我的收货地址" icon="location" is-link value="" size="large" to="/buyer/6" />
        <van-cell title="联系客服" icon="phone" size="large" is-link value="客服时间：8:00-0:00" />
        <van-cell title="意见反馈" icon="bell" is-link value="" size="large" />
        <van-cell title="设置中心" icon="setting" is-link value="" size="large" />
    </div>
</template>

<script>
    export default {
        name: "Buyer"
    }
</script>

<style scoped>

</style>