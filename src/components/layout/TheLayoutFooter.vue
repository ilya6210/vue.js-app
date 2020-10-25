<template>
    <footer>
        <section class="contact-mail">
            <h2>
                Want to contact me?
                <div>
                    <a href="mailto:ilyaalekseev62@mail.ru">
                        <i class="far fa-envelope"></i>
                        ilyaalekseev62@mail.ru</a
                    >
                </div>
            </h2>
        </section>
        <div class="row mx-0 mt-3">
            <div class="col">
                <p>
                    All information about this project you can find here:
                    <a href="https://github.com/ilya6210" target="_blank">
                        <i class="fab fa-github"></i> GitHub</a
                    >
                </p>
                <h5 class="mt-4">LINKS</h5>
                <ul class="mt-1">
                    <router-link tag="li" to="/" exact active-class="active">
                        <a href="#">Home</a>
                    </router-link>
                    <router-link tag="li" to="/admin" active-class="active">
                        <a href="#">Admin Panel</a>
                    </router-link>
                    <router-link tag="li" to="/contact" active-class="active">
                        <a href="#">Contact</a>
                    </router-link>
                </ul>
            </div>
        </div>
        <div class="row border-top mx-0 my-4">
            <div class="col">
                <p>Copyright © {{ new Date().getFullYear() }}</p>
                <small
                    >Designed & created by
                    <a href="https://github.com/ilya6210" target="_blank">
                        <i class="fab fa-github"></i> Ilya </a
                    >. Hosted with
                    <a href="https://pages.github.com/" target="_blank"
                        >GitHub Pages</a
                    >
                </small>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "TheLayoutFooter",
};
</script>

<style lang="scss" scoped>
footer {
    flex: 0 0 auto;
    bottom: 0;
    width: 100%;
    color: #fff;
    background-image: radial-gradient(circle at 1% 1%, #1aab67, #a4f5b5);
    z-index: 1;
    position: relative;

    .contact-mail {
        padding-top: 4rem;
        padding-left: 40px;
        padding-right: 40px;
    }

    ul {
        list-style-type: none;
        margin-top: 20px;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a,
    p {
        color: #fff;
        text-decoration: none;
    }
}

footer:after {
    content: "";
    background-color: #fff;
    -webkit-mask: url("~@/assets/vue_icon.svg") no-repeat;
    mask: url("~@/assets/vue_icon.svg") no-repeat;
    mask-position: right 20% center;
    -webkit-mask-position: right 20% center;
    mask-size: auto calc(100% - 10px);
    -webkit-mask-size: auto calc(100% - 10px);
    opacity: 0.1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    position: absolute;
}

@media (max-width: 567px) {
    // footer {
    //     padding-left: 50px;
    // }
    .row {
        padding-left: 50px;
        padding-right: 20px;
    }
    h2 {
        font-size: 1.5rem;
    }
}
</style>
