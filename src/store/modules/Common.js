const state = {
  isSubmitted: false,
  openModal: false,
};

const getters = {
  isSubmitted: state => state.isSubmitted,
  openModal: state => state.openModal,
};

const mutations = {
  handleCommit: function(state) {
    return state.isSubmitted;
  },
  SET_MODAL: function(state) {
    return state.openModal;
  },
};

const actions = {
  handleCommit(context, payload) {
    if (payload === 'isSubmitted') {
      state.isSubmitted = true;
    }
    context.commit('handleCommit', payload);
  },
  handleModal(context, payload) {
    if (payload === true) {
      state.openModal = payload;
    } else {
      state.openModal = payload;
    }

    context.commit('SET_MODAL', payload);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
