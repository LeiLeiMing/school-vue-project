<template>
    <div>
        <van-sticky :offset-top="0">
            <van-search  placeholder="请输入搜索关键词" />
        </van-sticky>
        <!--筛选栏固定在顶部-->
        <van-sticky :offset-top="50">
            <dropdownmenu></dropdownmenu>
        </van-sticky>
        <div>
            <commoditydetails></commoditydetails>
        </div>
        <br><br><br>
    </div>
</template>
<script>
    import toptab from './TabComponents/AppTab.vue'
    /*下拉菜单*/
    import dropdownmenu from './components-son/IndexDropdownMenu.vue'

    /*商品列表*/
    import commoditydetails from './components-son/Commoditydetails.vue'
    export default {
        components:{
            dropdownmenu,
            commoditydetails,
            toptab
        }
    }
</script>
<style scoped>

</style>
