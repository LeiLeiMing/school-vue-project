<!--最热门的商品，根据浏览量来-->
<template>
    <div>
        <van-grid  :border="false" :column-num="2" :gutter="5">
            <van-grid-item v-for="(goods,index) in hotsellgoods" :key="index">
                <router-link :to="'/index/onegoods/'+goods.sellgoodsid">
                    <img width="160px" height="160px" :src=goods.allimageaddress[0].imageaddress />
                </router-link>
                <span style="font-size: 10px;margin-top: 10px">{{ goods.goodsname }}</span>
                <span>￥{{goods.goodsprice}}</span>
                <router-link :to="'/list/all/'+goods.sellgoodsid">
                    <span style="margin-left: 100px"><van-icon name="cart-circle-o" color="red" size="30px" /></span>
                </router-link>
            </van-grid-item>
        </van-grid>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                hotsellgoods:[],
            }
        },
        methods:{
            // select(id){
            //     /*测试获取id，该id就是商品id，将被用于把加入购物车的商品和用户的购物车连接*/
            //     console.log(id)
            //     /*传给父组件*/
            //     this.$emit('addCart',1)
            //     this.$toast({
            //         message:"加入购物车成功"
            //     })
            // }
        },
        mounted() {
            //获取最新的十个商品
            this.$axios.get('http://localhost:1000/project-service/goods/hotsellgoods').then((response) => {
                this.hotsellgoods = response.data;
            }).catch((error) => {

            });
        }

    }
</script>
<style scoped>

</style>