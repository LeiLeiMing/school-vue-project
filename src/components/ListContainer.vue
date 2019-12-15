<!--全部商品页面-->
<template>
    <div>
        <van-sticky :offset-top="0">
            <van-search  placeholder="请输入搜索关键词" />
        </van-sticky>
        <!--筛选栏-->
        <van-sticky :offset-top="50">
            <dropdownmenu ></dropdownmenu>
        </van-sticky>
        <div>
            <commoditydetails></commoditydetails>
        </div>
        <!--底部tab栏-->
        <apptab></apptab>
        <br><br><br>
    </div>
</template>
<script>
    /*下拉菜单*/
    import dropdownmenu from './components-son/IndexDropdownMenu.vue'
    import apptab from '../components/TabComponents/AppTab.vue'
    /*商品列表*/
    import commoditydetails from './components-son/Commoditydetails.vue'
    export default {
        components:{
            dropdownmenu,
            commoditydetails,
            apptab
        }
    }
</script>
<style scoped>

</style>
