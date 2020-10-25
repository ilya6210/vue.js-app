<template>
    <div class="admin_wrap">
        <TheAdminSidebar />
        <transition name="slide-fade">
            <router-view> </router-view>
        </transition>
    </div>
</template>

<script>
import TheAdminSidebar from "@/components/layout/TheAdminSidebar";
export default {
    name: "Admin",
    components: {
        TheAdminSidebar,
    },
    data() {
        return {};
    },
    methods: {},
};
</script>
<style lang="scss" scoped>
.admin_wrap {
    min-height: 100%;
    -webkit-box-flex: 1;
    flex: 1 0 auto;
    padding-left: 50px;
    background-color: #f1f4f6;
}
</style>
