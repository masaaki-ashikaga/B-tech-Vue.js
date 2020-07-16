const state = {
    message: ''
};
const getters = {
    message: state => state.message
};
const mutations = {
    updateMessage(state, newMessage){
        state.message = newMessage;
    },
};

export default {
    state,
    getters,
    mutations,
};