<!--个人中心页面-->
<template>
    <div>
        <van-nav-bar
                title="个人中心"
        />
        <div style="background-color: #3BBA63;height: 100px;color: white">
            <van-image width="80" height="80" round style="vertical-align:middle;" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
            <span>立即登录</span>
        </div>
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