<!--逛一逛-->
<template>
    <div>

        <van-nav-bar title="发布商品" left-arrow  @click-left="onClickLeft"/>
        <van-notice-bar :scrollable="false">
            注意：发布的商品内容需真实，请仔细填写所有项
        </van-notice-bar>
        <van-cell-group>
            <van-field
                    v-model="goodsname"
                    rows="1"
                    autosize
                    label="商品名称："
                    type="textarea"
                    placeholder="请输入商品名称"
            />
        </van-cell-group>
        <!--商品分类-->
        <van-field
                readonly
                clickable
                label="商品分类"
                :value="value"
                placeholder="选择类型"
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
        <!--/商品分类-->
        <!--商品价格-->
        <van-cell-group>
            <van-field
                    v-model="price"
                    rows="1"
                    autosize
                    label="价格"
                    type="textarea"
                    placeholder="请输入价格"
            />
        </van-cell-group>
        <van-cell-group>
            <van-field
                    v-model="goodsdesc"
                    rows="4"
                    autosize
                    label="商品描述："
                    type="textarea"
                    placeholder="请商品描述"
                    show-word-limit
            />
        </van-cell-group>
        <h5>上传商品图片（5张以内）</h5>
        <van-uploader v-model="fileList" :before-read="beforeRead"  :max-count="5"  multiple />
        <h5>商品发货地点</h5>
        <van-button type="primary" icon="location-o" @click="showClick" size="large">{{selectaddress}}</van-button>
        <van-popup
            v-model="show"
            position="bottom"
            :style="{ height: '40%' }"
        >
            <selectaddress @Cancel="sonClick" @Select="addressSon"></selectaddress>
        </van-popup>
        <!--发布-->
        <van-button type="danger" size="large">发布商品</van-button>

    </div>
</template>
<script>
    import apptab from './TabComponents/AppTab.vue'
    import apptop from './TabComponents/AppTop.vue'
    import selectaddress from './SellComponents/SelectAddress.vue'
    export default {
        data() {
            return {
                selectaddress:'选择发货地点',
                price:'',
                goodsname:'',
                goodsdesc:'',
                show:false,
                fileList: [],
                /*商品分类栏数据*/
                value: '',
                showPicker: false,
                columns: ['学习用品', '体育用品', '生活用户', '电脑', '手机','衣服','鞋子','家具电器','单车电车','手办']

            }
        },
        components:{
            apptab,
            apptop,
            selectaddress
        },
        methods:{
            onClickLeft:function () {
                /*返回上一页*/
                this.$router.go(-1)
            },
            // 返回布尔值
            beforeRead(file) {
                if (file.type !== 'image/jpeg') {
                   alert("请上传jpg格式图片")
                    return false;
                }
                return true;
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
            }

        }

    }
</script>
<style scoped>

</style>