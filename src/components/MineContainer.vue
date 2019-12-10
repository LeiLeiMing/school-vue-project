<!--个人中心页面-->
<template>
    <div>
        <van-nav-bar title="个人中心">
            <van-icon name="chat-o" info="9" size="25px" color="grey" slot="right" />
        </van-nav-bar>
        <div style="background-color: #3BBA63;height: 100px;color: white">
            <van-image width="80" height="80" round style="vertical-align:middle;" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
            <span>立即登录/注册</span>
        </div>
        <van-cell title="我的订单" icon="label" size="large" is-link value="查看全部订单"  />
        <van-grid>
            <van-grid-item icon="shopping-cart-o" text="待支付" />
            <van-grid-item icon="gold-coin-o" text="待收货" />
            <van-grid-item icon="gift-o" text="待评价" />
            <van-grid-item icon="phone-o" text="售后/退款" />
        </van-grid>
        <van-cell title="我的优惠卷" icon="balance-list" size="large" />
        <van-cell title="我的收货地址" icon="location" size="large" />
        <van-cell title="联系客服" icon="phone" size="large" is-link value="客服时间：8:00-0:00" />
        <van-cell title="意见反馈" icon="bell" size="large" />
        <van-cell title="设置中心" icon="setting" size="large" />
        <apptab></apptab>
    </div>
</template>
<script>
    import apptab from '../components/TabComponents/AppTab.vue'
    export default {
        components:{
            apptab
        }
    }
</script>
<style>

</style>