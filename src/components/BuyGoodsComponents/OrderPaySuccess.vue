<!--订单支付成功页面-->
<template>
    <div>
        <div style="margin-left: 150px;margin-top: 150px">
            <div>
                <van-image
                        width="100"
                        height="100"
                        src="https://leiming-secondhand.oss-cn-beijing.aliyuncs.com/%E6%94%AF%E4%BB%98%E6%88%90%E5%8A%9F.png"
                />
            </div>
            <div style="margin-left: 15px">支付成功</div>
        </div>
        <br><br><br>
        <van-button type="default" size="large">继续购买</van-button>
        <van-button type="danger" size="large">查看订单</van-button>
        <apptab></apptab>
    </div>
</template>

<script>
    import apptab from '../TabComponents/AppTab.vue'
    export default {
        name: "OrderPaySuccess",
        components:{
            apptab
        }
    }
</script>

<style scoped>

</style>