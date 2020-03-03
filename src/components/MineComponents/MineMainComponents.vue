<template>
    <div>
        <!--展示路由转跳的页面-->
        <!--<router-view></router-view>-->
        <van-nav-bar title="个人中心" />
        <!--已登录-->
        <div v-if="isLogin">
            <div style="background-color: #3BBA63;height: 100px;color: white">
                <router-link to="/mine/setting">
                    <van-image width="80" height="80" round style="vertical-align:middle;" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                </router-link>
                <span>{{userdata.name}}</span>
            </div>
            <van-tabs v-model="active">
                <van-tab title="我是买家"><buyer/></van-tab>
                <van-tab title="我是卖家"><seller/></van-tab>
            </van-tabs>
        </div>
        <!--未登录-->
        <div v-else>
            <div style="margin-left: 30%;margin-top: 30%">
                亲，你还没有登录哦~~
                <br><br>
                <div style="margin-left: 15%">
                    <router-link to="/loginAndRegister/login">立即登录</router-link>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import buyer from "./Buyer.vue"
    import seller from "./Seller.vue"
    export default {
        data(){
            return{
                active:'',
                isLogin: false,
                userdata:{},
            }
        },
        components:{
            buyer,
            seller
        },
        methods:{

        },
        mounted() {
            //采用此种写法能避免cookie的token和服务器端新的token不同步的问题
            this.$axios.get('http://localhost:1000/auth-service/auth/userinfo?token='+this.$cookies.get("AUTH_TOKEN")).then((response) => {
                if (response != null){
                    //更新Cookie里面新的token,避免cookie里面的token没变，而服务器的token的却变了
                    this.$cookies.set("AUTH_TOKEN",response.data.newtoken,'30min')
                    this.userdata = response.data.userinfo;
                    //这里将会从服务true器获取当前用户信息，如果没有，传回一个false
                    this.isLogin = true;
                }else{
                    //未登录页面
                    this.isLogin = false;
                }

            })
        }
    }
</script>
<style scoped>

</style>