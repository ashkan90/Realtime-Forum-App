require('./bootstrap');

window.Vue = require('vue');
window.User = require('./helpers/User.js');


import Vue from 'vue'
import Vuetify from 'vuetify'
import VueSimplemde from 'vue-simplemde'
import md from 'marked'
import router from './routes/web.js'
import User from './helpers/User.js'
import Form from './helpers/Form.js'



window.User = User
window.Form = Form
window.EventBus = new Vue()
window.md = md

Vue.use(Vuetify)
Vue.use(VueSimplemde)


Vue.component('Home', require('./components/views/Home.vue'));


const app = new Vue({
    el: '#app',
    router
});
