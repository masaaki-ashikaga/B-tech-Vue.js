const state = {
    question3: ''
};
const getters = {
    question3: state => state.question3
};
const mutations = {
    updateQuestion3(state, newQuestion3){
        state.question3 = newQuestion3;
    },
};
const actions = {
    updateQuestion3({commit}, newQuestion3){
        commit('updateQuestion3', newQuestion3);
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};