<template>
    <!--轮播图-->
    <div>
        <van-swipe :autoplay="3000" indicator-color="blue" :height="220" >
            <van-swipe-item v-for="(image,index) in imges" :key="index">
                <img class="back" v-lazy="image.imageaddress" >
            </van-swipe-item>
        </van-swipe>
    </div>

</template>
<script>
    export default {
        data(){
            return{
                /*轮播图*/
                imges:[],
            }
        },
        mounted() {
            /*get请求获取轮播的商品图片*/
            this.$axios.get('http://localhost:1000/project-service/goods/indexlunbo')
                .then((response) => {
                    /*赋值*/
                    this.imges = response.data;
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