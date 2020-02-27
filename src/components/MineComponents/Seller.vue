<template>
    <div>
        <!--卖家-->
        <van-grid>
            <van-grid-item icon="todo-list-o"  text="待发货" to="/seller/0"/>
            <van-grid-item icon="logistics" text="已发货" to="/seller/1"/>
            <van-grid-item icon="balance-pay" text="已售出" to="/seller/2"/>
            <van-grid-item icon="phone-circle-o" text="帮助" />
        </van-grid>
        <van-cell title="上架的商品" icon="bill" size="large" is-link value="查看全部上架商品" to="/seller/3" />
        <van-cell title="收到的议价" icon="gold-coin" size="large" is-link to="/seller/4" />
        <van-cell title="联系客服" icon="phone" size="large" is-link value="客服时间：8:00-0:00" />
        <van-cell title="意见反馈" icon="bell" is-link value="" size="large" />
        <van-cell title="设置中心" icon="setting" is-link value="" size="large" />
    </div>
</template>

<script>
    export default {
        name: "Seller",
        mounted() {
            //该方法将会查询当前用户下的卖家信息...
        }
    }
</script>

<style scoped>

</style>