<template>
    <div>
        <van-sticky :offset-top="0">
            <van-nav-bar style="height: 45px" title="个人设置" left-arrow  @click-left="onClickLeft"/>
        </van-sticky>
        <h1>个人设置中心</h1>
    </div>
</template>
<script>
    export default {
        methods:{
            onClickLeft:function () {
                /*返回上一页*/
                this.$router.go(-1)
            }
        }
    }
</script>
<style scoped>

</style>