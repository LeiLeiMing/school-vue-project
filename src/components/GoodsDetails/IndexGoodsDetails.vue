<template>
    <div>
        <router-link :to="url">
            <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow @click-left="fromOneGoods"/>
        </router-link>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                url:this.$route.path
            }
        },
        methods: {
            fromOneGoods() {
                this.$emit('toGoodsApp',false)
            }
        }
    }
</script>
<style scoped>

</style>