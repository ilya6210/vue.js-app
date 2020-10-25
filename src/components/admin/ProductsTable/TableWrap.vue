<template>
    <div class="wrap mt-3">
        <h1>Table UI</h1>
        <hr />

        <div class="row mt-1">
            <div class="col-sm-12 col-xl-6">
                <SortingColumns :params="params"> </SortingColumns>
            </div>
            <div class="col-sm-12 col-xl-6 d-flex">
                <div class="row">
                    <div
                        class="col-sm-12 col-md-5 d-flex mt-2 mt-xl-0 text-center"
                    >
                        <DeleteButton :params="params"> </DeleteButton>
                        <ItemsDropdown :params="params"> </ItemsDropdown>
                    </div>
                    <div class="col-sm-12 col-md-7 d-flex px-0 mt-2 mt-xl-0">
                        <PaginationBlock :params="params"> </PaginationBlock>
                        <ColumnsDropdown :params="params" class="ml-md-2">
                        </ColumnsDropdown>
                    </div>
                </div>
            </div>
        </div>

        <ProductTable :params="params"> </ProductTable>

        <DeleteModal v-show="params.showDeleteModal" :params="params">
        </DeleteModal>

        <div class="col my-3">
            <a
                href="https://github.com/ilya6210/vue.js-app/tree/main/task_description"
                target="_blank"
            >
                <h4>
                    Task description (Figma + Text + Vuex json data, request.js)
                    link
                </h4></a
            >
        </div>
    </div>
</template>

<script>
import SortingColumns from "./SortingColumns";
import ItemsDropdown from "./ItemsDropdown";
import PaginationBlock from "./PaginationBlock";
import ColumnsDropdown from "./ColumnsDropdown";
import DeleteButton from "./DeleteButton";
import DeleteModal from "./DeleteModal";
import ProductTable from "./ProductTable";

export default {
    name: "MainTable",
    components: {
        SortingColumns,
        ItemsDropdown,
        PaginationBlock,
        ColumnsDropdown,
        DeleteButton,
        DeleteModal,
        ProductTable,
    },
    data: function() {
        return {
            params: {
                rowsNumber: 0,
                pageNumber: 1,
                selectedHeaders: [],
                allColumns: [],
                columnsOrder: [],
                currentSortDir: "",
                deleteIds: [],
                deleteId: false,
                showDeleteModal: false,
                deleteModalTop: 0,
                deleteModalLeft: 0,
                configColumns: {
                    "Product (100g serving)": "product",
                    Calories: "calories",
                    "Fat (g)": "fat",
                    "Carbs (g)": "carbs",
                    "Protein (g)": "protein",
                    "Iron (%)": "iron",
                },
            },
        };
    },
};
</script>

<style scoped lang="scss">
h1 {
    text-align: left;
    font-size: 32px;
    margin-bottom: 16px;
}
hr {
    color: #ededed;
    margin: 0px;
}
.wrap {
    font-size: 14px;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
}
</style>
