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

export default {
    state,
    getters,
    mutations,
};