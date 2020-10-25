<template>
    <div
        class="modal_wrap"
        :style="{
            top: params.deleteModalTop + 'px',
            left: params.deleteModalLeft + 'px',
        }"
    >
        <div class="mx-auto">
            <p>
                Are you sure you want to
                <b>
                    delete
                    <span v-if="!params.deleteId">
                        {{ params.deleteIds.length }}
                    </span>
                    item<span
                        v-if="!params.deleteId && params.deleteIds.length > 1"
                        >s</span
                    > </b
                >?
            </p>
            <button class="btn cancel" @click="hideModal">
                Cancel
            </button>
            <button class="btn delete active ml-3" @click="deleteItems">
                Confirm
            </button>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    props: ["params"],
    data: function() {
        return {};
    },
    methods: {
        ...mapActions({ deleteProducts: "products/deleteProducts" }),
        hideModal() {
            this.params.showDeleteModal = false;
            if (this.params.deleteId || this.params.deleteId === 0)
                this.params.deleteId = false;
        },
        async deleteItems() {
            if (this.params.deleteId !== false) {
                this.deleteProducts([this.params.deleteId]).then(
                    (response) => {
                        console.log(response);
                        this.params.showDeleteModal = false;
                        this.params.deleteIds.splice(
                            this.params.deleteIds.indexOf(this.params.deleteId),
                            1
                        );
                        this.params.deleteId = false;
                    },
                    (error) => {
                        console.log(error);
                    }
                );
            } else {
                this.deleteProducts(this.params.deleteIds).then(
                    (response) => {
                        console.log(response);
                        this.params.showDeleteModal = false;
                        this.params.deleteIds = [];
                    },
                    (error) => {
                        console.log(error);
                    }
                );
            }
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.modal_wrap {
    width: 300px;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
    position: absolute;
    z-index: 99999;
    margin: 0 auto;

    .btn {
        border-radius: 4px;
    }

    p {
        color: #000;
    }
}
.delete {
    margin-right: 12px;
    padding: 7px 14px;

    white-space: nowrap;
}
</style>
