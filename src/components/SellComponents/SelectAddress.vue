<template>
    <div>
        <van-area :area-list="areaList"  @cancel="fromFather" @confirm="select"/>
    </div>
</template>
<script>
    /*导入中国地区的Area地区列表对象*/
    import area from '../Area.js'
    export default {
        data(){
            return{
                show:true,
                areaList:area,
            }
        },
        methods:{
            onClickLeft:function () {
                /*返回上一页*/
                this.$router.go(-1)
            },
           fromFather(){
                this.show=false
                this.$emit('Cancel',this.show)
            },
            /*点击确定时，捕获选择的区域对象（data就是回调的参数）*/
            select(data){
                this.show=false;
                this.$emit('Cancel',this.show);
                console.log(data[0])
            }
        }
    }
</script>
<style scoped>

</style>