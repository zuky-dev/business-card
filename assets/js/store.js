import { createStore } from "vuex";

const store = createStore({
    state: {
        data: null,
    },
    mutations: {
        data(state, value){
            state.data = value;
        }
    },
    actions: {
        setData(state, data){
            state.commit('data', data);
        }
    },
    modules: {},
    getters: {
        data: state => state.data
    }
});

export default store;