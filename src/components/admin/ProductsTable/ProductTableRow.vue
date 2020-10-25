<template>
    <tr @mouseover="showDelete = true" @mouseleave="showDelete = false">
        <td>
            <input
                type="checkbox"
                class="custom-checkbox"
                :id="item.id"
                :checked="params.deleteIds.includes(item.id)"
                @click="rowClicked(item.id)"
            />
            <label :for="item.id"></label>
        </td>

        <td v-for="(value, name) in filteredItem(item)" :key="name">
            {{ value }}
        </td>
        <td>
            <ProductTableDeleteButtton
                v-show="showDelete"
                :id="item.id"
                :params="params"
            />
        </td>
    </tr>
</template>

<script>
import ProductTableDeleteButtton from "./ProductTableDeleteButtton";

export default {
    props: ["params", "item"],
    components: {
        ProductTableDeleteButtton,
    },
    data() {
        return {
            showDelete: false,
        };
    },
    methods: {
        filteredItem(item) {
            return this.params.columnsOrder
                .filter((value) => this.params.selectedHeaders.includes(value))
                .map((obj) => {
                    return item[this.params.configColumns[obj]];
                });
        },
        rowClicked(id) {
            if (this.params.deleteIds.indexOf(id) < 0) {
                this.params.deleteIds.push(id);
            } else {
                this.params.deleteIds.splice(
                    this.params.deleteIds.indexOf(id),
                    1
                );
            }
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
td {
    widows: auto;
    padding: 18px 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
}

td:nth-child(1),
th:nth-child(1) {
    padding-left: 37px;
    padding-right: 0px;
    width: 5%;

    label {
        margin-bottom: 0.3rem;
    }
}
td:last-child {
    width: 13%;
}

// tbody tr:nth-child(odd) {
//     background-color: #fff;
// }
// tbody tr:nth-child(even) {
//     background-color: $row-bg;
// }

// tbody tr:hover {
//     cursor: pointer;
//     background-color: rgba(0, 161, 30, 0.07);
// }
// tbody tr:hover > td:nth-child(2) {
//     font-weight: 600;
// }
</style>
