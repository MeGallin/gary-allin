const state = {
isSubmitted: false,
};

const getters = {
isSubmitted: (state) => state.isSubmitted,
};

const actions = {
handleCommit({ commit }, payload) {
    if (payload === 'isSubmitted') {
        state.isSubmitted = true;
        }
        commit('handleCommit', payload);
    },
};

const mutations = {
handleCommit: function(state) {   
    return state.isSubmitted;
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}