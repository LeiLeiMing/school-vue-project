<!--全部商品页面-->
<template>
    <div>
        <toptab></toptab>
        <!--筛选栏-->
        <van-sticky :offset-top="50">
            <div>
                <van-dropdown-menu active-color="red" >
                    <van-dropdown-item v-model="value1" :options="option1" @change="oneclick(value1)" />
                    <van-dropdown-item v-model="value2" :options="option2" @change="twoclick(value2)" />
                    <van-dropdown-item v-model="value3" :options="option3" @change="threeclick(value3)" />
                </van-dropdown-menu>
            </div>
        </van-sticky>
        <div style="margin-top: 45px">
        <!--商品列表-->
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
        </div>
        <!--底部tab栏-->
        <apptab></apptab>
        <br><br><br>
    </div>
</template>
<script>
    /*下拉菜单*/
    import apptab from '../components/TabComponents/AppTab.vue'
    import toptab from '../components/TabComponents/AppTop.vue'
    export default {
        data(){
            return{
                /*筛选栏数据*/
                value1: 'defaultprice',
                value2: 'defaultsell',
                value3: 'defaulttime',
                option1: [
                    { text: '默认价格', value: 'defaultprice' },
                    { text: '价格高到低', value: 'pricedesc' },
                    { text: '价格低到高', value: 'priceasc' }
                ],
                option2: [
                    { text: '默认浏览数', value: 'defaultsell'},
                    { text: '浏览最多', value: 'selldesc'},
                ],
                option3: [
                    { text: '默认时间', value: 'defaulttime'},
                    { text: '时间降序', value: 'timedesc' },
                    { text: '时间升序', value: 'timeasc' },
                ],
                /*商品列表数据*/
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
        components:{
            apptab,
            toptab
        },
        methods:{
            oneclick(value){
                    this.value2= 'defaultsell'
                    this.value3= 'defaulttime'
                    this.$axios.get('http://localhost:1000/project-service/goods/getgoodslimit?startpage='
                        + this.startpage+'&endpage='+this.endpage
                        +'&condition1='+this.value1
                        +'&condition2='+this.value2
                        +'&condition3='+this.value3).then((response) => {
                        this.goods = response.data
                        console.log(this.goods)
                    }).catch((error) => {
                    });
            },
            twoclick(value){
                this.value1 = 'defaultprice'
                this.value3 = 'defaulttime'
                this.$axios.get('http://localhost:1000/project-service/goods/getgoodslimit?startpage='
                    + this.startpage+'&endpage='+this.endpage
                    +'&condition1='+this.value1
                    +'&condition2='+this.value2
                    +'&condition3='+this.value3).then((response) => {
                    this.goods = response.data
                    console.log(this.goods)
                }).catch((error) => {
                });
            },
            threeclick(value){
                this.value1 = 'defaultprice'
                this.value2 = 'defaultsell'
                this.$axios.get('http://localhost:1000/project-service/goods/getgoodslimit?startpage='
                    + this.startpage+'&endpage='+this.endpage
                    +'&condition1='+this.value1
                    +'&condition2='+this.value2
                    +'&condition3='+this.value3).then((response) => {
                    this.goods = response.data
                    console.log(this.goods)
                }).catch((error) => {
                });
            },
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
                    this.$axios.get('http://localhost:1000/project-service/goods/getgoodslimit?startpage='
                        + this.startpage+'&endpage='+this.endpage
                        +'&condition1='+this.value1
                        +'&condition2='+this.value2
                        +'&condition3='+this.value3
                    ).then((response) => {
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
        //获取初始5条数据
        mounted() {
            this.$axios.get('http://localhost:1000/project-service/goods/getgoodslimit?startpage='
                + this.startpage+'&endpage='+this.endpage
                +'&condition1='+this.value1
                +'&condition2='+this.value2
                +'&condition3='+this.value3).then((response) => {
                this.goods = response.data
            }).catch((error) => {
            });
        }
    }
</script>
<style scoped>

</style>
