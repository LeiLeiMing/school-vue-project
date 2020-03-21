<template>
    <div>
        <van-card
                v-for="(g,index) in goods"
                :key="index"
                :price=g.goodsprice
                :desc=g.goodsdesc
                :title=g.goodsname
                :thumb=g.allimageaddress[0].imageaddress
        />
    </div>
</template>
<script>
    export default {
        props:['type'],
        data(){
            return{
                goods:[]
            }
        },
        mounted() {
            this.$axios.get('http://localhost:1000/project-service/goods/typegoods?type='+this.type).then((response) => {
               this.goods = response.data;
            }).catch((error) => {
                this.$toast({
                    message:"服务异常~"
                })
            });
        }
    }
</script>
<style scoped>

</style>