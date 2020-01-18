<template>
    <div>
        <van-card
                v-for="(g,index) in goods"
                :key="index"
                :price=g.price
                :desc=g.desc
                :title=g.title
                :thumb=g.url
                origin-price="10.00"
        />
    </div>
</template>
<script>
    export default {
        data(){
            return{
                goods:[
                    {title:"祖传笔记本电脑",desc:"来不及解释了,快上车",price:200,url:"https://imgsa.baidu.com/forum/w%3D580/sign=8620714384d4b31cf03c94b3b7d7276f/75a1beb7d0a20cf4fd6094df79094b36adaf99e5.jpg"},
                    {title:"祖传笔记本电脑",desc:"来不及解释了,快上车",price:200,url:"https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=bf1e57c8be1c8701c2bbbab44616f54a/2fdda3cc7cd98d109084e51d2c3fb80e7bec904e.jpg"},
                    {title:"祖传笔记本电脑",desc:"来不及解释了,快上车",price:200,url:"https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=5fb1eb5465061d957d46303e43cf6dec/d009b3de9c82d1583a0fcbdd8b0a19d8bd3e42c9.jpg"},
                    {title:"祖传笔记本电脑",desc:"来不及解释了,快上车",price:200,url:"https://imgsa.baidu.com/forum/w%3D580/sign=8620714384d4b31cf03c94b3b7d7276f/75a1beb7d0a20cf4fd6094df79094b36adaf99e5.jpg"},
                    {title:"祖传笔记本电脑",desc:"来不及解释了,快上车",price:200,url:"https://imgsa.baidu.com/forum/w%3D580/sign=8620714384d4b31cf03c94b3b7d7276f/75a1beb7d0a20cf4fd6094df79094b36adaf99e5.jpg"},
                    {title:"祖传笔记本电脑",desc:"来不及解释了,快上车",price:200,url:"https://imgsa.baidu.com/forum/w%3D580/sign=8620714384d4b31cf03c94b3b7d7276f/75a1beb7d0a20cf4fd6094df79094b36adaf99e5.jpg"},
                ]
            }
        }
    }
</script>
<style scoped>

</style>