import {
    getProducts,
    deleteProducts
} from '@/api/request'

//import deleteProducts

// initial state
const state = () => ({
    all: []
})

// getters
const getters = {
    getAllProducts: (state) => {
        return state.all;
    },
    getListByCount: (state) => (number) => {
        return state.all.filter((item, index) => index < number);
    },
    getProductsByRange: (state) => (from, to) => {
        return state.all.slice(from, to);
    },
    getProductsBySortAndRange: (state) => (order, current_sort, from, to) => {

        if (order !== "desc" && order !== "asc") {
            return state.all.concat().filter((row, index) => {
                let start =
                    from;
                let end = to;
                if (index >= start && index < end) return true;
            });
        } else
            return state.all.concat().sort((a, b) => {
                    let modifier = 1;
                    if (order === "desc") modifier = -1;
                    if (
                        a[current_sort] <
                        b[current_sort]
                    )
                        return -1 * modifier;
                    if (
                        a[current_sort] >
                        b[current_sort]
                    )
                        return 1 * modifier;

                    return 0;
                })
                .filter((row, index) => {
                    let start =
                        from;
                    let end = to;
                    if (index >= start && index < end) return true;
                });
    },
    getAllCount: (state) => {
        return state.all.length;
    }
}

// actions
const actions = {
    async getAllProducts({
        commit
    }) {
        return new Promise((resolve, reject) => {
            getProducts().then(response => {
                commit('setProducts', response);

                resolve({
                    message: true
                });
            }, error => {
                console.log(error.error)
                reject(error.error);
            })
        });
    },

    async deleteProducts({
        commit
    }, ids) {
        return new Promise((resolve, reject) => {
            deleteProducts().then(response => {
                commit("DELETE_PRODUCTS", ids);
                resolve(response);
            }, error => {
                reject(error)
            })
        });
    }

}

// mutations
const mutations = {
    setProducts(state, products) {
        state.all = products
    },

    DELETE_PRODUCTS(state, ids) {
        for (var i = 0; i < ids.length; i++) {
            let index = state.all.findIndex(product => product.id == ids[i])
            state.all.splice(index, 1)
        }
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}