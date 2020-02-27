import Vue from 'vue'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
/*按键组*/
import Button from 'vant/lib/button'
import 'vant/lib/button/style'
Vue.use(Button)
/*轮播图*/
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
/*坑：icon图标需要引入的东西*/
import { Icon } from 'vant';
Vue.use(Icon);
/*输入框*/
import { Field } from 'vant';
Vue.use(Field);
/*引入轮播图懒加载*/
import {Lazyload} from 'vant';
Vue.use(Lazyload);
/*九宫格*/
import { Grid, GridItem } from 'vant';
Vue.use(Grid).use(GridItem);
/*图片*/
import { Image } from 'vant';
Vue.use(Image);
/*通知栏*/
import { NoticeBar } from 'vant';
Vue.use(NoticeBar);
/*吸顶*/
import { Sticky } from 'vant';
Vue.use(Sticky);
/*搜索*/
import { Search } from 'vant';
Vue.use(Search);
/*下拉菜单*/
import { DropdownMenu, DropdownItem } from 'vant';
Vue.use(DropdownMenu).use(DropdownItem);
/*路由*/
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'
/*商品卡片*/
import { Card } from 'vant';
Vue.use(Card);
/*下拉刷新*/
import { PullRefresh } from 'vant';
Vue.use(PullRefresh);
/*轻提示*/
import { Toast } from 'vant';
Vue.use(Toast);
/*瀑布流加载（上拉刷新）*/
import { List } from 'vant';
Vue.use(List);
/*导航栏*/
import { NavBar } from 'vant';
Vue.use(NavBar);
/*商品规格选择*/
import { Sku } from 'vant';
Vue.use(Sku);
/*复选框*/
import { Checkbox, CheckboxGroup } from 'vant';
Vue.use(Checkbox).use(CheckboxGroup)
/*商品购买栏*/
import {
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton
} from 'vant';
Vue
    .use(GoodsAction)
    .use(GoodsActionIcon)
    .use(GoodsActionButton);
/*提交订单*/
import { SubmitBar } from 'vant';
Vue.use(SubmitBar);
import { Cell, CellGroup } from 'vant';
Vue.use(Cell).use(CellGroup);
/*弹出框*/
import { Popup } from 'vant';
Vue.use(Popup);
/*分类展示tab*/
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);
/*分割线*/
import { Divider } from 'vant';
Vue.use(Divider);
/*文件上传*/
import { Uploader } from 'vant';
Vue.use(Uploader);
/*地址选择*/
import { Area } from 'vant';
Vue.use(Area);
/*上拉菜单*/
import { ActionSheet } from 'vant';
Vue.use(ActionSheet);
/*弹出框*/
import { Dialog } from 'vant';
Vue.use(Dialog);
/*选择器*/
import { Picker } from 'vant';
Vue.use(Picker);
/*图片预览*/
import { ImagePreview } from 'vant';
Vue.use(ImagePreview);
/*面板*/
import { Panel } from 'vant';
Vue.use(Panel);
/*步进器*/
import { Stepper } from 'vant';
Vue.use(Stepper);
/*引入开关按钮*/
import { Switch } from 'vant';
Vue.use(Switch);
/*滑块*/
import { Slider } from 'vant';
Vue.use(Slider);
/*百度地图*/
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
    ak: 'wz88BwrkIj1p0r6AChgBlGihT7prdWE0'
})

/*引入axios*/
import axios from 'axios';
Vue.prototype.$axios = axios;
import QS from 'qs'
Vue.prototype.$qs = QS;

/*cookie操作插件*/
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)


/*首页组件*/
import App from './App.vue'
let vue = new Vue({
    el:'#app',
    components:{
        App
    },
    router
});




