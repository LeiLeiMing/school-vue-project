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
                value1: 0,
                value2: 'a',
                value3: 'A',
                option1: [
                    { text: '综合', value: 0 },
                    { text: '价格降序', value: 1 },
                    { text: '价格升序', value: 2 }
                ],
                option2: [
                    { text: '默认销量', value: 'a'},
                    { text: '销量最多', value: 'b' },
                ],
                option3: [
                    { text: '默认售卖时间', value: 'A'},
                    { text: '时间降序', value: 'B' },
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
                //条件筛选
                this.$axios.get('http://localhost:1000/project-service/goods/searchbykey?condition1='+value).then((response) => {
                    this.searchlist = response.data;
                    console.log(this.searchlist)
                    console.log(this.searchlist[0])
                }).catch((error) => {

                });
            },
            twoclick(value){
                console.log(value)
            },
            threeclick(value){
                console.log(value)
            }
        },
        mounted() {
            /*搜索的关键字*/
            this.keyvalue = this.$route.params.keyvalue;
            this.$axios.get('http://localhost:1000/project-service/goods/searchbykey?keyvalue='+this.keyvalue).then((response) => {
                this.searchlist = response.data;
            }).catch((error) => {

            });
        }
    }
</script>

<style scoped>

</style>