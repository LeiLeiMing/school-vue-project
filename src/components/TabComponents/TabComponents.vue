<!--标签栏的组件-->
<template>
    <div>
        <nav class="mui-bar mui-bar-tab">
            <!--这里实现路由高亮-->
            <router-link class="mui-tab-item" to="/index">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item " to="/list">
                <span class="mui-icon mui-icon-list"></span>
                <span class="mui-tab-label">全部</span>
            </router-link>
            <router-link class="mui-tab-item " to="/cart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item " to="/mine">
                <span class="mui-icon mui-icon-person"></span>
                <span class="mui-tab-label">我的</span>
            </router-link>
        </nav>
    </div>
</template>
<script>

</script>
<style scoped>

</style>