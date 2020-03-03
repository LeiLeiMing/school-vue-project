<!--已上架的商品-->
<template>
    <div>
        <!--商品卡片-->
        <router-link v-for="(g,index) in groundinggoods" :key="index" :to="'/list/all/'+g.sellgoodsid">
            <van-card :price=g.goodsprice :desc=g.goodsdesc :title=g.goodsname :num=g.goodsmount :thumb=g.imageaddress.imageaddress />
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "GroundingGoods",
        data(){
            return{
                groundinggoods:[]
            }
        },
        //查询当前用户下的已经出售的商品
        mounted() {
            //查询
            this.$axios.get('http://localhost:1000/project-service/goods/findsellgoods?authtoken='+this.$cookies.get("AUTH_TOKEN")).then((response) => {
                this.groundinggoods = response.data;
            }).catch((error) => {
                if (error.response.status == 403){
                    this.$toast({
                        message:"登录信息失效，请重新登录~"
                    })
                    this.$router.push({path:'/mine'})
                }else{
                    this.$toast({
                        message:"服务器出小差了~"
                    })
                }
            });
        }
    }
</script>

<style scoped>

</style>