<!--逛一逛-->
<template>
    <div>

        <van-nav-bar title="发布商品" left-arrow  @click-left="onClickLeft"/>
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
        <van-button type="primary" icon="location-o" @click="showClick">选择地址</van-button>
        <van-popup
            v-model="show"
            position="bottom"
            :style="{ height: '40%' }"
        >
            <selectaddress @Cancel="sonClick"></selectaddress>
        </van-popup>


    </div>
</template>
<script>
    import apptab from './TabComponents/AppTab.vue'
    import apptop from './TabComponents/AppTop.vue'
    import selectaddress from './SellComponents/SelectAddress.vue'
    export default {
        data() {
            return {
                goodsname:'',
                goodsdesc:'',
                show:false,
                fileList: []
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
                    alert('请上传 jpg 格式图片');
                    return false;
                }
                return true;
            },
            showClick(){
                this.show = true
            },
            sonClick(data){
                this.show = data;
            }

        }

    }
</script>
<style scoped>

</style>