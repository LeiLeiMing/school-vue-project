<template>
    <div>
        <!--展示路由转跳的页面-->
        <!--<router-view></router-view>-->
        <van-nav-bar title="个人中心">
            <van-icon name="chat-o" info="9" size="25px" color="grey" slot="right" />
        </van-nav-bar>
        <div style="background-color: #3BBA63;height: 100px;color: white">
            <router-link to="/mine/setting">
                <van-image width="80" height="80" round style="vertical-align:middle;" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
            </router-link>
            <span>立即登录/注册</span>
        </div>
        <div>
            <!--买家-->
            <van-grid>
                <van-grid-item icon="shopping-cart-o"  text="待支付" />
                <van-grid-item icon="gold-coin-o" text="待收货" />
                <van-grid-item icon="phone-o" text="已买到" />
                <van-grid-item icon="gift-o" text="待评价" />
            </van-grid>
            <!--卖家-->
            <van-grid>
                <van-grid-item icon="todo-list-o"  text="待发货" />
                <van-grid-item icon="logistics" text="已发货" />
                <van-grid-item icon="balance-pay" text="已售出" />
                <van-grid-item icon="phone-circle-o" text="帮助" />
            </van-grid>
            <van-cell title="我的订单" icon="label" size="large" is-link value="查看全部订单"  />
            <van-cell title="上架的商品" icon="bill" size="large" is-link value="查看全部上架商品"  />
            <van-cell title="我的收藏" icon="star" size="large" is-link   />
            <van-cell title="我的收货地址" icon="location" is-link value="" size="large" />
            <van-cell title="联系客服" icon="phone" size="large" is-link value="客服时间：8:00-0:00" />
            <van-cell title="意见反馈" icon="bell" is-link value="" size="large" />
            <van-cell title="设置中心" icon="setting" is-link value="" size="large" />
        </div>
        <br><br><br>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                active:''
            }
        },
    }
</script>
<style scoped>

</style>