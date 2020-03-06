<!--底部导航栏+导航栏路由的页面-->
<template>
    <div>
        <!--路由坑，用来展示路由到的页面-->
        <!--<router-view></router-view>-->
        <nav class="mui-bar mui-bar-tab">
            <!--这里实现路由高亮-->
            <router-link class="mui-tab-item" to="/index">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item " to="/list">
                <span class="mui-icon mui-icon-list"></span>
                <span class="mui-tab-label">全部</span>
            </router-link>
            <router-link class="mui-tab-item " to="/sell">
                <span class="mui-icon mui-icon mui-icon mui-icon mui-icon-plus"></span>
                <span class="mui-tab-label">发布商品</span>
            </router-link>
            <router-link class="mui-tab-item " to="/cart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" v-if="amount!=0">{{amount}}</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item " to="/mine">
                <span class="mui-icon mui-icon-person"></span>
                <span class="mui-tab-label">我的</span>
            </router-link>
        </nav>
    </div>
</template>
<script>
    export default {
        /*这时候父组件传来的amount不需要考虑存进数据库，交给父组件存*/
        /*子组件只负责动态展示购物车数量的变化和mounted方法从数据库获取最新的数量，这样一来，切换标签栏时，
        * amount总是数据库里最新的数据，看不出有异样
        * */
        //props: ['amount'],
        data(){
            return{
                amount:0,
                cartgoods:[],
                goodsvalue:[]
            }
        },
        methods:{
            //从服务器获取购物车数据
            getCartGoods:function () {
                this.$axios.get('http://localhost:1000/transaction-service/cart/getcart?token=' + this.$cookies.get("AUTH_TOKEN")).then((response) => {
                    for (var j =0;j<response.data.length;j++){
                        this.goodsvalue.push(response.data[j]);
                    }
                    for (var j =0;j<this.goodsvalue.length;j++){
                        this.allprice = this.allprice + (this.goodsvalue[j].value.goodsprice * this.goodsvalue[j].mount);
                    }
                    for (var j =0;j<this.goodsvalue.length;j++){
                        this.amount = this.amount + this.goodsvalue[j].mount;
                    }
                }).catch((error) => {

                });
            },
        },
        /*加载时，从数据库获取用户下的购物车数量*/
        mounted() {
            //判断用户是否登录
            this.$axios.get('http://localhost:1000/auth-service/auth/userinfo?token=' + this.$cookies.get("AUTH_TOKEN")).then((response) => {
                //从服务器数据库获取
                this.getCartGoods();
            }).catch((error) => {
            });
        }
    }
</script>
<style scoped>

</style>