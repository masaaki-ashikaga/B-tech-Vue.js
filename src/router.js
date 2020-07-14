import Vue from 'vue';
import Router from 'vue-router';
import FirstForm from './components/FirstForm.vue';
import SecondForm from './components/SecondForm.vue';
import ThirdForm from './components/ThirdForm.vue';
import ResultCheck from './components/ResultCheck.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', component: FirstForm},
        {path: '/second', component: SecondForm},
        {path: '/third', component: ThirdForm},
        {path: '/check', component: ResultCheck},
    ]
});