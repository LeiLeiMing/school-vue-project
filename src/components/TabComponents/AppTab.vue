<template>
    <div>
        <div class="mui-content">
            <div>
                <!--标签栏-->
                <tabcomponents></tabcomponents>
            </div>
        </div>
    </div>
</template>
<script>
    import tabcomponents from './TabComponents.vue'
    import listcontainer from '../ListContainer.vue'
    import display from './DisplayValue.vue'
    export default {
        components:{
            tabcomponents,
            listcontainer,
            display
        },
        methods:{

        }
    }
</script>
<style scoped>
    .title{
        margin: 20px 15px 10px;
        color: #6d6d72;
        font-size: 15px;
    }

    .oa-contact-cell.mui-table .mui-table-cell {
        padding: 11px 0;
        vertical-align: middle;
    }

    .oa-contact-cell {
        position: relative;
        margin: -11px 0;
    }

    .oa-contact-avatar {
        width: 75px;
    }
    .oa-contact-avatar img {
        border-radius: 50%;
    }
    .oa-contact-content {
        width: 100%;
    }
    .oa-contact-name {
        margin-right: 20px;
    }
    .oa-contact-name, oa-contact-position {
        float: left;
    }
</style>