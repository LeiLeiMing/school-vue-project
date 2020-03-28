<template>
    <div>
        <!--展示路由转跳的页面-->
        <!--<router-view></router-view>-->
        <van-nav-bar v-if="messageshow==false" title="个人中心" />
        <van-nav-bar v-if="messageshow==true" title="个人中心" >
            <van-icon name="chat-o" size="28px" :info="this.infomount==0?'':this.infomount" slot="right" @click="message"/>
        </van-nav-bar>
        <!--加载栏-->
        <van-overlay :show="loadingshow" >
            <div class="wrapper" @click.stop>
                <div class="block" >
                    <div style="margin-top: 20px;margin-left: 40px">
                        <div style="margin-left: 8px">
                            <van-loading type="spinner" color="#1989fa" />
                        </div>
                        <br>
                        加载中
                    </div>
                </div>
            </div>
        </van-overlay>
        <van-popup
                v-model="show"
                position="right"
                :style="{ height: '85%',width:'55%' }"
        >
            <van-nav-bar title="消息"/>
            <div   style="height: 40px;">
                <van-swipe-cell v-for="(message,index) in messagelist" :key="index">
                    <div style="width: 25%;float: left;margin-top: 5px">
                        <van-image
                                round
                                width="2.6rem"
                                height="2.6rem"
                                src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1843085249,741887509&fm=26&gp=0.jpg"
                        />
                    </div>
                    <div style="width: 75%;float: right;margin-top: 5px">
                        <router-link to="/seller/0">
                            <van-icon :dot="message.status==0?true:false" @click="hadread(index,message.id)">
                                <div>
                                    <font v-show="message.status==0?true:false" style="font-size: 12px;color: #dd524d">系统通知</font>
                                    <font v-show="message.status==1?true:false" style="font-size: 12px;color: #8f8f94">系统通知</font>
                                    <font style="font-size: 8px;color: #8f8f94;margin-left: 10px">{{message.time}}</font>
                                </div>
                                <div>
                                    <font style="font-size: 8px;color: #8f8f94;">{{message.message}}</font>
                                </div>
                            </van-icon>
                        </router-link>
                    </div>
                    <van-button
                            @click="deletemessage(index)"
                            slot="right"
                            square
                            text="删除"
                            type="danger"
                            class="delete-button"
                    />
                </van-swipe-cell>
            </div>
        </van-popup>
        <!--已登录-->
        <div v-if="isLogin">
            <div style="height: 130px;color: white">
                <div :style="{backgroundImage: 'url(' + back + ')' }" style="height: 130px;">
                    <router-link to="/mine/setting">
                        <van-image width="80" height="80" round style="vertical-align:middle;" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                    </router-link>
                    <span>{{userdata.name}}</span>
                </div>
            </div>
            <van-tabs v-model="active">
                <van-tab >
                    <template #title>
                        <van-icon name="friends" size="15"/>我是买家
                    </template>
                    <buyer/>
                </van-tab>
                <van-tab >
                    <template #title>
                        <van-icon name="point-gift" size="15"/>我是卖家
                    </template>
                    <seller/>
                </van-tab>
            </van-tabs>
            <van-cell title="设置中心" icon="setting" is-link value="" size="large" to="/mine/setting"/>
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
    import back from './back.png'
    export default {
        data(){
            return{
                loadingshow:true,
                back: back,
                infomount:0,
                messagelist:[],
                messageshow:false, //是否显示消息栏
                read:true, //消息已读红点
                show:false,
                active:'',
                isLogin: false,
                userdata:{},
            }
        },
        components:{
            buyer,
            seller,
        },
        methods:{
            message:function () {
                this.show = true
            },
            //已读状态，红点消失
            hadread:function (id,messageid) {
                if (this.messagelist[id].status == 0){
                    this.infomount--;
                }
                this.messagelist[id].status = 1;
                //修改数据库中的已读状态
                this.$axios.get('http://localhost:1000/transaction-service/cart/changemessagestatus?messageid='+messageid).then((response) => {
                }).catch((error) => {

                });
            },
        },
        mounted() {
            //采用此种写法能避免cookie的token和服务器端新的token不同步的问题
            this.$axios.get('http://localhost:1000/auth-service/auth/userinfo?token='+this.$cookies.get("AUTH_TOKEN")).then((response) => {
                this.messageshow = true;
                this.loadingshow = false;
                if (response != null) {
                    //更新Cookie里面新的token,避免cookie里面的token没变，而服务器的token的却变了
                    this.$cookies.set("AUTH_TOKEN", response.data.newtoken, '30min')
                    this.userdata = response.data.userinfo;
                    //这里将会从服务true器获取当前用户信息，如果没有，传回一个false
                    this.isLogin = true;
                }
            }).catch((error) => {
                //未登录页面
                this.loadingshow = false;
                this.isLogin = false;
            });
            //获取当前用户收到的消息
            this.$axios.get('http://localhost:1000/transaction-service/cart/getmessage?token='+this.$cookies.get("AUTH_TOKEN")).then((response) => {
                this.messagelist = response.data;
                for (var i=0;i<this.messagelist.length;i++){
                    if (this.messagelist[i].status == 0){
                        this.infomount++;
                    }
                }
            }).catch((error) => {
                this.show = false;
            });
        }
    }
</script>
<style scoped>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .block {
        width: 120px;
        height: 120px;
        background-color: #fff;
    }
</style>