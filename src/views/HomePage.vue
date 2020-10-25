<template>
    <div class="wrap">
        <div class="head">
            <vue-particles
                color="#42b983"
                :particleOpacity="0.7"
                :particlesNumber="90"
                shapeType="circle"
                :particleSize="3"
                linesColor="#dedede"
                :linesWidth="2"
                :lineLinked="true"
                :lineOpacity="0.4"
                :linesDistance="150"
                :moveSpeed="3"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="push"
            >
            </vue-particles>
            <b-container>
                <b-row>
                    <b-col>
                        <h1>
                            Welcome to the home page of my Vue.js example
                            website.
                        </h1>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <p>
                            Background effect is made with VueParticles-js.
                        </p>

                        <b-button to="/contact" size="lg"
                            >Go to contact page</b-button
                        >
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <b-container class="cards">
            <h2 class="header">Features</h2>
            <b-row>
                <b-col md="3" v-scroll-reveal.delay="scrollRevealOptions.delay">
                    <div>
                        <b-icon icon="phone"></b-icon>
                    </div>
                    <h3>Fully Responsive</h3>
                    <p>
                        This website looks great on any device, no matter the
                        size!
                    </p>
                </b-col>
                <b-col md="3" v-scroll-reveal.delay="scrollRevealOptions.delay">
                    <div>
                        <b-icon icon="bootstrap"></b-icon>
                    </div>
                    <h3>Bootstrap 4</h3>
                    <p>
                        Featuring the latest build of the new BootstrapVue
                        framework!
                    </p>
                </b-col>
                <b-col md="3" v-scroll-reveal.delay="scrollRevealOptions.delay">
                    <div>
                        <b-icon icon="lightning"></b-icon>
                    </div>
                    <h3>SPA</h3>
                    <p>
                        Fast Performance Single Page Application
                    </p>
                </b-col>
                <b-col md="3" v-scroll-reveal.delay="scrollRevealOptions.delay">
                    <div>
                        <i class="fas fa-database"></i>
                    </div>
                    <h3>Vuex</h3>
                    <p>
                        & more modules & libraries are in use in the
                        <router-link tag="a" to="/admin">
                            test admin panel page</router-link
                        >
                    </p>
                </b-col>
            </b-row>
        </b-container>

        <b-container class="about">
            <h2 class="header">About the website creation</h2>
            <b-row style="text-align: center;">
                <b-card
                    title="Web Developer"
                    :img-src="dev"
                    img-alt="Image"
                    img-left
                    style="margin: 0 auto;"
                    tag="article"
                    class="mb-2 shadow"
                    v-scroll-reveal.delay="scrollRevealOptions.delay"
                >
                    <b-card-text>
                        <h3>Design & Development</h3>
                        Everything you see on this website was made by 1
                        developer. Contact him here:
                    </b-card-text>

                    <b-button
                        href="https://www.upwork.com/freelancers/~0157d9c4fff79a16cc"
                        class="w-100"
                        target="_blank"
                        >Contact</b-button
                    >
                    <p>
                        Or
                        <a href="https://github.com/ilya6210" target="_blank"
                            >Here</a
                        >
                    </p>
                </b-card>
            </b-row>
        </b-container>

        <b-container class="map">
            <h2 class="header">VueLayers Map demo</h2>
            <b-row v-scroll-reveal.delay="scrollRevealOptions.delay">
                <vl-map
                    :load-tiles-while-animating="true"
                    :load-tiles-while-interacting="true"
                    data-projection="EPSG:4326"
                    style="height: 400px"
                    class="shadow"
                >
                    <vl-view
                        :zoom.sync="zoom"
                        :center.sync="center"
                        :rotation.sync="rotation"
                    ></vl-view>

                    <vl-feature id="circle">
                        <vl-geom-circle
                            :radius="100000"
                            :coordinates="[37.6404287270408, 55.74395436750493]"
                        ></vl-geom-circle>
                    </vl-feature>

                    <vl-layer-tile id="osm">
                        <vl-source-osm></vl-source-osm>
                    </vl-layer-tile>
                </vl-map>
            </b-row>
        </b-container>

        <b-container class="contact">
            <h2 class="header">Contact</h2>
            <contactForm v-scroll-reveal.delay="scrollRevealOptions.delay" />
        </b-container>
    </div>
</template>

<script>
import Vue from "vue";
import VueParticles from "vue-particles";
Vue.use(VueParticles);

import contactForm from "@/components/ContactForm";

export default {
    name: "HomePage",
    components: {
        contactForm,
    },
    data() {
        return {
            scrollRevealOptions: {
                delay: 400,
            },
            zoom: 9,
            center: [37.6404287270408, 55.74395436750493],
            rotation: 0,
            geolocPosition: undefined,
            dev: require("@/assets/devcode.jpg"),
        };
    },
    mounted() {
        setTimeout(() => {
            this.scrollRevealOptions.delay = 0;
        }, 400);
    },
    created() {},
};
</script>

<style lang="scss" scoped>
#particles-js {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
}

i,
.b-icon,
.svg-inline--fa.fa-database {
    color: #42b983;
    font-size: 4.5rem;
}

.products {
    .row {
        margin-bottom: 20px;
    }
}

.card {
    align-items: center;
    justify-content: center;
    img {
        max-height: 300px;
        max-width: 100%;
    }
}
.products div {
    align-items: center;
    justify-content: center;

    img {
        max-width: 100%;
        transition: transform 0.2s;
    }
    img:hover {
        transform: scale(1.1);
    }
}

.numbers .row {
    background-color: #42b983;
    color: #fff;
    p {
        color: #fff;
    }
}
.container .header {
    text-align: center;
    font-size: 3em;
    font-weight: bold;
    margin-bottom: 40px;
    color: #42b983;
}

@media (min-width: 575px) {
    .container {
        margin-top: 40px;
        margin-bottom: 40px;
    }
}
.cards h3 {
    margin-top: 20px;
    margin-bottom: 20px;
}
.cards p {
    font-weight: 100;
}
.btn-secondary {
    background-color: #42b983 !important;
    border-color: #42b983 !important;
}

.head {
    height: 600px;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
    color: #42b983;

    h1 {
        font-size: 70px;
        font-weight: bold;
    }
}

@media (max-width: 767px) {
    .about .flex-row {
        flex-direction: column !important;
    }
}

@media (max-width: 575px) {
    .head h1 {
        font-size: 30px;
    }
    .wrap > .container:not(:first-of-type) {
        margin-top: 40px;
        border-bottom: 2px solid #42b983;
    }

    .products .btn-lg {
        font-size: 1em;
        line-height: 1.1;
    }
}
</style>
