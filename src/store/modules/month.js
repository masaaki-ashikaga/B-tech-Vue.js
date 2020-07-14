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
const actions = {
    updateMonth({commit}, newMonth){
        commit('updateMonth', newMonth);
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};