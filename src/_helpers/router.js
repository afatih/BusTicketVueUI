import Vue from 'vue';
import Router from 'vue-router';

import LoginPage from '../components/LoginPage.vue';
import RegisterPage from '../components/RegisterPage.vue';
import MainPage from '../components/MainPage.vue';
import SelectTourPage from '../components/SelectTourPage.vue';
import TourDetail from '../components/TourDetail.vue';
import ComplatedPage from '../components/ComplatedPage.vue';
import UserPage from '../components/UserPage.vue';
import ActivationPage from '../components/ActivationPage.vue';
import RegisterComplatedPage from '../components/RegisterComplatedPage.vue';

Vue.use(Router);

export const router = new Router({
    mode:'history',
    routes:[
        {path:'/login',component:LoginPage},
        {path:'/register',component:RegisterPage},
        {path:'/',component:MainPage,props:true},
        {name:'tour', path:'/tour/:from/:to/:date',component:SelectTourPage},
        {name:'detail', path:'/detail/:id',component:TourDetail},
        {path:'/complated',component:ComplatedPage},
        {name:'user', path:'/user',component:UserPage,props:true},
        {name:'activation', path:'/activation',component:ActivationPage},
        {name:'registerComplated', path:'/registerComplated',component:RegisterComplatedPage}
    ]
})


router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login', '/register','/activation','/registerComplated'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
  
    if (authRequired && !loggedIn) {
      return next('/login');
    }
  
    next();
  })