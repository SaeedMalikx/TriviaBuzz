import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import main from './components/main.vue'
import question from './components/question.vue'
import difficulty from './components/difficulty.vue'



export default new Router ({
    mode: 'history',
    routes: [
        {path: '/',component: main},
        {path: '/difficulty',component: difficulty},
        {path: '/question',component: question},
    ]
})