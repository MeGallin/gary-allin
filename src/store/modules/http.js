import axios from 'axios';
const state = {
    descriptions: [],
    aboutDescriptions: [],
    myWorkDescriptions: [],
    isLoading: false
};

// THis is an alternative of getting the data
const getters = {
    allDescriptions: (state) => state.descriptions,
    allAboutDescriptions: (state) => state.allAboutDescriptions,
    myWorkDescriptions: (state) => state.myWorkDescriptions,
    isLoading: (state) => state.isLoading
};
// THis is an alternative of getting the data

const actions = {
    getDescriptions({commit}) {
        commit('isLoading', true)
        const url = '../assets/Home/home.json';
        axios.get(url)
        .then(res => {
            setTimeout(() => {
                commit('SET_RES', res.data)
                commit('isLoading', false)
            }, 1000);
            
        })
        .catch((err) => {
            console.log(err);
        })
    },
    getAboutDescriptions({commit}) {
        commit('isLoading', true)
        const url = '../assets/About/About.json';
        axios.get(url)
        .then(res => {
            setTimeout(() => {
                commit('SET_RES_ABOUT', res.data)
                commit('isLoading', false)
            }, 1000);
        })
        .catch((error) => {
            console.log(error);
        })
    },
    getMyWorkDescriptions({commit}) {
        commit('isLoading', true)
        const url = '../php/news/myWork.txt';
        axios.get(url)
        .then(res => {
            setTimeout(() => {
                const readme = res.data;
                commit('SET_RES_MY_WORK', readme)
                commit('isLoading', false)  
            }, 1000);
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
    },
    SET_RES_MY_WORK(state, myWorkDescriptions) {
        state.myWorkDescriptions = myWorkDescriptions
    },
    isLoading(state, newLoadingStatus) {
        state.isLoading = newLoadingStatus
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}