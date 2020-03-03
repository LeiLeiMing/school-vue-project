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
                    type="number"
                    placeholder="请输入价格"
            />
        </van-cell-group>
        <van-cell-group>
                <van-field
                        v-model="mount"
                        rows="1"
                        autosize
                        label="数量"
                        type="number"
                        placeholder="请输入数量"
                />
        </van-cell-group>
        <van-cell-group>
            <van-cell title="是否可议价">
                <van-switch v-model="bargaining" />
            </van-cell>
        </van-cell-group>
        <van-cell-group>
            <van-cell title="是否包邮">
                <van-switch v-model="joyou" />
            </van-cell>
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
        <h5>上传商品展示图片（3张以内）</h5>
        <van-uploader v-model="indexfileList" :before-read="beforeRead"  :max-count="3"  multiple />
        <h5>上传商品详情图片（3张以内）</h5>
        <van-uploader v-model="fileList"  :before-read="beforeRead"  :max-count="3"  multiple />
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
        <van-button type="danger" size="large" @click="addgoods" loading-text="发布中...">发布商品</van-button>

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
                price:'', //价格
                mount:'', //数量
                goodsname:'', //商品名称
                goodsdesc:'', //商品描述
                show:false,
                fileList: [], //商品详情图片
                indexfileList:[], //首页商品图片
                filecode:[],
                /*商品分类栏数据*/
                value: '',  //商品分类
                showPicker: false,
                columns: ['学习用品', '体育用品', '生活用户', '电脑', '手机','衣服','鞋子','家具电器','单车电车','手办'],
                /*是否包邮*/
                joyou: true,
                /*是否可议价*/
                bargaining: true,
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
                    this.$toast({
                        message:"请上传.jpg或.png格式的图片"
                    })
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
            },
            checkvvalue:function(){
                //校验内容
                if (this.goodsname === ''){
                    this.$toast({
                        message:"请填写商品名称"
                    });
                    return;
                }
                if (this.value === ''){
                    this.$toast({
                        message:"请选择分类"
                    });
                    return;
                }
                if (this.price === ''){
                    this.$toast({
                        message:"请输入价格"
                    });
                    return;
                }
                if (!new RegExp('^\\d+$').test(this.price)||this.price === '0'){
                    this.$toast({
                        message:"价格不能为负或0"
                    });
                    return;
                }
                if (this.mount === ''){
                    this.$toast({
                        message:"请商品数量"
                    });
                    return;
                }
                //非负正整数正则校验
                if (!new RegExp('^\\+?[1-9][0-9]*$').test(this.mount)){
                    this.$toast({
                        message:"商品数量输入有误"
                    });
                    return;
                }
                if (this.goodsdesc === ''){
                    this.$toast({
                        message:"请商品描述"
                    });
                    return;
                }
                if (this.fileList.length == 0){
                    this.$toast({
                        message:"请上传商品详细图片"
                    });
                    return;
                }
                if (this.indexfileList.length == 0){
                    this.$toast({
                        message:"请上传首页展示图片"
                    });
                    return;
                }
                if (this.selectaddress == '选择发货地点'){
                    this.$toast({
                        message:"请选择发货地点"
                    });
                    return;
                }

                if(this.joyou){
                    this.joyou = "1"
                }else{
                    this.joyou = "0"
                }
                if (this.bargaining){
                    this.bargaining = "1"
                }else{
                    this.bargaining = "0"
                }
                this.$axios.get('http://localhost:1000/auth-service/auth/userinfo?token='+this.$cookies.get("AUTH_TOKEN")).then((response) => {
                    if (response != null) {
                    }else{
                        this.$toast({
                            message:"请先登录哦~~"
                        });
                        return;
                    }
                })
            },
            //发布商品
            addgoods:function () {
                //根据判断用户是否登录
                var authtoken = this.$cookies.get("AUTH_TOKEN");
                if (authtoken == null || authtoken === ''){
                    this.$toast({
                        message:"您未登录，请登录后再发布哦~~"
                    })
                    return;
                }
                this.checkvvalue();
                //商品详情图
                const  fileList = new FormData();
                for(var i = 0;i<this.fileList.length;i++){
                    const  file = this.fileList[i].file
                    fileList.append('files', file);
                }
                const  indexfileList = new FormData();
                for(var i = 0;i<this.indexfileList.length;i++){
                    const  indexfile = this.indexfileList[i].file
                    indexfileList.append('files', indexfile);
                }
                this.$toast({
                    message:"发布中..."
                });
                this.$axios.post('http://localhost:9090/goods/sell?'
                    + 'goodsname='+this.goodsname
                    + '&goodstype='+this.value
                    + '&goodsprice='+this.price
                    + '&goodsmount='+this.mount
                    + '&nogotable='+this.bargaining
                    + '&baoyou='+this.joyou
                    + '&goodsdesc='+this.goodsdesc
                    + '&goodsaddress='+this.selectaddress
                    +'&authtoken='+authtoken,
                    indexfileList,
                    fileList
                ).then((response) => {
                        this.$toast({
                            message:"发布成功,可在卖家功能的全部商品处查看哦"
                        });
                        this.$router.push({path:'/mine'})
                }).catch((error) => {
                    console.log(error)
                    if (error.response.status == 403){
                        this.$toast({
                            message:"您未登录，请登录后发布哦~~"
                        })
                    } else{
                        this.$toast({
                            message:"服务器出小差了，发布失败，请稍后再试~~"
                        })
                    }
                    return;
                });
            },

        },

        mounted() {
            //判断用户是否登录
            if (this.$cookies.get("AUTH_TOKEN") == null){
                this.$toast({
                    message:"您未登录，请登录后发布哦~~"
                })
                return;
            }

        }
    }
</script>
<style scoped>
    .custom-button {
        width: 26px;
        color: #fff;
        font-size: 10px;
        line-height: 18px;
        text-align: center;
        background-color: #ee0a24;
        border-radius: 100px;
    }
</style>