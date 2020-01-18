<!--分区商品展示块-->
<template>
    <div>
        <van-grid  :border="false" :column-num="5">
            <van-grid-item v-for="(sortlist,index) in sortimges" :key="index">
                <router-link :to="'/sort/'+index">
                    <van-image round width="40px" height="40px" :src="sortlist.url" />
                </router-link>
                <router-link :to="'/sort/'+index" style="color: black">
                    <span style="font-size: 10px;margin-top: 10px">{{sortlist.name}}</span>
                </router-link>
            </van-grid-item>
        </van-grid>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                /*分类展示*/
                sortimges:[
                    {name:"学习用品",url:"https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717_1280.jpg"},
                    {name:"体育用品",url:"https://image.shutterstock.com/image-photo/sports-balls-on-white-background-260nw-141108238.jpg"},
                    {name:"生活用品",url:"https://image.shutterstock.com/image-illustration/livingroom-interior-scandinavian-style-3d-260nw-520261186.jpg"},
                    {name:"电脑",url:"https://cdn.pixabay.com/photo/2014/05/02/21/49/home-office-336373__340.jpg"},
                    {name:"手机",url:"https://cdn.pixabay.com/photo/2016/12/01/18/17/mobile-phone-1875813__340.jpg"},
                    {name:"衣服",url:"https://cdn.pixabay.com/photo/2015/11/07/11/46/fashion-1031469__340.jpg"},
                    {name:"鞋子",url:"https://cdn.pixabay.com/photo/2017/05/14/21/36/shoe-2313143__340.jpg"},
                    {name:"家具电器",url:"https://image.shutterstock.com/image-illustration/home-appliances-set-household-kitchen-260nw-1069109165.jpg"},
                    {name:"单车电车",url:"https://cdn.pixabay.com/photo/2013/07/13/13/43/racing-bicycle-161449__340.png"},
                    {name:"手办",url:"https://img.yzcdn.cn/vant/cat.jpeg"}
                ],
            }
        }
    }
</script>
<style scoped>

</style>