import Vue from 'vue';
import Router from 'vue-router';
import Singer from 'components/singer/singer';
import Recommend from 'components/recommend/recommend';
import Rank from 'components/rank/rank';
import Search from 'components/search/search';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend,
    },
    {
      path: '/singer',
      component: Singer,
    },
    {
      path: '/rank',
      component: Rank,
    },
    {
      path: '/search',
      component: Search,
    },
  ],
});
