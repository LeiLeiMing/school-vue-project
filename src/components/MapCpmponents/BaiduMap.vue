<template>
    <div>
        <van-nav-bar title="选择地点" left-arrow  @click-left="onClickLeft"/>
        <div id="map" style="width:100%;height:300px;"></div>
       <div>
           <input type="text" v-model="city" placeholder="输入要定位的城市"/>
           <van-button type="primary" size="large" @click="selectCity">查询城市</van-button>
           <van-button type="info" size="large">确定</van-button>
       </div>

    </div>
</template>

<script>
    export default {
       data(){
            return{
                map:{
                    center: {lng: 116.404, lat: 39.915},
                    zoom: 11,
                    show: true,
                    dragging: true
                },
                city:"",
                a:""
            }
       },
        methods: {
           /*根据地名定位*/
           selectCity(){
               var map = new BMap.Map("map");
               map.centerAndZoom(new BMap.Point(110.15167632,22.64397361), 11);  // 初始化地图,设置中心点坐标和地图级别
               //添加地图类型控件
               map.addControl(new BMap.MapTypeControl({
                   mapTypes:[
                       BMAP_NORMAL_MAP,
                       BMAP_HYBRID_MAP
                   ]}));
               map.centerAndZoom(this.city,11);
               map.setCurrentCity(this.city);          // 设置地图显示的城市 此项是必须设置的
               map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
           },
            onClickLeft:function () {
                /*返回上一页*/
                this.$router.go(-1)
            },
        },
        /*页面加载完成时加载地图*/
        mounted() {
            // 百度地图API功能
            var map = new BMap.Map("map");    // 创建Map实例
            map.centerAndZoom(new BMap.Point(110.15167632,22.64397361), 11);  // 初始化地图,设置中心点坐标和地图级别
            //添加地图类型控件
            map.addControl(new BMap.MapTypeControl({
                mapTypes:[
                    BMAP_NORMAL_MAP,
                    BMAP_HYBRID_MAP
                ]}));
            map.setCurrentCity("大连");          // 设置地图显示的城市 此项是必须设置的
            map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
            var geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(function(r){
                if(this.getStatus() == BMAP_STATUS_SUCCESS){
                    var mk = new BMap.Marker(r.point);
                    map.addOverlay(mk);
                    map.panTo(r.point);
                }
                else {
                    alert('failed'+this.getStatus());
                }
            },{enableHighAccuracy: true})
        }
    }
</script>

<style scoped>
    .map {
        width: 100%;
        height: 300px;
    }
</style>