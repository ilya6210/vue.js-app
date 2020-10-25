<template>
    <div class="wrap_el mx-auto">
        <button
            class="btn prev"
            :disabled="params.pageNumber == 1"
            @click="params.pageNumber--"
            :class="{ btn_disabled: params.pageNumber == 1 }"
        >
            <svg
                width="5"
                height="8"
                viewBox="0 0 5 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 0L0 4L4 8L4.9375 7.0625L1.875 4L4.9375 0.9375L4 0Z"
                    fill="#333333"
                />
            </svg>
        </button>
        <span>
            <strong>{{ getRange }} </strong>
            of
            <strong>{{ getAllCount }} </strong>
        </span>
        <button
            class="btn next"
            @click="params.pageNumber++"
            :disabled="params.pageNumber == pageCount"
            :class="{ btn_disabled: params.pageNumber == pageCount }"
        >
            <svg
                width="5"
                height="8"
                viewBox="0 0 5 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.9375 0L4.9375 4L0.9375 8L0 7.0625L3.0625 4L0 0.9375L0.9375 0Z"
                    fill="#5B5E77"
                />
            </svg>
        </button>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    props: ["params"],
    data: function() {
        return {};
    },
    computed: {
        ...mapGetters({
            getAllCount: "products/getAllCount",
        }),
        pageCount() {
            return Math.ceil(this.getAllCount / this.params.rowsNumber);
        },
        getRange() {
            if (this.params.pageNumber == 1)
                return (
                    this.params.pageNumber +
                    "-" +
                    this.params.pageNumber * this.params.rowsNumber
                );
            else
                return (
                    (this.params.pageNumber - 1) * this.params.rowsNumber +
                    1 +
                    "-" +
                    (this.params.pageNumber * this.params.rowsNumber >
                    this.getAllCount
                        ? this.getAllCount
                        : this.params.pageNumber * this.params.rowsNumber)
                );
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrap_el {
    white-space: nowrap;
}
span {
    text-align: center;
}
</style>
