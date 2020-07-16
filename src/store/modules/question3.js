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

export default {
    state,
    getters,
    mutations,
};