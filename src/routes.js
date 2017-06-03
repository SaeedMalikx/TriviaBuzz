import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import App from './App.vue'
import question from './components/question.vue'
import shop from './components/shop.vue'



export default new Router ({
    mode: 'history',
    routes: [
        {path: '/',component: App},
        {path: '/shop',component: shop},
        {path: '/question',component: question},
    ]
})