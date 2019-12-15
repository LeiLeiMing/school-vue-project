/*抽离的路由组件*/
import VueRouter from 'vue-router'
/*路由组件*/
import index from './components/IndexContainer.vue'
import cart from './components/CartContainer.vue'
import mine from './components/MineContainer.vue'
import list from './components/ListContainer.vue'
import onegoods from './components/OneGoods.vue'
import buygoods from './components/BuyGoodsComponents/BuyGoods.vue'
import sell from './components/SellContainer.vue'
import minesetting from './components/MineSettingComponents/MineSetting.vue'
var router = new VueRouter({
    routes:[
        /*默认访问组件*/
        {path:'/',redirect:"/index"},
        {path: '/index',component:index},
        {path: '/list',component:list},
        {path: '/cart',component:cart},
        {path: '/mine',component:mine},
        {path: '/buy',component:buygoods},
        {path: '/sell',component:sell},
        {path: '/list/all/:id',component:onegoods},
        {path: '/index/everyday/:id',component:onegoods},
        {path: '/mine/setting',component:minesetting},
    ],
    /*路由高亮*/
    linkActiveClass: 'mui-active',/*MUI的高亮*/
});

/*向外暴露router*/
export default router;