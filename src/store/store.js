import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Firebase from 'firebase'
 
Vue.use(VueAxios, axios)

Vue.use(Vuex)


const config = {
  };
Firebase.initializeApp(config);
let firebasescore = Firebase.database().ref('scores')

export default new Vuex.Store({
    state: {
        score: 0,
        practicequestion: [],
        timedquestion: [],
        diff: "",
        cat: 9,
        buzzamount: 20,
        cqnumber: 0,
        playername: "Anonymous",
        highscorebutton: false,
        allowscore: true,
        highscores20: [],
        highscores30: [],
        highscorecat: ""
    },
    mutations: {
        getquestion (state){
            axios.get("https://opentdb.com/api.php?amount=1&category=" + state.cat+ "&difficulty=" + state.diff + "&type=multiple")
        .then(response =>{
            state.practicequestion = response.data
        })},
        getbuzz20 (state){
            state.buzzamount = 20
            axios.get("https://opentdb.com/api.php?amount=20&type=multiple")
        .then(response =>{
            state.timedquestion = response.data
        })},
        getbuzz30 (state){
            state.buzzamount = 30
            axios.get("https://opentdb.com/api.php?amount=30&type=multiple")
        .then(response =>{
            state.timedquestion = response.data
        })},
        gethighscores20(state){
            firebasescore.child('twenty').limitToLast(100).once('value', snap => {
                let items = snap.val();
                let scoretransfer = [];
                for (let item in items) {
                      scoretransfer.push({
                        id: item,
                        name: items[item].name,
                        score: items[item].score
                      })
                      let sortedscores = scoretransfer.sort((a, b) => Number(b.score) - Number(a.score));
                      let slicedscores = sortedscores.slice(0,15)
                      state.highscores20 = slicedscores
                    }})
        },
        gethighscores30(state){
            firebasescore.child('thirty').limitToLast(100).once('value', snap => {
                let items = snap.val();
                let scoretransfer = [];
                for (let item in items) {
                      scoretransfer.push({
                        id: item,
                        name: items[item].name,
                        score: items[item].score
                      })
                      let sortedscores = scoretransfer.sort((a, b) => Number(b.score) - Number(a.score));
                      let slicedscores = sortedscores.slice(0,15)
                      state.highscores30 = slicedscores
                    }})
        },
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
        nextcq(state){
            if(state.cqnumber < state.buzzamount-1){
                state.cqnumber++
            } else if(state.cqnumber === state.buzzamount-1) {
                state.highscorebutton = true
                state.allowscore = false
            }
        },
        resethighscorebutton(state){
            state.highscorebutton = false
        },
        resetcq(state){
            state.cqnumber = 0
        },
        resetscore(state){
            state.score = 0
            state.allowscore = true
        },
        setplayername(state, name){
            state.playername = name
        },
        sethighscorecat30(state){
                state.highscorecat = "thirty"
        },
        sethighscorecat20(state){
             state.highscorecat = "twenty"
        },
        
    },
    actions: {
        nextquestion({commit}){
            commit('markcorrect')
            commit('getquestion')
        },
        startbuzz({commit, state}){
            commit('resetscore')
            commit('resetcq')
            commit('resethighscorebutton')
            if(state.buzzamount <= 20){
                commit('sethighscorecat20')
            }else if (state.buzzamount <= 30){
                commit('sethighscorecat30')
            }
        },
        sethighscore({state, commit}){    
            firebasescore.child(state.highscorecat).push({
              'name': state.playername,
              'score': state.score 
            })
            commit('resetscore')
        },
        gethighscores({commit}){
            commit('gethighscores20')
            commit('gethighscores30')
        }

    }
})