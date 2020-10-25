<template>
    <sidebar-menu
        :menu="menu"
        :theme="'white-theme'"
        :collapsed="collapsed"
        @toggle-collapse="onToggleCollapse"
    >
        <span slot="header" class="header_nav">
            <a href="https://github.com/ilya6210" target="_blank">
                <img src="@/assets/my_logo.png" class="toggle_nav_logo" />
                <small>Created by: @ilya6210</small>
            </a></span
        >
        <span slot="toggle-icon">
            <i class="fas fa-arrows-alt-h"></i>
        </span>
    </sidebar-menu>

    <!-- <div>
        <b-container>
            <b-navbar-nav class="mx-auto">
                <b-nav-item tag="li" to="/admin/table" active-class="active">
                    TABLE COMPONENT
                </b-nav-item>
            </b-navbar-nav>
        </b-container>
    </div> -->
</template>

<script>
export default {
    name: "TheAdminSidebar",
    data() {
        return {
            menu: [
                {
                    header: true,
                    hiddenOnCollapse: false,
                },
                {
                    href: "/admin/",
                    title: "Dashboard",
                    icon: "fas fa-tv",
                },

                {
                    href: "/admin/users",
                    title: "Profile",
                    icon: "fa fa-user",
                    badge: {
                        text: "4",
                        class: "vsm--badge_default",
                    },
                },
                {
                    href: "/admin/table",
                    title: "Data table example",
                    icon: "fas fa-list-alt",
                },
                {
                    href: "/admin/charts",
                    title: "Charts example",
                    icon: "fas fa-chart-area",
                },
            ],
            collapsed: true,
        };
    },
    methods: {
        onToggleCollapse(collapsed) {
            this.collapsed = collapsed;
        },
    },
    components: {},
};
</script>

<style lang="scss" scoped>
.header_nav {
    height: 90px;
    text-align: center;
    vertical-align: center;
    padding: 15px;
    small {
        display: block;
    }
}
.v-sidebar-menu.vsm_collapsed .header_nav {
    padding: 5px;
    small {
        display: none;
    }
}

.toggle_nav_logo {
    max-height: 100%;
    max-width: 100%;
}
.v-sidebar-menu {
    z-index: 10000;
}
nav {
    background-color: transparent;
    box-shadow: none;
    padding: 20px;
}
#menu {
    text-align: center;
    margin: 0 auto;
    //border-bottom: 2px solid #42b983;
    position: relative;
    z-index: 1000;
    width: 100%;
}

nav ul a:hover,
nav ul li.active {
    background-color: none;
}

#menu {
    li {
        margin: 0 10px;
        font-size: 1.4em;
    }
    a {
        color: #42b983;
        text-decoration: none;
    }
    .navbar-toggler {
        color: #42b983;
        border-color: #42b983;
        background-color: #42b983;
    }
}

@media (min-width: 768px) {
    #menu {
        width: 100%;
    }
}
</style>
