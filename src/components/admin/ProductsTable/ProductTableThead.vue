<template>
    <th
        @mouseover="showSortArrow"
        @mouseleave="hideSortArrow"
        :class="{
            selected_rows: index == 0 && showSort,
        }"
    >
        {{ item }}
        <SortByColumn
            :params="params"
            :style="{
                visibility: index == 0 && showSort ? 'visible' : 'hidden',
            }"
        />
    </th>
</template>

<script>
import SortByColumn from "./SortByColumn";

export default {
    props: ["params", "item", "index"],
    components: {
        SortByColumn,
    },
    data() {
        return {
            showSort: false,
        };
    },
    methods: {
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
    computed: {
        filteredColumns() {
            return this.params.columnsOrder.filter((value) =>
                this.params.selectedHeaders.includes(value)
            );
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.selected_rows {
    color: $selected-state;
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
th:hover {
    cursor: pointer;
}
</style>
