<template>
    <div>
        <van-sticky :offset-top="0">
            <van-nav-bar style="height: 45px" title="收货地址" left-arrow  @click-left="onClickLeft"/>
        </van-sticky>
        <div v-if="this.list.length != 0">
            <van-address-list v-model="chosenAddressId" :list="list" add-button-text="修改收货地址" @add="onChange"/>
        </div>
        <div v-if="this.list.length == 0">
            <van-divider>暂无收货地址</van-divider>
            <van-button type="danger" size="large"  to="/buygoods/selectaddress">添加收货地址</van-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserAddress",
        data(){
            return{
                chosenAddressId: '1',
                id:"",
                name:"",
                tel:"",
                address:"",
                list: [],
            }
        },
        methods:{
            onClickLeft:function () {
                /*返回上一页*/
                this.$router.go(-1)
            },
            onChange(){
                this.$router.push({path:'/buygoods/changeaddress'})
            }
        },
        mounted() { //获取当前用户下的收货地址
            this.$axios.get('http://localhost:1000/project-service/goods/getaddress?token=' + this.$cookies.get("AUTH_TOKEN")).then((response) => {
                this.id = response.data[0].selectid;
                this.name=response.data[0].username;
                this.tel = response.data[0].usertel;
                this.address = response.data[0].useraddress+response.data[0].userdateliaddress;
                var l =  {id: this.id, name: this.name, tel: this.tel, address: this.address};
                this.list.push(l)
            }).catch((error) => {
            });

        }
    }
</script>

<style scoped>

</style>