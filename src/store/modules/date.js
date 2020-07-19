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

export default {
    state,
    getters,
    mutations,
};