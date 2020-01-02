import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../components/HomePage.vue';
import LoginPage from '../components/LoginPage.vue';
import RegisterPage from '../components/RegisterPage.vue';
import MainPage from '../components/MainPage.vue';
import SelectTourPage from '../components/SelectTourPage.vue';

Vue.use(Router);

export const router = new Router({
    mode:'history',
    routes:[
        {path:'/home',component:HomePage},
        {path:'/login',component:LoginPage},
        {path:'/register',component:RegisterPage},
        {path:'/',component:MainPage},
        {path:'/selectTour',component:SelectTourPage}
    ]
})


router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login', '/register'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
  
    if (authRequired && !loggedIn) {
      return next('/login');
    }
  
    next();
  })