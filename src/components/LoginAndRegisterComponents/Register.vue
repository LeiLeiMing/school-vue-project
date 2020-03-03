<template>
    <div>
        <div class="back" :style="{backgroundImage: 'url(' + back + ')' }">
            <div style="width: 100%;height: 400px;">
                <van-tabs v-model="active">
                    <!--注册-->
                    <van-tab title="账号注册">
                        <div style="width: 100%;height: 100%;margin-left: 10%;margin-top: 40%">
                           <span>
                               <label><font style="color: red;">*</font><font style="color: white">手机号</font></label>
                               <input type="number" v-model="phone" placeholder="请输入手机号" style="width: 60%;"/>
                           </span>
                            <br>
                            <span>
                                <label><font style="color: red;">*</font><font style="color: white">密码</font></label>&nbsp&nbsp&nbsp&nbsp
                               <input type="password" v-model="password" placeholder="请输入密码" style="width: 60%;"/>
                           </span>
                            <br>
                            <span>
                               <label><font style="color: red;">*</font><font style="color: white">验证码</font></label>
                               <input type="number" v-model="code" placeholder="请输入短信验证码" style="width: 30%;"/>
                               <van-button type="primary" :disabled="this.isdisabled" @click="getCode()">{{content}}</van-button>
                           </span>
                        </div>
                        <div style="width: 80%;height: 100%;margin-left: 10%;margin-top: 5%">
                            <van-button type="info" size="large" @click="finallyCheck()">注册</van-button>
                            <van-button type="primary" size="large" to="/loginAndRegister/login">返回登录</van-button>
                        </div>
                        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
                            其他登录方式
                        </van-divider>
                    </van-tab>
                </van-tabs>
            </div>
        </div>
    </div>
</template>

<script>
    import back from "./back.png"
    import slide from "./Verification.vue"
    export default {
        data(){
            return{
                back: back,
                phone:"",
                password:"",
                code:"",
                content: '获取验证码',
                totalTime: 60,
                canClick: true,
                isdisabled: false //按键是否启用
            }
        },
        components:{
            slide,
        },
        methods:{
            onClickLeft:function () {
                /*返回上一页*/
                this.$router.go(-1)
            },
            //登录最终核对
            finallyCheck:function () {
                if (this.phone === '') {
                    this.$toast({
                        message:"手机号不能为空"
                    })
                    return;
                } else {
                    if (this.phone !== '') {
                        var reg = /^1[3456789]\d{9}$/;
                        if (!reg.test(this.phone)) {
                            this.$toast({
                                message:"请输入正确的手机号"
                            })
                            return;
                        }
                    }
                }
                if (this.password === ''){
                    this.$toast({
                        message:"密码不能为空"
                    })
                    return;
                }
                if (this.code === ''){
                    this.$toast({
                        message:"请输入验证码"
                    })
                    return;
                }else{
                   //开始注册
                    this.$axios.post('http://localhost:1000/user-service/user/register?phone='+this.phone+'&password='+this.password+'&code='+this.code).then((response) => {
                            /*赋值*/
                        if (response.status === 201){
                            this.$toast({
                                message:"注册成功"
                            })
                            this.$router.push({path:'/loginAndRegister/login'})
                        }
                    }).catch((error) => {
                        //只有用箭头函数才能写this
                        if (error.response.status == 401){
                            this.$toast({
                                message:"验证码失效，请重新获取"
                            })
                        }
                    });
                }
            },
            //发送验证码
            getCode:function () {
                if (this.phone === ''){
                    this.$toast({
                        message:"请输入手机号"
                    })
                    return;
                }
                if (!this.canClick) return;
                this.canClick = false
                this.isdisabled = true; //禁用按键
                this.content = this.totalTime + 's后可发送'
                let clock = window.setInterval(() => {
                    this.totalTime--
                    this.content = this.totalTime + 's后可发送'
                    if (this.totalTime < 0) {
                        window.clearInterval(clock)
                        this.content = '重新发送'
                        this.totalTime = 60
                        this.canClick = true  //这里重新开启
                        this.isdisabled = false //启用按键
                    }
                },1000)
                this.$axios.post('http://localhost:1000/user-service/user/sendcode?phone='+this.phone).then((response) => {
                });
                this.$toast({
                    message:"短信已发送，请注意查收"
                })
            },
        }
    }
</script>

<style scoped>
    .back{
        width: 100%;
        height: 850px;
    }
</style>