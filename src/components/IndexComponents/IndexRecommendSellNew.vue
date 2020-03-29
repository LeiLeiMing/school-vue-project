<!--最新的商品-->
<template>
    <div>
        <van-grid  :border="false" :column-num="2" :gutter="5">
            <van-grid-item v-for="(goods,index) in newsellgoods" :key="index">
                <router-link :to="'/index/onegoods/'+goods.sellgoodsid">
                    <img width="160px" height="160px" :src=goods.allimageaddress[0].imageaddress />
                </router-link>
                <span style="font-size: 10px;margin-top: 10px">{{ goods.goodsname }}</span>
                <span>￥{{goods.goodsprice}}</span>
                <router-link :to="'/list/all/'+goods.sellgoodsid">
                    <span style="margin-left: 100px"><van-icon name="cart-circle-o" color="red" size="30px" /></span>
                </router-link>
                <br><span><font size="1px"> {{goods.goodsaddress}}</font></span>
            </van-grid-item>
        </van-grid>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                newsellgoods:[]
            }
        },
        mounted() {
            //获取最新的十个商品
            this.$axios.get('http://localhost:1000/project-service/goods/newsellgoods').then((response) => {
                this.newsellgoods = response.data;
            }).catch((error) => {
            });
        }
    }
</script>
<style scoped>

</style>