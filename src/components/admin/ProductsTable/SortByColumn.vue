<template>
    <span @click="sortByColumn">
        <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            v-bind:class="flipArrow"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.34375 12V2.5625L0.9375 4.9375L0 4L4 0L8 4L7.0625 4.9375L4.65625 2.5625V12H3.34375Z"
                fill="#333333"
            />
        </svg>
    </span>
</template>

<script>
export default {
    props: ["params"],
    data: function() {
        return {
            active: "",
        };
    },
    computed: {
        flipArrow: function() {
            return {
                flipped: this.params.currentSortDir === "desc",
            };
        },
    },
    methods: {
        sortByColumn() {
            this.params.currentSortDir =
                this.params.currentSortDir === "asc"
                    ? "desc"
                    : this.params.currentSortDir === ""
                    ? "asc"
                    : "";
        },
    },
    created: function() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.flipped {
    transform: scaleY(-1);
}
</style>
