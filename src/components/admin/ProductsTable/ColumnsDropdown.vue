<template>
    <div class="wrapper mx-auto">
        <button @click="toggleShow" class="btn">
            {{ checkedColumns.length }} columns selected
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
                <div class="menu-item" @click="itemClicked('all')">
                    <input
                        type="checkbox"
                        v-model="all"
                        class="custom-checkbox"
                        id="all"
                    />
                    <label for="all"> <b>Select all</b> </label>
                </div>

                <div
                    class="menu-item"
                    v-for="(item, index) in columns"
                    @click="itemClicked(item)"
                    :key="item"
                >
                    <input
                        type="checkbox"
                        :value="item"
                        v-model="checkedColumns"
                        class="custom-checkbox"
                        :id="index"
                    />
                    <label :for="index"> {{ item }}</label>
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
            checkedColumns: [],
        };
    },
    computed: {
        ...mapGetters({
            columns: "columns/getAll",
        }),
        all: {
            get() {
                return this.checkedColumns.length === this.columns.length;
            },
            set(val) {
                this.checkedColumns = val ? this.columns.map((n) => n) : [];
            },
        },
    },
    methods: {
        toggleShow: function() {
            this.showMenu = !this.showMenu;
        },
        itemClicked: function(item) {
            this.toggleShow();
            if (item == "all") {
                this.all = !this.all;
            } else {
                if (this.checkedColumns.indexOf(item) < 0) {
                    this.checkedColumns.push(item);
                } else {
                    this.checkedColumns.splice(
                        this.checkedColumns.indexOf(item),
                        1
                    );
                }
            }
            this.params.selectedHeaders = this.checkedColumns;
        },
    },
    created: function() {
        this.all = true;
        this.params.selectedHeaders = this.checkedColumns;
        this.params.allColumns = this.columns;
        this.params.columnsOrder = this.columns;
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn {
    white-space: nowrap;
}
.wrapper {
    margin-left: auto;
    margin-right: 0px;
}
.menu-item {
    padding-left: 5px;

    white-space: nowrap;
}

svg {
    margin-left: 4px;
    margin-bottom: 2px;
    color: $light-text;
}
</style>
