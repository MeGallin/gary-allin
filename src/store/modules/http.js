import axios from 'axios';
const state = {
    descriptions: []
};

// THis is an alternative of getting the data
const getters = {
    allDescriptions: (state) => state.descriptions
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
    }
};

const mutations = {
    SET_RES(state, descriptions) {
        state.descriptions = descriptions
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}