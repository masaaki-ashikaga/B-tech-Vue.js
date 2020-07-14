const state = {
    gender: ''
};
const getters = {
    gender: state => state.gender
};
const mutations = {
    updateGender(state, newGender){
        state.gender = newGender;
    },
};
const actions = {
    updateGender({commit}, newGender){
        commit('updateGender', newGender);
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};