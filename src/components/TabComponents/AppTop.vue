<!--搜索栏-->
<template>
    <div>
        <!--吸顶-->
        <van-sticky :offset-top="0">
            <div style="width: 33%;float:left;height: 76px;background-color: white">
                <div style="margin-top: 10px;">
                    <router-link to="/map/selectaddress">
                        <van-button round  plain icon="location" type="default">选择校园</van-button>
                    </router-link>
                </div>
            </div>
            <div style="width: 67%;float:right;height: 60px;">
                <van-field placeholder="输入要搜索的二手物品名称" v-model="keyvalue" v-on:keyup.enter="searchbykey(keyvalue)"/>
            </div>
        </van-sticky>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                keyvalue:'',
                key:'',
                searchgoods:[
                ]
            }
        },
        methods:{
            searchbykey:function (keyvalue) {
                this.$router.push({
                    path: '/search/'+keyvalue,
                })
               //发送搜索请求

            }
        }
    }
</script>
<style scoped>

</style>