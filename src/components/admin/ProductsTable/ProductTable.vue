<template>
    <div>
        <div
            class="table-responsive"
            v-if="filteredProducts.length && params.selectedHeaders.length"
        >
            <table class="table">
                <thead>
                    <tr>
                        <th>
                            <input
                                type="checkbox"
                                class="custom-checkbox"
                                id="allRows"
                                v-model="allRows"
                            />
                            <label for="allRows"></label>
                        </th>
                        <ProductTableThead
                            v-for="(item, index) in filteredColumns"
                            :key="index"
                            :item="item"
                            :index="index"
                            :params="params"
                        />
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <ProductTableRow
                        v-for="item in filteredProducts"
                        :key="item.id"
                        :item="item"
                        :params="params"
                    />
                </tbody>
            </table>
        </div>
        <div
            v-else-if="filteredProducts.length"
            style="text-align: center;"
        ></div>

        <div v-else style="text-align: center;">
            Server error occured <br />
            Try to
            <a @click="reloadPage" class="helper-text">reload</a>
            the page
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
//import SortByColumn from "./SortByColumn";
//import ProductTableDeleteButtton from "./ProductTableDeleteButtton";
import ProductTableRow from "./ProductTableRow";
import ProductTableThead from "./ProductTableThead";

export default {
    props: ["params"],
    components: {
        //SortByColumn,
        // ProductTableDeleteButtton,
        ProductTableRow,
        ProductTableThead,
    },
    data() {
        return {
            showSort: false,
        };
    },
    methods: {
        ...mapActions({ getAllProducts: "products/getAllProducts" }),

        reloadPage() {
            window.location.reload();
        },
        showSortArrow() {
            this.showSort = true;
        },
        hideSortArrow() {
            if (
                this.params.currentSortDir != "desc" &&
                this.params.currentSortDir != "asc"
            )
                this.showSort = false;
        },
    },
    async mounted() {
        this.getAllProducts();
    },
    computed: {
        ...mapGetters({
            allProducts: "products/getAllProducts",
            doneCount: "products/getListByCount",
            productsInRange: "products/getProductsByRange",
            getProductsBySortAndRange: "products/getProductsBySortAndRange",
        }),
        filteredProducts() {
            let start = (this.params.pageNumber - 1) * this.params.rowsNumber;
            let end = this.params.pageNumber * this.params.rowsNumber;

            return this.getProductsBySortAndRange(
                this.params.currentSortDir,
                this.params.configColumns[this.params.columnsOrder[0]],
                start,
                end
            );
        },
        filteredColumns() {
            return this.params.columnsOrder.filter((value) =>
                this.params.selectedHeaders.includes(value)
            );
        },
        allRows: {
            get() {
                return (
                    this.params.deleteIds.length ===
                    this.filteredProducts.length
                );
            },
            set(val) {
                this.params.deleteIds = val
                    ? this.filteredProducts.map((n) => n.id)
                    : [];
            },
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.selected_rows {
    color: $selected-state;
}
table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    margin: 8px 0px;
    label {
        margin-bottom: 0.3rem;
    }
}
thead tr {
    background-color: #fff;
    border-bottom: 1px solid #ededed;
}

th {
    vertical-align: middle;
    padding: 22px 20px;
    white-space: nowrap;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
}
th:nth-child(1) {
    padding-left: 37px;
    padding-right: 0px;
    width: 5%;
}

// th:nth-child(2) {
//     width: 10%;
// }

// th:nth-child(8) {
//     width: 13%;
// }

// td {
//     widows: auto;
//     padding: 18px 20px;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     white-space: nowrap;
//     vertical-align: bottom;
// }

// th:nth-child(2) {
//     width: 10%;
// }

// th:nth-child(8) {
//     width: 13%;
// }

// td:nth-child(1),
// th:nth-child(1) {
//     padding-left: 37px;
//     padding-right: 0px;
//     width: 5%;
// }

tbody tr:nth-child(odd) {
    background-color: #fff;
}
tbody tr:nth-child(even) {
    background-color: $row-bg;
}

tbody tr:hover {
    cursor: pointer;
    background-color: rgba(0, 161, 30, 0.07);
}
tbody tr:hover > td:nth-child(2) {
    font-weight: 600;
}
</style>
