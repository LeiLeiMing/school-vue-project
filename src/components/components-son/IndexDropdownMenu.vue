<!--全部商品页面的筛选栏-->
<template>
    <div>
        <van-dropdown-menu active-color="red" >
            <van-dropdown-item v-model="value1" :options="option1" @change="Click" />
            <van-dropdown-item v-model="value2" :options="option2" />
            <van-dropdown-item v-model="value3" :options="option3" />
        </van-dropdown-menu>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                value1: 0,
                value2: 'a',
                value3: 'A',
                option1: [
                    { text: '综合', value: 0 },
                    { text: '价格降序', value: 1 },
                    { text: '价格升序', value: 2 }
                ],
                option2: [
                    { text: '默认销量', value: 'a'},
                    { text: '销量最多', value: 'b' },
                ],
                option3: [
                    { text: '默认时间', value: 'A'},
                    { text: '时间降序', value: 'B' },
                ],
            }
        },
        methods:{
            Click(){
                console.log("ok")
            }
        }
    }
</script>
<style>

</style>