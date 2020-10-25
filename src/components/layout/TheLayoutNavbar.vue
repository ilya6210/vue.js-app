<template>
    <div class="main-nav-wrap">
        <b-navbar toggleable="md" type="dark" id="menu" align="center">
            <b-container>
                <b-navbar-nav class="ml-auto">
                    <b-navbar-toggle
                        target="nav-collapse"
                        right
                    ></b-navbar-toggle>
                </b-navbar-nav>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="mx-auto">
                        <b-nav-item tag="li" to="/" exact active-class="active">
                            HOME
                        </b-nav-item>
                        <b-nav-item tag="li" to="/admin" active-class="active">
                            ADMIN PANEL
                        </b-nav-item>
                        <b-nav-item
                            tag="li"
                            to="/contact"
                            active-class="active"
                        >
                            CONTACT
                        </b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: "TheLayoutNavbar",
    props: [],
    components: {},
};
</script>

<style lang="scss" scoped>
.main-nav-wrap {
    box-shadow: inset 0 -1px 0 0 #fff, 0 1px 5px rgba(0, 0, 0, 0.1);
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
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
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

@media (max-width: 575px) {
    // #menu {
    //   background-color: #42b983;
    // }
    // #menu a {
    //   color: #fff;
    // }
}

@media (min-width: 768px) {
    #menu {
        width: 100%;
    }
}
</style>
