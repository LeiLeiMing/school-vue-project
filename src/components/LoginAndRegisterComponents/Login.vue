<template>
    <div>
        <van-sticky :offset-top="0">
            <van-nav-bar style="height: 45px" title="用户登录" left-arrow  @click-left="onClickLeft"/>
        </van-sticky>
        <div style="width: 100%;height: 600px;">
           <div style="width: 90%;height: 90%;margin-left: 5%;margin-top: 5%;background-color: white">
               <van-tabs v-model="active">
                   <van-tab title="登录">
                       <div style="width: 100%;height: 100%;margin-left: 10%;margin-top: 10%">
                           <span>
                               <label>*手机号</label>
                               <input type="number" style="width: 60%;"/>
                           </span>
                           <br>
                           <span>
                                <label>*验证码</label>
                               <input type="number" style="width: 30%;"/>
                               <van-button type="primary">获取验证码</van-button>
                           </span>
                       </div>
                       <div style="width: 80%;height: 100%;margin-left: 10%;margin-top: 5%">
                           <van-button type="primary" size="large">登录</van-button>
                       </div>
                       <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
                           其他登录方式
                       </van-divider>
                       <div style="width: 80%;height: 100%;margin-left: 10%;margin-top: 5%">
                           <van-grid :border="false" :column-num="2">
                               <van-grid-item text="文字">
                                   <van-image  width="30" height="30"  src="https://img.88tph.com/production/20180126/12488638-1.jpg!/watermark/url/L3BhdGgvbG9nby5wbmc/align/center" />
                               </van-grid-item>
                               <van-grid-item>
                                   <van-image width="30" height="30" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNuQzs32adLas7x7AdccPhmd0wV0pnQBkK2AAMQQR6EH-f1VON&s" />
                               </van-grid-item>
                           </van-grid>
                       </div>

                   </van-tab>
                   <van-tab title="注册">注册</van-tab>
               </van-tabs>
           </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
            }
        },
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