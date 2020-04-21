<!--发货-->
<template>
    <div>
        <van-nav-bar title="订单详情" left-arrow  @click-left="onClickLeft"/>
        <!--加载栏-->
        <van-overlay :show="loadingshow" >
            <div class="wrapper" @click.stop>
                <div class="block" >
                    <div style="margin-top: 20px;margin-left: 40px">
                        <div style="margin-left: 8px">
                            <van-loading type="spinner" color="#1989fa" />
                        </div>
                        <br>
                        处理中...
                    </div>
                </div>
            </div>
        </van-overlay>
        <van-cell-group>
            <van-field
                    v-model=ordergood.orderid
                    rows="1"
                    autosize
                    label="所属订单编号："
                    type="textarea"
                    readonly
            />
            <van-field
                    v-model=ordergood.goodsPojo.goodsname
                    rows="1"
                    autosize
                    label="商品名称："
                    type="textarea"
                    readonly
            />
            <van-field
                    v-model=ordergood.goodsPojo.goodsprice
                    rows="1"
                    autosize
                    label="订单价格："
                    type="textarea"
                    readonly
            />
            <van-field
                    v-model=ordergood.goodsmount
                    rows="1"
                    autosize
                    label="订单数量："
                    type="textarea"
                    readonly
            />
            <van-field
                    v-model=ordergood.ordertime
                    rows="1"
                    autosize
                    label="订单生成时间："
                    type="textarea"
                    readonly
            />
            <van-field
                    v-model=ordergood.userAddressPojo.username
                    rows="1"
                    autosize
                    label="买家："
                    type="textarea"
                    readonly
            />
            <van-field
                    v-model=ordergood.userAddressPojo.usertel
                    rows="1"
                    autosize
                    label="买家手机号："
                    type="textarea"
                    readonly
            />
            <van-field
                    v-model=ordergood.orderleavemessage
                    rows="1"
                    autosize
                    label="买家留言："
                    type="textarea"
                    readonly
            />
            <van-field
                    v-model=ordergood.userAddressPojo.useraddress+ordergood.userAddressPojo.userdateliaddress
                    rows="1"
                    autosize
                    label="收货地址："
                    type="textarea"
                    readonly
            />

            <van-field
                    readonly
                    clickable
                    label="快递类型:"
                    :value="value"
                    placeholder="选择快递类型"
                    @click="showPicker = true"
            />
            <van-popup v-model="showPicker" position="bottom">
                <van-picker
                        show-toolbar
                        :columns="columns"
                        @cancel="showPicker = false"
                        @confirm="onConfirm"
                />
            </van-popup>
        </van-cell-group>
        <!--发布-->
        <van-button type="danger" size="large" @click="goodfahuo" loading-text="发布中...">发货</van-button>
    </div>
</template>

<script>
    export default {
        name: "fahuo",
        data(){
            return{
                ordergood:'',
                loadingshow:false,
                selectFahuoWay:'选择快递',
                columns:[
                  '顺丰快递','中通快递','邮政快递','圆通快递'
                ],
                value: '',
                showPicker: false,
            }
        },
        methods:{
            onClickLeft:function () {
                /*返回上一页*/
                this.$router.go(-1)
            },
            onConfirm(value) {
                this.value = value;
                this.showPicker = false;
            },
            goodfahuo(){
                this.loadingshow = true;
                this.$axios.post('http://localhost:1000/transaction-service/cart/shippedorder?goodsid='
                    +this.ordergood.goodsPojo.sellgoodsid
                    +'&orderid='+this.ordergood.orderid
                    +'&sendtype='+this.value
                    ).then((response) => {
                    this.$toast({
                        message:"处理成功，请及时递送货物"
                    })
                    this.loadingshow = false;
                    /*返回上一页*/
                    this.$router.go(-1)
                }).catch((error) => {
                    this.$toast({
                        message:"服务器出小差啦~~"
                    })
                    this.loadingshow = false;
                });
            },
        },
        //获取当前商品的订单信息
        mounted() {
            var id = this.$route.params.id;
            var orderid = this.$route.params.orderid;
            this.$axios.get('http://localhost:1000/transaction-service/cart/getordergoodbyid?id='+id+'&orderid='+orderid).then((response) => {
                this.ordergood = response.data;
                console.log(this.ordergood)
            }).catch((error) => {
                this.$toast({
                    message:"服务器出小差啦~~"
                })
            });
        }
    }
</script>

<style scoped>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .block {
        width: 120px;
        height: 120px;
        background-color: #fff;
    }
</style>