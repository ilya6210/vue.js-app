<template>
    <div class="group_sorting">
        <span class="group_span mx-auto mx-sm-0">Sorting by:</span>
        <ol class="columns d-inline d-sm-flex mx-auto mx-sm-0">
            <li
                v-for="item in params.allColumns"
                :key="item"
                :class="{ active: active == item }"
                @click="toggleActive(item)"
            >
                {{ item }}
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    props: ["params"],
    data: function() {
        return {
            active: "",
        };
    },
    computed: {},
    methods: {
        toggleActive: function(item) {
            if (this.active == item) {
                this.active = "";
                this.params.columnsOrder = this.params.allColumns.slice();
            } else {
                this.active = item;
                this.params.columnsOrder = this.params.allColumns.slice();

                if (this.params.columnsOrder[0] != item) {
                    this.params.columnsOrder.splice(
                        this.params.columnsOrder.indexOf(item),
                        1
                    );
                    this.params.columnsOrder.splice(0, 0, item);
                }
            }
        },
    },
    created: function() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.group_sorting {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .columns {
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        padding: 0px;
        margin-bottom: 0;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none;

        li {
            margin-left: 3px;
            border: 1px solid transparent;
            padding: 7px 6px;
            border-radius: 2px;
            white-space: nowrap;
        }
        li:first-of-type {
            margin-left: 8px;
        }
        li:hover {
            border: 1px solid #d5dae0;
            cursor: pointer;
        }
        li:focus {
            outline: none;
        }
        li.active {
            border: 1px solid $selected-state;
            background-color: $selected-state;
        }
        @media only screen and (max-device-width: 600px) {
            li:hover {
                border: 1px solid transparent;
            }
        }
    }
}
.group_span {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    white-space: nowrap;
}
</style>
