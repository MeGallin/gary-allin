const state = {
  isSubmitted: false,
};

const getters = {
  isSubmitted: state => state.isSubmitted,
};

const mutations = {
  handleCommit: function(state) {
    return state.isSubmitted;
  },
};

const actions = {
  handleCommit(context, payload) {
    if (payload === 'isSubmitted') {
      state.isSubmitted = true;
    }
    context.commit('handleCommit', payload);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
