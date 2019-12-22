<!--个人中心页面-->
<template>
    <div>
        <!--展示路由转跳的页面-->
        <!--<router-view></router-view>-->
        <minemain></minemain>
        <apptab></apptab>
    </div>
</template>
<script>
    import apptab from '../components/TabComponents/AppTab.vue'
    import minemain from './MineComponents/MineMainComponents.vue'
    export default {
        components:{
            apptab,
            minemain
        }
    }
</script>
<style>

</style>