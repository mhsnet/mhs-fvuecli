<template>
    <div class="about">
        <v-header />
        <v-sidebar />
    </div>
</template>
<script lang="tsx">
import vHeader from "../components/Header.vue";
import vSidebar from "../components/Sidebar.vue";
export default {
    components: {
        vHeader,
        vSidebar
    },
    setup() {
        return {
        };
    },
};
</script>
