<!--全部商品页面-->
<template>
    <div>
        <toptab></toptab>
        <!--筛选栏-->
        <van-sticky :offset-top="50">
            <dropdownmenu></dropdownmenu>
        </van-sticky>
        <div style="margin-top: 45px">
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
    import toptab from '../components/TabComponents/AppTop.vue'
    /*商品列表*/
    import commoditydetails from './components-son/Commoditydetails.vue'
    export default {
        components:{
            dropdownmenu,
            commoditydetails,
            apptab,
            toptab
        }
    }
</script>
<style scoped>

</style>
