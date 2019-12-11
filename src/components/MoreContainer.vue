<!--逛一逛-->
<template>
    <div>
        <apptop></apptop>
        <h1>逛一逛</h1>
        <apptab></apptab>
    </div>
</template>
<script>
    import apptab from './TabComponents/AppTab.vue'
    import apptop from './TabComponents/AppTop.vue'
    export default {
        components:{
            apptab,
            apptop
        }
    }
</script>
<style scoped>

</style>