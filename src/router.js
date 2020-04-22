/*抽离的路由组件*/
import VueRouter from 'vue-router'
/*路由组件*/
import index from './components/IndexContainer.vue'
import cart from './components/CartContainer.vue'
import mine from './components/MineContainer.vue'
import list from './components/ListContainer.vue'
import onegoods from './components/OneGoods.vue'
import buygoods from './components/BuyGoodsComponents/BuyGoods.vue'
import selectaddress from './components/BuyAddressSelect/ReceivingAddress.vue'
import changeaddress from './components/BuyAddressSelect/ChangeAddress.vue'
import sell from './components/SellContainer.vue'
import minesetting from './components/MineComponents/MineSetting.vue'
import sort from './components/SortGoodsComponents/Sort.vue'
import buyerfunction from './components/MineComponents/Function/BuyerFunction.vue'
import sellerfunction from './components/MineComponents/Function/SellerFunction.vue'
import login from  './components/LoginAndRegisterComponents/Login.vue'
import register from './components/LoginAndRegisterComponents/Register.vue'
import map from './components/MapCpmponents/BaiduMap.vue'
import useraddress from './components/MineComponents/UserAddress.vue'
import paysuccess from './components/BuyGoodsComponents/OrderPaySuccess.vue'
import search from './components/SearchListComponents/SearchList.vue'
import fahuo from './components/SellComponents/fahuo.vue'
var router = new VueRouter({
    routes:[
        /*默认访问组件*/
        {path:'/',redirect:"/index"},
        {path: '/index',component:index},
        {path: '/list',component:list},
        {path: '/cart',component:cart},
        {path: '/mine',component:mine},
        {path: '/buygoods',component:buygoods},
        {path: '/buygoods/selectaddress',component:selectaddress},
        {path: '/buygoods/changeaddress',component:changeaddress},
        {path: '/sell',component:sell},
        {path: '/list/all/:id',component:onegoods},
        {path: '/index/onegoods/:id',component:onegoods},
        {path: '/mine/setting',component:minesetting},
        {path:'/sort/:id',component:sort},
        {path:'/buyer/:id',component:buyerfunction},
        {path:'/seller/:id',component:sellerfunction},
        {path:'/loginAndRegister/login',component:login},
        {path:'/loginAndRegister/register',component:register},
        {path:'/map/selectaddress',component:map},
        {path:'/mine/useraddress',component:useraddress},
        {path:'/paysuccess',component:paysuccess},
        {path:'/search/:keyvalue',component:search},
        {path:'/sell/fahuo/:id/:orderid',component:fahuo},
    ],
    /*路由高亮*/
    linkActiveClass: 'mui-active',/*MUI的高亮*/
});

/*向外暴露router*/
export default router;