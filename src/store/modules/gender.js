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

export default {
    state,
    getters,
    mutations,
};