import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../components/HomePage.vue';
import LoginPage from '../components/LoginPage.vue';
import RegisterPage from '../components/RegisterPage.vue';
import MainPage from '../components/MainPage.vue';
import SelectTourPage from '../components/SelectTourPage.vue';
import TourDetail from '../components/TourDetail.vue';
import ComplatedPage from '../components/ComplatedPage.vue';
import UserPage from '../components/UserPage.vue';

Vue.use(Router);

export const router = new Router({
    mode:'history',
    routes:[
        {path:'/home',component:HomePage},
        {path:'/login',component:LoginPage},
        {path:'/register',component:RegisterPage},
        {path:'/',component:MainPage,props:true},
        {name:'tour', path:'/tour/:from/:to/:date',component:SelectTourPage},
        {name:'detail', path:'/detail/:id',component:TourDetail},
        {path:'/complated',component:ComplatedPage},
        {name:'user', path:'/user',component:UserPage,props:true}
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