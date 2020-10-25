<template>
    <b-container>
        <TableWrap />
    </b-container>
</template>

<script>
import TableWrap from "@/components/admin/ProductsTable/TableWrap";

export default {
    name: "ProductsTablePage",
    components: {
        TableWrap,
    },
};
</script>

<style scoped lang="scss">
.container {
    max-width: 1140px;
    margin: 0 auto;
}

*::v-deep {
    .menu_wrap {
        background-color: #fff;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
        border-radius: 4px;
        background-clip: padding-box;
        margin: 5px 0 0;
        padding: 12px;
        position: absolute;
        max-height: 243px;
        z-index: 10;
        white-space: nowrap;
    }
    .menu {
        background-clip: padding-box;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        list-style: none;
        text-align: left;

        overflow-y: scroll;
        max-height: 220px;
    }

    .menu::-webkit-scrollbar-track {
        border: none;
        background-color: none;
    }

    .menu::-webkit-scrollbar {
        width: 4px;
        margin-right: 12px;
    }

    .menu::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #d5dae0;
    }

    .menu-item {
        padding: 9px 14px;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
            border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    .menu-item:hover {
        background-color: #f4f6f6;
        cursor: pointer;
    }

    .btn {
        font-size: 14px;
        color: $light-text;
        padding: 7px 13px;
        border: 1px solid #d5dae0;
        box-sizing: border-box;
        border-radius: 2px;
    }

    .active {
        background-color: $selected-state;
        color: #fff;
    }

    .btn_disabled {
        border: 1px solid #c6cbd4;
        opacity: 0.3;
    }

    .btn:hover {
        cursor: pointer;
    }

    .custom-checkbox {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }
    .custom-checkbox + label {
        display: flex;
        align-items: center;
        user-select: none;
    }
    .custom-checkbox + label::before {
        content: "";
        display: inline-block;
        width: 14px;
        height: 14px;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid #c6cbd4;
        border-radius: 1px;
        margin-right: 0.5em;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
    }
    .custom-checkbox:checked + label::before {
        border-color: $selected-state;
        background-color: $selected-state;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
    }
    /* стили при наведении курсора на checkbox */
    .custom-checkbox:not(:disabled):not(:checked) + label:hover::before {
        border-color: $selected-state-shadow;
    }
    /* стили для активного состояния чекбокса (при нажатии на него) */
    .custom-checkbox:not(:disabled):active + label::before {
        background-color: $selected-state-shadow;
        border-color: $selected-state-shadow;
    }
    /* стили для чекбокса, находящегося в фокусе */
    .custom-checkbox:focus + label::before {
        box-shadow: none;
    }
    /* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
    .custom-checkbox:focus:not(:checked) + label::before {
        border: 1px solid #c6cbd4;
    }
    /* стили для чекбокса, находящегося в состоянии disabled */
    .custom-checkbox:disabled + label::before {
        background-color: #e9ecef;
    }
}
</style>
