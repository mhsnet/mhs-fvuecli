<template>
    <div class="sidebar">
        <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
            @close="handleClose">
            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>Navigator One</span>
                </template>
                <el-menu-item-group>
                    <template #title><span>Group One</span></template>
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                    <template #title><span>item four</span></template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
                <el-icon>
                    <icon-menu />
                </el-icon>
                <template #title>Navigator Two</template>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <el-icon>
                    <document />
                </el-icon>
                <template #title>Navigator Three</template>
            </el-menu-item>
            <el-menu-item index="4">
                <el-icon>
                    <setting />
                </el-icon>
                <template #title>Navigator Four</template>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
// import { computed, watch } from "vue";
// import { useStore } from "vuex";
// import { useRoute } from "vue-router";
export default {
    setup() {
        // const items = [
        //     {
        //         icon: "el-icon-lx-home",
        //         index: "/dashboard",
        //         title: "系统首页",
        //     },
        //     {
        //         icon: "el-icon-lx-cascades",
        //         index: "/table",
        //         title: "基础表格",
        //     },
        //     {
        //         icon: "el-icon-lx-copy",
        //         index: "/tabs",
        //         title: "tab选项卡",
        //     },
        //     {
        //         icon: "el-icon-lx-calendar",
        //         index: "3",
        //         title: "表单相关",
        //         subs: [
        //             {
        //                 index: "/form",
        //                 title: "基本表单",
        //             },
        //             {
        //                 index: "/upload",
        //                 title: "文件上传",
        //             },
        //             {
        //                 index: "4",
        //                 title: "三级菜单",
        //                 subs: [
        //                     {
        //                         index: "/editor",
        //                         title: "富文本编辑器",
        //                     },
        //                 ],
        //             },
        //         ],
        //     },
        //     {
        //         icon: "el-icon-lx-emoji",
        //         index: "/icon",
        //         title: "自定义图标",
        //     },
        //     {
        //         icon: "el-icon-pie-chart",
        //         index: "/charts",
        //         title: "schart图表",
        //     },
        //     {
        //         icon: "el-icon-lx-global",
        //         index: "/i18n",
        //         title: "国际化功能",
        //     },
        //     {
        //         icon: "el-icon-lx-warn",
        //         index: "7",
        //         title: "错误处理",
        //         subs: [
        //             {
        //                 index: "/permission",
        //                 title: "权限测试",
        //             },
        //             {
        //                 index: "/404",
        //                 title: "404页面",
        //             },
        //         ],
        //     },
        //     {
        //         icon: "el-icon-lx-redpacket_fill",
        //         index: "/donate",
        //         title: "支持作者",
        //     },
        // ];

        // const route = useRoute();

        // const onRoutes = computed(() => {
        //     return route.path;
        // });

        // const store = useStore();
        // const collapse = computed(() => store.state.collapse);

        return {
            // items,
            // onRoutes,
            // collapse,
        };
    },
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}

.sidebar::-webkit-scrollbar {
    width: 0;
}

.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}

.sidebar>ul {
    height: 100%;
}
</style>
