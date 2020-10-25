<template>
    <div class="wrap">
        <b-container class="contact my-4 px-4">
            <h2>Contact</h2>
            <contactForm />
        </b-container>
    </div>
</template>

<script>
import contactForm from "@/components/ContactForm";
export default {
    name: "ContactPage",
    components: { contactForm },
    data() {
        return {};
    },
    methods: {},
};
</script>
<style lang="scss" scoped>
h2 {
    font-size: 3em;
    font-weight: bold;
    margin-bottom: 40px;
    color: #42b983;
}
</style>
