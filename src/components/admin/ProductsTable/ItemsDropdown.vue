<template>
    <div class="itemDropdown mx-auto">
        <button @click="toggleShow" class="btn">
            {{ activeCount }} Per Page
            <svg
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.0625 0L8 0.9375L4 4.9375L0 0.9375L0.9375 0L4 3.0625L7.0625 0Z"
                    fill="#333333"
                />
            </svg>
        </button>
        <div v-if="showMenu" class="menu_wrap">
            <div class="menu">
                <div
                    class="menu-item"
                    v-for="item in items"
                    @click="itemClicked(item)"
                    :key="item"
                >
                    {{ item }} Per Page
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    props: ["params"],
    data: function() {
        return {
            showMenu: false,
            activeCount: 10,
            items: [10, 15, 20],
        };
    },
    computed: {
        ...mapGetters({
            getAllCount: "products/getAllCount",
        }),
    },
    methods: {
        toggleShow: function() {
            this.showMenu = !this.showMenu;
        },
        itemClicked: function(item) {
            this.toggleShow();
            this.activeCount = item;
            this.params.rowsNumber = item;

            let newNumberPages = Math.ceil(
                this.getAllCount / this.params.rowsNumber
            );
            if (newNumberPages <= this.params.pageNumber)
                this.params.pageNumber = newNumberPages;
        },
    },
    created: function() {
        this.params.rowsNumber = this.activeCount;
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn {
    width: 110px;
}
svg {
    margin-left: 4px;
    margin-bottom: 2px;
    color: $light-text;
}
</style>
