import axios from 'axios';
const state = {
  homeDescriptions: [],
  aboutDescriptions: [],
  myWorkDescriptions: [],
  isLoading: false,
};

const getters = {
  homeDescriptions: state => state.homeDescriptions,
  aboutDescriptions: state => state.aboutDescriptions,
  myWorkDescriptions: state => state.myWorkDescriptions,
  isLoading: state => state.isLoading,
};

const actions = {
  getDescriptions(context) {
    context.commit('isLoading', true);
    const url = '../assets/Home/home.json';
    axios
      .get(url)
      .then(res => {
        setTimeout(() => {
          context.commit('SET_RES_HOME', res.data);
          context.commit('isLoading', false);
        }, 1000);
      })
      .catch(err => {
        console.log(err);
      });
  },
  getAboutDescriptions(context) {
    context.commit('isLoading', true);
    const url = '../assets/About/About.json';
    axios
      .get(url)
      .then(res => {
        setTimeout(() => {
          context.commit('SET_RES_ABOUT', res.data);
          context.commit('isLoading', false);
        }, 1000);
      })
      .catch(error => {
        console.log(error);
      });
  },
  getMyWorkDescriptions(context) {
    context.commit('isLoading', true);
    const url = '../php/news/myWork.txt';
    axios
      .get(url)
      .then(res => {
        setTimeout(() => {
          const readme = res.data;
          context.commit('SET_RES_MY_WORK', readme);
          context.commit('isLoading', false);
        }, 1000);
      })
      .catch(error => {
        console.log(error);
      });
  },
};

const mutations = {
  SET_RES_HOME(state, homeDescriptions) {
    state.homeDescriptions = homeDescriptions;
  },
  SET_RES_ABOUT(state, aboutDescriptions) {
    state.aboutDescriptions = aboutDescriptions;
  },
  SET_RES_MY_WORK(state, myWorkDescriptions) {
    state.myWorkDescriptions = myWorkDescriptions;
  },
  isLoading(state, newLoadingStatus) {
    state.isLoading = newLoadingStatus;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
