<template>
    <div id="app">
        <TheLayoutNavbar />
        <transition name="slide-fade">
            <router-view :key="$route.fullPath"></router-view>
        </transition>

        <TheLayoutFooter />
    </div>
</template>

<script>
import TheLayoutNavbar from "@/components/layout/TheLayoutNavbar";
import TheLayoutFooter from "@/components/layout/TheLayoutFooter";

export default {
    name: "App",
    components: {
        TheLayoutNavbar,
        TheLayoutFooter,
    },
};
</script>
<style>
@font-face {
    font-family: "Source Sans Pro";
    src: local("Source Sans Pro"),
        url(./fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf)
            format("truetype");
}

body {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 20px;
}

.slide-fade-enter-active {
    transition: all 0.4s ease;
}
.slide-fade-leave-active {
    transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
}
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    position: relative;
    display: flex;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-height: 100vh;
    -webkit-box-orient: vertical;
}
.wrap {
    min-height: 100%;
    flex: 1 0 auto;
}

button:focus,
small:focus,
.btn:focus,
a:focus {
    outline: none;
    box-shadow: none;
}

small {
    font-size: x-small;
    line-height: 1;
}
html,
body {
    height: 100%;
    margin: 0;
}

body {
    margin: 0;
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    height: -webkit-fill-available;
    font-family: "Source Sans Pro", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
button:focus,
small:focus,
a:focus {
    outline: none;
}

h1,
h2,
h3,
p {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
}

h3,
p {
    color: #6c757d;
}

.main-color {
    color: #42b983;
}
</style>
