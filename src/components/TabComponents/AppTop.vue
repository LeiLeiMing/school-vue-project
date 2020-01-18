<!--搜索栏-->
<template>
    <div>
        <van-sticky :offset-top="0">
            <van-search  placeholder="请输入搜索关键词"  @keyup="goodssearch(key) " v-model="key"/>
        </van-sticky>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                key:'',
                searchgoods:[
                    {name:"短袖"},
                    {name:"手机"},
                    {name:"羽绒服"},
                    {name:"鞋子"},
                    {name:"家电"},
                    {name:"美的"},
                    {name:"格力"},
                ]
            }
        },
        methods:{
            goodssearch:function (key) {
                console.log(key)
                var c = [];
                for (var i = 0; i < this.searchgoods.length; i++) {
                    if (this.searchgoods[i].name == key) {
                        c.push(this.searchgoods[i])
                    }
                }
                console.log(c)
                //this.$emit('searchGoods',c)
            }
        }
    }
</script>
<style scoped>

</style>