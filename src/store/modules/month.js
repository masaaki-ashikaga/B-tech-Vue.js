const state = {
    month: ''
};
const getters = {
    month: state => state.month
};
const mutations = {
    updateMonth(state, newMonth){
        state.month = newMonth;
    },
};

export default {
    state,
    getters,
    mutations,
};