import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import main from './components/main.vue'
import question from './components/question.vue'
import practicequestion from './components/practicequestion.vue'
import questionintro from './components/questionintro.vue'
import highscores from './components/highscores.vue'



export default new Router ({
    mode: 'history',
    routes: [
        {path: '/',component: main},
        {path: '/question',component: question},
        {path: '/practicequestion',component: practicequestion},
        {path: '/questionintro',component: questionintro},
        {path: '/highscores',component: highscores}
    ]
})