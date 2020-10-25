<template>
    <div class="mx-auto">
        <button
            @click="showDeleteModal"
            class="btn delete"
            ref="delete_btn"
            :disabled="params.deleteIds.length == 0"
            :class="{
                btn_disabled: params.deleteIds.length == 0,
                active: params.deleteIds.length != 0,
            }"
        >
            Delete
            {{
                params.deleteIds.length
                    ? "(" + params.deleteIds.length + ")"
                    : ""
            }}
        </button>
    </div>
</template>

<script>
export default {
    props: ["params"],
    data: function() {
        return {};
    },
    methods: {
        showDeleteModal() {
            if (this.params.deleteId || this.params.deleteId === 0)
                this.params.deleteId = false;
            this.params.showDeleteModal = true;
            this.params.deleteModalTop =
                this.$refs.delete_btn.getBoundingClientRect().bottom +
                window.scrollY +
                10;
            this.params.deleteModalLeft =
                this.$refs.delete_btn.getBoundingClientRect().left +
                window.scrollX;
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.delete {
    margin-right: 12px;
    padding: 7px 14px;

    white-space: nowrap;
}
</style>
