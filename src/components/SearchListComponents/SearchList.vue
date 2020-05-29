<!--搜索结果显示页-->
<template>
    <div>
        <van-sticky :offset-top="0">
            <van-nav-bar style="height: 45px" title="搜索结果" left-arrow  @click-left="onClickLeft"/>
        </van-sticky>
        <!--筛选栏-->
        <van-sticky :offset-top="45">
            <div>
                <van-dropdown-menu active-color="red" >
                    <van-dropdown-item v-model="value1" :options="option1" @change="oneclick(value1)" />
                    <van-dropdown-item v-model="value2" :options="option2" @change="twoclick(value2)" />
                    <van-dropdown-item v-model="value3" :options="option3" @change="threeclick(value3)" />
                </van-dropdown-menu>
            </div>
        </van-sticky>
        <div v-if="searchlist.length==0">
            <a>
                <van-divider>暂无该商品</van-divider>
            </a>
        </div>
        <div v-if="searchlist.length!=0">
            <!--商品卡片-->
            <router-link v-for="(g,index) in searchlist" :key="index" :to="'/index/onegoods/'+g.sellgoodsid">
                <van-card :tag=g.fresh :price=g.goodsprice :desc=g.goodsdesc :title=g.goodsname :thumb=g.allimageaddress[0].imageaddress />
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchList",
        data(){
            return{
                keyvalue:'',
                searchlist:[],
                value1: 'defaultprice',
                value2: 'defaultsell',
                value3: 'defaulttime',
                option1: [
                    { text: '默认价格', value: 'defaultprice' },
                    { text: '价格低到高', value: 'pricedesc' },
                    { text: '价格高到低', value: 'priceasc' }
                ],
                option2: [
                    { text: '默浏览数', value: 'defaultsell'},
                    { text: '浏览最多', value: 'selldesc'},
                ],
                option3: [
                    { text: '默认时间', value: 'defaulttime'},
                    { text: '时间降序', value: 'timedesc' },
                    { text: '时间升序', value: 'timeasc' },
                ],
            }
        },
        components:{
        },
        methods:{
            onClickLeft:function () {
                /*返回上一页*/
                this.$router.go(-1)
            },
            oneclick(value){
                this.value2= 'defaultsell'
                this.value3= 'defaulttime'
                this.$axios.get('http://localhost:1000/project-service/goods/searchbykey?keyvalue='+this.keyvalue
                    +'&condition1='+this.value1
                    +'&condition2='+this.value2
                    +'&condition3='+this.value3).then((response) => {
                    this.searchlist = response.data
                    console.log(this.searchlist)
                }).catch((error) => {
                });
            },
            twoclick(value){
                this.value1 = 'defaultprice'
                this.value3 = 'defaulttime'
                this.$axios.get('http://localhost:1000/project-service/goods/searchbykey?keyvalue='+this.keyvalue
                    +'&condition1='+this.value1
                    +'&condition2='+this.value2
                    +'&condition3='+this.value3).then((response) => {
                    this.searchlist = response.data
                    console.log(this.searchlist)
                }).catch((error) => {
                });
            },
            threeclick(value){
                this.value1 = 'defaultprice'
                this.value2 = 'defaultsell'
                this.$axios.get('http://localhost:1000/project-service/goods/searchbykey?keyvalue=' +this.keyvalue
                    +'&condition1='+this.value1
                    +'&condition2='+this.value2
                    +'&condition3='+this.value3).then((response) => {
                    this.searchlist = response.data
                    console.log(this.searchlist)
                }).catch((error) => {
                });
            },
        },
        mounted() {
            /*搜索的关键字*/
            this.keyvalue = this.$route.params.keyvalue;
            this.$axios.get('http://localhost:1000/project-service/goods/searchbykey?keyvalue='+this.keyvalue
                +'&condition1='+this.value1
                +'&condition2='+this.value2
                +'&condition3='+this.value3).then((response) => {
                this.searchlist = response.data;
            }).catch((error) => {

            });
        }
    }
</script>

<style scoped>

</style>