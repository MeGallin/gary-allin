import axios from 'axios';
const state = {
    descriptions: [],
    aboutDescriptions: []
};

// THis is an alternative of getting the data
const getters = {
    allDescriptions: (state) => state.descriptions,
    allAboutDescriptions: (state) => state.allAboutDescriptions
};
// THis is an alternative of getting the data

const actions = {
    getDescriptions({commit}) {
        const url = '../assets/Home/home.json';
        axios.get(url)
        .then(res => {
            commit('SET_RES', res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    },
    getAboutDescriptions({commit}) {
        const url = '../assets/About/About.json';
        axios.get(url)
        .then(res => {
            commit('SET_RES_ABOUT', res.data)
        })
        .catch((error) => {
            console.log(error);
        })
    }
};

const mutations = {
    SET_RES(state, descriptions) {
        state.descriptions = descriptions
    },
    SET_RES_ABOUT(state, aboutDescriptions) {
        state.aboutDescriptions = aboutDescriptions
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}