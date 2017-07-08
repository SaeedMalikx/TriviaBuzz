import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        score: 0,
        practicequestion: [],
        timedquestion: [],
        diff: "",
        cat: 9,
        countdown: 10,
        buzzamount: 20,
        cqnumber: 1
    },
    mutations: {
        getquestion (state){
            axios.get("https://opentdb.com/api.php?amount=1&category=" + state.cat+ "&difficulty=" + state.diff + "&type=multiple")
        .then(response =>{
            state.practicequestion = response.data
        })},
        gettimeattack (state){
            axios.get("https://opentdb.com/api.php?amount=" + state.buzzamount +"&type=multiple")
        .then(response =>{
            state.timedquestion = response.data
        })},
        markcorrect (state){
            state.score +=2
        },
        markincorrect (state){
            if (state.score > 0){
                state.score--
            }
        },
        changediff (state, diff){
            state.diff=diff
        },
        changecategory(state, n){
            state.cat=n
        },
        setplayername(state, name){
            state.playername=name
        },
        updatecountdown(state){
            setInterval(() => {
                if(state.countdown > 0)
              state.countdown--
            }, 1000);
        },
        nextcq(state){
            if(state.cqnumber < 50){
                state.cqnumber++
            } else {
                state.showhighscores = true
            }
        },
        setbuzzamount(state, buzz){
            state.buzzamount = buzz
        }
        
    },
    actions: {
        nextquestion({commit}){
            commit('markcorrect')
            commit('getquestion')
        },

    }
})