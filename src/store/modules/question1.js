const state = {
    question1: ''
};
const getters = {
    question1: state => state.question1
};
const mutations = {
    updateQuestion1(state, newQuestion1){
        state.question1 = newQuestion1;
    },
};

export default {
    state,
    getters,
    mutations,
};