<template>
    <div>
        <van-sticky :offset-top="0">
            <van-nav-bar style="height: 45px" title="个人设置" left-arrow  @click-left="onClickLeft"/>
        </van-sticky>
        <van-cell title="头像设置"  size="large" is-link />
        <van-cell title="修改名称"  size="large" is-link />
        <van-button type="danger" size="large" @click="outlogin">退出登录</van-button>

    </div>
</template>
<script>
    export default {
        methods:{
            onClickLeft:function () {
                /*返回上一页*/
                this.$router.go(-1)
            },
            outlogin:function () {
                this.$dialog.confirm({
                    //title: '消息提示',
                    message: '确定退出登录吗？'
                }).then(() => {
                    //删除token
                    this.$cookies.remove("AUTH_TOKEN");
                    this.$router.push({path:'/mine'})
                }).catch(() => {
                    // on cancel
                });
            }
        }
    }
</script>
<style scoped>

</style>