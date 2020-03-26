<!--最热门的商品，根据浏览量来-->
<template>
    <div>
        <van-grid  :border="false" :column-num="2" :gutter="5">
            <van-grid-item v-for="(g,index) in recommendgoods" :key="index">
                <router-link :to="'/index/onegoods/'+g.sellgoodsid">
                    <img width="130px" height="150px" :src=g.allimageaddress[0].imageaddress />
                </router-link>
                <span style="font-size: 10px;margin-top: 10px">{{g.goodsname}}</span>
                <span>{{g.goodsprice}}</span>
                <div >
                    <span style="margin-left: 100px" ><van-icon name="cart-circle-o" color="red" size="30px" /></span>
                </div>
            </van-grid-item>
        </van-grid>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                recommendgoods:[
                ],
            }
        },
        methods:{
        },
        mounted() {
            //随机获取十条数据
            this.$axios.get('http://localhost:1000/project-service/goods/randgoods').then((response) => {
                this.recommendgoods = response.data;
            }).catch((error) => {
            });
        }

    }
</script>
<style scoped>

</style>