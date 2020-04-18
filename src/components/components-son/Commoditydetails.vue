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
            <router-link v-for="(g,index) in goods" :key="index" :to="'/index/onegoods/'+g.sellgoodsid">
                <van-card :tag=g.fresh :price=g.goodsprice :desc=g.goodsdesc :title=g.goodsname :thumb=g.allimageaddress[0].imageaddress />
            </router-link>
        </van-list>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                goods:[],
                /*上拉加载用的数据*/
                loading: false,
                finished: false,
                mark:true,
                /*初始页数*/
                startpage:0,
                /*总页数*/
                endpage:5,
                /*刷新次数*/
                mount:0,
                /*length*/
                goodslength:0,
            }
        },
        /*上拉刷新（瀑布流）*/
        methods: {
            onLoad() {
                // 异步更新数据
                setTimeout(() => {
                    /*次数+1*/
                    this.mount += 1;
                    this.startpage = this.mount*5
                    this.endpage = this.startpage + 5;
                    //获取总条数
                    this.$axios.get('http://localhost:1000/project-service/goods/getgoodsmount').then((response) => {
                        this.goodslength = response.data
                    }).catch((error) => {});
                    //获取当前序列往后5条数据
                    this.$axios.get('http://localhost:1000/project-service/goods/getgoodslimit?startpage='+this.startpage+'&endpage='+this.endpage).then((response) => {
                        //length = this.response.data.length;
                        for (var i = 0;i<response.data.length;i++){
                            this.goods.push(response.data[i])
                        }
                    }).catch((error) => {});
                    // 加载状态结束
                    this.loading = false;
                    // 数据全部加载完成
                      if (this.goods.length >= this.goodslength) {
                         this.finished = true;
                      }
                }, 500);
            },
        },
        //获取初始十条数据
        mounted() {
            this.$axios.get('http://localhost:1000/project-service/goods/getgoodslimit?startpage='+this.startpage+'&endpage='+this.endpage).then((response) => {
                this.goods = response.data
            }).catch((error) => {
            });
        }
    }
</script>
<style scoped>

</style>