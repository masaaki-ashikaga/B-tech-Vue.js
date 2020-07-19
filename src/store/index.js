import Vue from 'vue';
import Vuex from 'vuex';
import gender from './modules/gender';
import year from './modules/year';
import month from './modules/month';
import date from './modules/date';
import message from './modules/message';
import question1 from './modules/question1';
import question2 from './modules/question2';
import question3 from './modules/question3';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        gender,
        year,
        month,
        date,
        message,
        question1,
        question2,
        question3,
    }
})