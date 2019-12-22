<template>
    <div>
        <van-grid :border="false" :column-num="1">
            <van-grid-item v-for="(image,index) in imges" :key="index">
                <img class="back" v-lazy="image.url" />
            </van-grid-item>
        </van-grid>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                imges:[
                    {url:"https://img.alicdn.com/imgextra/i2/1786613187/O1CN01zG2htA1ZPgoxgzjWf_!!1786613187.jpg"},
                    {url:"https://img.alicdn.com/imgextra/i1/1786613187/O1CN01rZKLFS1ZPgou5MqRH_!!1786613187.jpg"},
                    {url:"https://img.alicdn.com/imgextra/i4/1786613187/O1CN01c3Ng231ZPgoun7Tvl_!!1786613187.jpg"},
                    {url:"https://img.alicdn.com/imgextra/i4/1786613187/O1CN01pdlwhD1ZPgpdJSgIK_!!1786613187.jpg"},
                    {url:"https://img.alicdn.com/imgextra/i2/1786613187/O1CN01IVFkNn1ZPgoeY5oHT_!!1786613187.jpg"},
                ]
            }
        }
    }

</script>
<style scoped>
    .back {
        height: 400px;
        width: 100%;
    }
</style>