<template>
    <div>
        <van-nav-bar title="收货地址设置" left-arrow  @click-left="onClickLeft" @click-right="editaddress"/>
        <van-cell-group>
            <van-field v-model="username" rows="1" autosize label="收货人名称：" type="textarea" placeholder="请输入收货人名称"/>
            <van-field v-model="tel" rows="1" autosize label="收货人电话：" type="number" placeholder="请输入收货人电话"/>
        </van-cell-group>
        <!--地址选择-->
        <van-field v-model="selectaddress" rows="1" autosize label="选择地点：" type="textarea" placeholder="请选择详细地点" @click="showClick"/>
        <!--地址弹出框-->
        <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
            <selectaddress @Cancel="sonClick" @Select="addressSon" />
        </van-popup>
        <!--详细地点和邮编-->
        <van-cell-group>
            <van-field v-model="deatiladdress" rows="1" autosize label="详细地点：" type="textarea" placeholder="请输入详细地点"/>
        </van-cell-group>

        <!--修改按钮-->
        <van-button type="danger" size="large" @click="changeaddress">确定</van-button>
    </div>
</template>

<script>
    import selectaddress from '../SellComponents/SelectAddress.vue'
    export default {
        name: "ReceivingAddress",
        data() {
            return {
                show:false,
                username:"",
                tel:"",
                selectaddress:"",
                deatiladdress:"",

            }
        },
        components:{
            selectaddress
        },
        methods: {
            onClickLeft:function () {
                /*返回上一页*/
                this.$router.go(-1)
            },
            showClick(){
                this.show = true
            },
            sonClick(data){
                this.show = data;
            },
            onConfirm(value) {
                this.value = value;
                this.showPicker = false;
            },
            //接收来自子组件的地址数据:data为地址对象，show为关闭选择栏
            addressSon(data,show){
                this.show = show;
                this.selectaddress = data[0].name+data[1].name+data[2].name;
            },
            /*修改收货地址*/
            changeaddress:function () {
                this.$axios.post('http://localhost:1000/project-service/goods/saveaddress?token=' + this.$cookies.get("AUTH_TOKEN")
                +'&selectid='+1
                +'&username='+this.username
                +'&usertel='+this.tel
                +'&useraddress='+this.selectaddress
                +'&userdateliaddress='+this.deatiladdress).then((response) => {
                    this.$toast({
                        message:"添加成功"
                    })
                    this.$router.push({path:'/mine/useraddress'})
                }).catch((error) => {
                    this.$toast({
                        message:"添加失败，请稍后再试"
                    })
                });
            }
        }
    }
</script>

<style scoped>

</style>