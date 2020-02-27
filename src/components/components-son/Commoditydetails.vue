<!--全部商品页面的内容-->
<template>
    <div>
        <!--下拉刷新-->
        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
                loading-text="拼命加载中..."
        >
            <!--商品卡片-->
            <router-link v-for="(g,index) in goods" :key="index" :to="'/list/all/'+index">
                <van-card :price=g.price :desc=g.desc :title=g.title :thumb=g.thumb />
            </router-link>
        </van-list>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                goods:[
                    {price:"20.00",desc:"描述信息:好东西好东西好东西好东西",title:"爆款春夏潮流短袖",thumb:"https://img.ddimg.mobi/product/73729284b788d1558072397291.jpg!deliver.product.list"},
                    {price:"20.00",desc:"描述信息:好东西好东西好东西好东西",title:"爆款春夏潮流短袖",thumb:"https://img.yzcdn.cn/vant/t-thirt.jpg"},
                    {price:"20.00",desc:"描述信息:好东西好东西好东西好东西",title:"爆款春夏潮流短袖",thumb:"https://img.yzcdn.cn/vant/t-thirt.jpg"},
                    {price:"20.00",desc:"描述信息:好东西好东西好东西好东西",title:"爆款春夏潮流短袖",thumb:"https://img.yzcdn.cn/vant/t-thirt.jpg"},
                    {price:"20.00",desc:"描述信息:好东西好东西好东西好东西",title:"爆款春夏潮流短袖",thumb:"https://img.yzcdn.cn/vant/t-thirt.jpg"},
                    {price:"20.00",desc:"描述信息:好东西好东西好东西好东西",title:"爆款春夏潮流短袖",thumb:"https://img.yzcdn.cn/vant/t-thirt.jpg"},
                ],
                /*上拉加载用的数据*/
                loading: false,
                finished: false,
                mark:true
            }
        },
        /*上拉刷新（瀑布流）*/
        methods: {
            onLoad() {
                // 异步更新数据
                setTimeout(() => {
                    /*加载的数据,该部分将会从数据库获取，获取模式和分页获取一致，故，每次获取数据后，要进行标记，方便下次从该数据后获取*/
                    var c =  {price:"20.00",desc:"描述信息:好东西好东西好东西好东西",title:"爆款春夏潮流短袖",thumb:"https://img.yzcdn.cn/vant/t-thirt.jpg"};
                    this.goods.push(c);
                    // 加载状态结束
                    this.loading = false;
                    // 数据全部加载完成
                    if (this.goods.length >= 40) {
                        this.finished = true;
                    }
                }, 500);
            },
        },
    }
</script>
<style scoped>

</style>