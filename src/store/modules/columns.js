// initial state
const state = () => ({
    all: ["Product (100g serving)", "Calories", "Fat (g)", "Carbs (g)", "Protein (g)", "Iron (%)"]
})

// getters
const getters = {
    getAll: (state) => {
        return state.all;
    }
}

export default {
    namespaced: true,
    state,
    getters
}