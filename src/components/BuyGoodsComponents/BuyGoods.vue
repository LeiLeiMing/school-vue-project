<!--下单页面-->
<template>
    <div>
        <van-nav-bar title="确认订单" left-arrow  @click-left="onClickLeft"/>
        <!--提交订单顶部栏-->
        <van-sticky>
            <div style="height: 50px;background-color: white;">
                <router-link to="/buy">
                    <van-button type="danger" round style="float: right">提交订单</van-button>
                </router-link>
                <span style="float:right;text-align: center;line-height: 50px;">
                        合计：<span style="color: red">￥{{price*count}}</span>
                </span>
            </div>
        </van-sticky>
        <van-card
                :num=count
                :price=price
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        />
        <van-cell-group>
            <!--步进选择-->
            <van-cell title="购买数量：">
                <button @click="reduce(index)">-</button>
                <input style="width: 40px;height: 38px;text-align: center" readonly ="readonly" :value=count />
                <button @click="add(index)">+</button>
            </van-cell>
            <van-field v-model="goodsname" rows="1" autosize label="订单备注：" type="textarea" placeholder="请输入订单的备注"/>
        </van-cell-group>
        <!--修改收货地址-->
        <van-address-list v-model="chosenAddressId" :list="list" add-button-text="修改收货地址" @add="onChange"/>


    </div>
</template>
<script>
    export default {
        data(){
            return{
                price:10,
                count:1,
                chosenAddressId: '1',
                list: [
                    {
                        id: '1',
                        name: '张三',
                        tel: '13000000000',
                        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                    },
                ],
            }
        },
        methods:{
            onClickLeft:function () {
                /*返回上一页*/
                this.$router.go(-1)
            },
            onChange() {
                this.$router.push({path:'/buygoods/selectaddress'})
            },
            reduce: function (index) {
                if (this.count == 0) {
                    return;
                }
                this.count--;
            },
            add: function (index) {
                this.count++;
            },
        }
    }
</script>
<style scoped>

</style>