import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        score: 3,
        posts: []
    },
    mutations: {
        getquestion (state){
            axios.get('https://opentdb.com/api.php?amount=1&type=multiple')
        .then(response =>{
            state.posts = response.data;
        })},
        markcorrect (state){
            state.score++
        }
    },
    actions: {
        nextquestion({commit}){
            commit('markcorrect')
            commit('getquestion')
        }
    }
})