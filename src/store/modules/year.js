const state = {
    year: ''
};
const getters = {
    year: state => state.year
};
const mutations = {
    updateYear(state, newYear){
        state.year = newYear;
    },
};
const actions = {
    updateYear({commit}, newYear){
        commit('updateYear', newYear);
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};