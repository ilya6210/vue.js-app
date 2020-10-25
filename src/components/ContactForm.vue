<template>
    <b-row>
        <div class="card shadow bg-default col">
            <div class="card-body">
                <b-row>
                    <b-col md="8">
                        <b-form @submit.stop.prevent="onSubmit" v-if="show">
                            <b-form-group
                                id="input-group-1"
                                label="Email address:"
                                label-for="input-1"
                                description="We'll never share your email with anyone else."
                            >
                                <b-form-input
                                    id="input-1"
                                    v-model="form.email"
                                    type="email"
                                    required
                                    placeholder="Enter email"
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group
                                id="input-group-2"
                                label="Your Name:"
                                label-for="input-2"
                            >
                                <b-form-input
                                    id="input-2"
                                    v-model="form.name"
                                    required
                                    placeholder="Enter name"
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group
                                id="input-group-3"
                                label="Subject:"
                                label-for="input-3"
                            >
                                <b-form-textarea
                                    id="input-3"
                                    v-model="form.text"
                                    required
                                    placeholder="Enter your message"
                                ></b-form-textarea>
                            </b-form-group>

                            <b-button type="submit" class="btn-lg w-100"
                                >Submit</b-button
                            >
                            <div>
                                <small
                                    >* it is an email demo form, you will not
                                    get any emails from this website
                                </small>
                            </div>
                        </b-form>
                    </b-col>
                    <b-col md="4">
                        <b-row>
                            <b-col>
                                <h2><i class="fas fa-map-marker-alt"></i></h2>
                                <p>Moscow, Russia</p>
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col>
                                <h2><i class="fab fa-github"></i></h2>
                                <p>
                                    <a
                                        href="https://github.com/ilya6210"
                                        target="_blank"
                                    >
                                        GitHub</a
                                    >
                                </p>
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col>
                                <h2><i class="far fa-envelope"></i></h2>

                                <p>
                                    <a href="mailto:ilyaalekseev62@mail.ru"
                                        >ilyaalekseev62@mail.ru
                                    </a>
                                </p>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </div>
        </div>
    </b-row>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: "",
                name: "",
                text: "",
            },
            show: true,
        };
    },
    methods: {
        onSubmit() {
            alert(
                "Success! Here we simulate an email letter sending function from a separate component"
            );
            // this.axios
            //   .post("/api/subscribe.php", this.form)
            //   .then(response => {
            //     alert(response);
            //   })
            //   .catch(error => console.log(error));
        },
    },
    components: {},
};
</script>

<style lang="scss" scoped>
h2 {
    color: #42b983;
}
a {
    color: #6c757d;
}
h2 {
    font-size: 2rem;
}
form {
    width: 100%;
}
.btn-secondary {
    background-color: #42b983 !important;
    border-color: #42b983 !important;
}
</style>
