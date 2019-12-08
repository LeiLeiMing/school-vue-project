<template>
    <div style="background-color: white">
        <van-sticky :offset-top="0">
            <router-link :to="'/'+url">
                <van-nav-bar style="height: 45px" title="爆款衣服" left-arrow/>
            </router-link>
        </van-sticky>
        <van-image
                width="100%"
                height="250"
                src="https://img.yzcdn.cn/vant/t-thirt.jpg"
        />

        <span>
            <h4>流行短袖保加利亚诸葛村夫爆款波兰哥</h4>
            <h5>好看耐用   用了都说好</h5>
            <h4 style="color: red">￥200</h4>
            <h5>月销量:10000</h5>
            <h6>此商品包邮，七天无忧退换</h6>
        </span>
        <br>
        <span>
            <h5>规格选择</h5>
        </span>
        <div style="margin-left: 120px">
            <van-button plain type="primary">加入购物车</van-button>
            <van-button type="danger">立即购买</van-button>
        </div>
        <br><br><br>
        <br><br><br>
        <br><br><br>
    </div>
</template>
<script>

    export default {
        data(){
            return{
                /*挂载路由传过来的id*/
                url:this.$route.path.split("/")[1]
            }
        },
    }
</script>
<style scoped>
</style>