import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        score: 0,
        posts: [],
        diff: "easy",
        cat: 9
    },
    mutations: {
        getquestion (state){
            axios.get("https://opentdb.com/api.php?amount=1&category=" + state.cat+ "&difficulty=" + state.diff + "&type=multiple")
        .then(response =>{
            state.posts = response.data;
        })},
        markcorrect (state){
            state.score++
        },
        changediffeasy(state){
            state.diff="easy"
        },
        changediffmedium(state){
            state.diff="medium"
        },
        changediffhard(state){
            state.diff="hard"
        },
        changecategory(state, n){
            state.cat=n
        }
    },
    actions: {
        nextquestion({commit}){
            commit('markcorrect')
            commit('getquestion')
        },

    }
})