<template>
    <b-container class="my-3">
        <div class="row">
            <div class="col-12">
                <h2 class="my-3">Profile form edit</h2>
            </div>
            <div class="card shadow bg-default col-8 offset-2">
                <div class="card-body">
                    <b-row>
                        <b-col>
                            <img
                                class="img-fluid avatar-img rounded-circle border border-4 border-body mx-auto"
                                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwoODQ4PDRAPEA8NDQ0NDQ0NDRsNDg0PFRIWFhURExMYKCggGBolGxMVITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOYA2wMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQQFAwIH/8QAMBABAAIABAQEBQQCAwAAAAAAAAECAxESUQQFIZExQWGBIjJxobFCUsHRcuEVYoL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+ogAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADxiYtK/NMR+Ve3H4flEz7ZAtil/yNf2z3THMKbWBcFWvHYXrHs7YeNh28LRPv1B0AAAAAAAAAAAAAAAAAABV4zidHSvzT9gdMfiKU8fH9seMqOLxuJbw+GPTx7q0zMznPWQCZAAAAQkBe4DiLTOi3Xp0mfH6L7CiZjwTrtvPcG4MrheKtW0RaZms9J9PWGqAAAAAAAAAAAAAADziXisTM+UZsW1ptMzPjM9WlzG2WHlvMQywSAAAAAAAAACGrwGLqplPjXp7eTLWuW2yvlvE9waYAAAAAAAAAAAAAKPM56U+ss9f5p+j3UASAAAAAAAAAA68HOWJX65fZyesGcr1/wAo/INsAAAAAAAAAAAAAFDmn6PdQaXMq/DE7T1ZwAAAAAAAAAACafNH1j8oe8CM71j/ALQDaAAAAAAAAAAAAAB4xaaqzXeMvdirfMrTqrG0Z+6oAAAAAAAAAAAt8uws7avKv5U1/l+PMzonLKIzjKMsgXwAAAAAAAAAAAAAZ3M4+Ks+kwptPmNM6Z/tnP2ZgAAAAAAAAAAC1y6vx57VlUaPLafDM7zl2BdAAAAAAAAAAAAAB5vXOJjeJhiTGU5T5Tk3XDH4ekxadMapievqDJEJAAAAAAABADY4SuWHWPTNW4DBpaudoifi6TK+AAAAAAAAAAAAAAAADI4vC0XnaesOLT5hh50z86zn7ebLBIAAAAABl9xZ5fh6r5+VYz9/IGhw+HppEbR1+roAAAAAAAAAAAAAAAAAItGcTG8TDDmMpmNpmG6w7znMzvM/kEAAAAAANDlcfDafWI+3+2e0uW/JP+U/iAWwAAAAAAAAAAAAAAAARMxHj0jeQece2VLTtWe7EXeN4qLRpr4fqnf0UwAAAAAAQ0OV26Wj1i38fwoPeDi2paLR7xvANocsDHpeOk9dvN1AAAAAAAAAAAB5vetYzmYj6g9PN71rGdpiI9VLG4/ypH/qf4hSve1pztMz9QXsbmH7Iz9bf0pYmLe3zTM/iHkBCQAAAAAAAAAj0WMPjcWvj8UbT/auA0cPj6T80TX7wtUvW0ZxMT9JzYb1W0xOcTl9AbgzcLj7x80ao38JXcHHpf5Z67T4g6gAAACJlncVxF79KxMV+nWwOvE8bEdKdZ38oUL3tac7TMz69TRbaexottPYECdFtp7Gi209gQJ0W2nsaLbT2BAnRbaexottPYECdFtp7Gi209gQJ0W2nsaLbT2BAnRbaexottPYECdFtp7Gi209gQJ0W2nsaLbT2BAnRbaexottPYEEdPD7J0W2nsaLbT2BaweOtHS3WN/NfwsWt4zrOf5hjaLbT2eqa6znXOJ9IBtDlw2LN65zGU+Ex4dd3UAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/2Q=="
                                alt="Avatar"
                            />
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

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <!-- Label -->
                                            <label>
                                                Phone
                                            </label>

                                            <!-- Input -->
                                            <the-mask
                                                type="tel"
                                                class="form-control"
                                                value="(100) 200-30-40"
                                                :mask="'+7 (###) ###-##-##'"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <!-- Label -->
                                            <label>
                                                Birthday
                                            </label>

                                            <!-- Input -->
                                            <b-form-datepicker
                                                id="datepicker-placeholder"
                                                placeholder="Choose a date"
                                                locale="en"
                                            ></b-form-datepicker>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class="custom-control custom-switch text-left my-3"
                                >
                                    <input
                                        type="checkbox"
                                        class="custom-control-input"
                                        id="customSwitch1"
                                    />
                                    <label
                                        class="custom-control-label"
                                        for="customSwitch1"
                                        >Public profile</label
                                    >
                                </div>

                                <button
                                    type="submit"
                                    class="btn-lg btn btn-primary w-100"
                                >
                                    Save changes
                                </button>
                                <div>
                                    <small
                                        >* it is an email demo form, you will
                                        not get any emails from this website
                                    </small>
                                </div>
                            </b-form>

                            <hr />

                            <div class="row">
                                <div class="col-md-6 text-left">
                                    <h4>Delete Account</h4>
                                    <small
                                        >Please note, deleting your account is a
                                        permanent action and will no be
                                        recoverable once completed.</small
                                    >
                                </div>

                                <div class="col-md-6 text-right">
                                    <button class="btn btn-danger">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </div>
        </div>
    </b-container>
</template>

<script>
import { TheMask } from "vue-the-mask";
// export default {
//     components: { TheMask },
// };

export default {
    name: "AdminProfile",
    components: { TheMask },
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
            alert("Submitted!");
        },
    },
};
</script>

<style scoped lang="scss">
h2 {
    font-size: 3em;
    font-weight: bold;
    color: #42b983;
}
</style>
