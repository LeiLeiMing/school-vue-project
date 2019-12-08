<template>
    <div>
        <!--返回顶部小火箭:有BUG-->
        <!-- <totop></totop>-->
        <!--<indexguide ></indexguide>-->
        <!--顶部搜索栏-->
        <!--<toptab></toptab>-->
        <display></display>
        <maintab></maintab>

    </div>
</template>
<script>
    /*返回顶部小火箭*/
    /*import totop from './components/components-son/ToTop.vue'*/
    import maintab from './components/TabComponents/AppTab.vue'
    import display from './components/TabComponents/DisplayValue.vue'
    import toptab from './components/TabComponents/AppTop.vue'
    export default {
        data(){
            return{
                mark:false
            }
        },
        components:{
            /* totop*/
            toptab,
            display,
            maintab
        },
        methods:{

        }
    }
</script>
<style scoped>
    /*动画效果丢弃*/
    /*!*动画进入时*!*/
    /*.v-enter{*/
    /*    !*opacity表示开启渐进消失效果*!*/
    /*    opacity: 0;*/
    /*    transform: translateX(100%);*/
    /*}*/
    /*!*动画离开时*!*/
    /*!*X表示进入/离开的方向（左右）*!*/
    /*.v-leave-to{*/
    /*    opacity: 0;*/
    /*    transform: translateX(-100%);*/
    /*    position: absolute;*/
    /*}*/
    /*!*动画前半场效果*!*/
    /*.v-enter-active{*/
    /*    transition: all .5s ease;*/
    /*}*/
    /*!*动画后半场效果*!*/
    /*.v-leave-active{*/
    /*    transition: all .5s ease;*/
    /*}*/
</style>