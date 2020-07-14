const state = {
    date: ''
};
const getters = {
    date: state => state.date
};
const mutations = {
    updateDate(state, newDate){
        state.date = newDate;
    },
};
const actions = {
    updateDate({commit}, newDate){
        commit('updateDate', newDate);
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};