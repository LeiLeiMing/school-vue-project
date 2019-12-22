<template>
    <div>
        <div style="height: 150px" v-for="(commet,index) in comments" :key="index">
            <div class="left">
                <div>
                    <van-image
                            width="60"
                            height="60"
                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                    />
                </div>
                <div>
                    <h6>献给最美的你</h6>
                    <h6>2019-12-22</h6>
                </div>
            </div>
            <div class="right">
                <van-field
                        v-model="commet.comment"
                        rows="2"
                        autosize
                        type="textarea"
                        show-word-limit
                />
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                message:"好好好好好啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊好好好好好啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊好好好好好啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊好好好好好啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊好好好好好啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊好好好好好啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊好好好好好啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
                comments:[
                    {name:"坛子",comment:"这个衣服不错，面料不错，穿着合身，不起毛，值得入手"},
                    {name:"坛子",comment:"这个衣服不错，面料不错，穿着合身，不起毛，值得入手"},
                    {name:"坛子",comment:"这个衣服不错，面料不错，穿着合身，不起毛，值得入手"},
                    {name:"坛子",comment:"这个衣服不错，面料不错，穿着合身，不起毛，值得入手"},
                ]
            }
        }
    }
</script>
<style scoped>
    .left{
        width: 20%;
        float: left;
        margin-top: 10px
    }
    .right{
        width: 80%;
        float: left;
    }
</style>