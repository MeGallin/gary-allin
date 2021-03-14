import axios from 'axios';
import apiKey from '../../__env.json';

const state = {
  vueDescriptionLength: null,
  angularDescriptionLength: null,
  reactDescriptionLength: null,
  quote: '',
  originator: '',
  homeDescriptions: [],
  angularDescription: [],
  vueDescription: [],
  reactDescription: [],
  aboutDescriptions: [],
  myWorkDescriptions: [],
  cvDescriptions: [],
  isLoading: false,
};

const getters = {
  angularDescriptionLength: state => state.angularDescriptionLength,
  vueDescriptionLength: state => state.vueDescriptionLength,
  reactDescriptionLength: state => state.reactDescriptionLength,
  quote: state => state.quote,
  originator: state => state.originator,
  homeDescriptions: state => state.homeDescriptions,
  angularDescription: state => state.angularDescription,
  vueDescription: state => state.vueDescription,
  reactDescription: state => state.reactDescription,
  aboutDescriptions: state => state.aboutDescriptions,
  myWorkDescriptions: state => state.myWorkDescriptions,
  cvDescriptions: state => state.cvDescriptions,
  isLoading: state => state.isLoading,
};

const actions = {
  getQuotes(context) {
    context.commit('isLoading', true);
    axios
      .request({
        method: 'GET',
        url: 'https://quotes15.p.rapidapi.com/quotes/random/',
        headers: {
          'x-rapidapi-key': apiKey.rapidApi.rapidAPIKey,
          'x-rapidapi-host': apiKey.rapidApi.xRapidapiHost,
        },
      })
      .then(res => {
        setTimeout(() => {
          context.commit('SET_RES_QUOTES', res.data);
          context.commit('isLoading', false);
        }, 1000);
      })
      .catch(err => {
        console.log(err);
      });
  },
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
  getCvDescriptions(context) {
    context.commit('isLoading', true);
    const url = '../assets/CV/cv.json';
    axios
      .get(url)
      .then(res => {
        setTimeout(() => {
          context.commit('SET_RES_CV', res.data);
          context.commit('isLoading', false);
        }, 1000);
      })
      .catch(error => {
        console.error(error);
      });
  },
  getAngularDescription(context) {
    context.commit('isLoading', true);
    const url = '../assets/Home/angularProject.json';
    axios
      .get(url)
      .then(res => {
        const count =
          res.data[1]['description'].split(' ').length +
          res.data[1]['descriptionTwo'].split(' ').length +
          res.data[1]['descriptionThree'].split(' ').length;

        context.commit('SET_ANGULAR_DESCRIPTION_LENGTH', count);

        setTimeout(() => {
          context.commit('SET_RES_ANGULAR_PROJECT', res.data);
          context.commit('isLoading', false);
        }, 1000);
      })
      .catch(error => {
        console.error(error);
      });
  },
  getVueDescription(context) {
    context.commit('isLoading', true);
    const url = '../assets/Home/vueProject.json';
    axios
      .get(url)
      .then(res => {
        const count =
          res.data[1]['description'].split(' ').length +
          res.data[1]['descriptionTwo'].split(' ').length;

        context.commit('SET_VUE_DESCRIPTION_LENGTH', count);

        setTimeout(() => {
          context.commit('SET_RES_VUE_PROJECT', res.data);
          context.commit('isLoading', false);
        }, 1000);
      })
      .catch(error => {
        console.error(error);
      });
  },
  getReactDescription(context) {
    context.commit('isLoading', true);
    const url = '../assets/Home/reactProject.json';
    axios
      .get(url)
      .then(res => {
        const count =
          res.data[1]['description'].split(' ').length +
          res.data[1]['descriptionTwo'].split(' ').length;

        context.commit('SET_REACT_DESCRIPTION_LENGTH', count);

        setTimeout(() => {
          context.commit('SET_RES_REACT_PROJECT', res.data);
          context.commit('isLoading', false);
        }, 1000);
      })
      .catch(error => {
        console.error(error);
      });
  },
};

const mutations = {
  SET_REACT_DESCRIPTION_LENGTH(state, reactDescriptionLength) {
    state.reactDescriptionLength = reactDescriptionLength;
  },
  SET_ANGULAR_DESCRIPTION_LENGTH(state, angularDescriptionLength) {
    state.angularDescriptionLength = angularDescriptionLength;
  },
  SET_VUE_DESCRIPTION_LENGTH(state, vueDescriptionLength) {
    state.vueDescriptionLength = vueDescriptionLength;
  },
  SET_RES_QUOTES(state, quotes) {
    state.quote = quotes.content;
    state.originator = quotes.originator.name;
  },
  SET_RES_HOME(state, homeDescriptions) {
    state.homeDescriptions = homeDescriptions;
  },
  SET_RES_ANGULAR_PROJECT(state, angularDescription) {
    state.angularDescription = angularDescription;
  },
  SET_RES_VUE_PROJECT(state, vueDescription) {
    state.vueDescription = vueDescription;
  },
  SET_RES_REACT_PROJECT(state, reactDescription) {
    state.reactDescription = reactDescription;
  },
  SET_RES_ABOUT(state, aboutDescriptions) {
    state.aboutDescriptions = aboutDescriptions;
  },
  SET_RES_MY_WORK(state, myWorkDescriptions) {
    state.myWorkDescriptions = myWorkDescriptions;
  },
  SET_RES_CV(state, cvDescriptions) {
    state.cvDescriptions = cvDescriptions;
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
