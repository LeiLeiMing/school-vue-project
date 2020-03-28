<template>
    <!--轮播图-->
    <div>
        <van-swipe :autoplay="3000" indicator-color="blue" :height="200" >
            <van-swipe-item v-for="(g,index) in goods" :key="index">
                <router-link :to="'/index/onegoods/'+g.sellgoodsid">
                    <img class="back" :src=g.allimageaddress[0].imageaddress />
                </router-link>
            </van-swipe-item>
        </van-swipe>
    </div>

</template>
<script>
    export default {
        data(){
            return{
                /*轮播图*/
                goods:[],
            }
        },
        mounted() {
            /*偷懒，随机推送首页商品*/
            this.$axios.get('http://localhost:1000/project-service/goods/indexlunbo').then((response) => {
                    /*赋值*/
                    this.goods = response.data;
                    console.log(this.goods)
                });
        }
    }
</script>
<style scoped>
    .back {
        height: 220px;
        width: 100%;
    }
</style>