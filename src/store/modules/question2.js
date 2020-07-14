const state = {
    question2: ''
};
const getters = {
    question2: state => state.question2
};
const mutations = {
    updateQuestion2(state, newQuestion2){
        state.question2 = newQuestion2;
    },
};
const actions = {
    updateQuestion2({commit}, newQuestion2){
        commit('updateQuestion2', newQuestion2);
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};