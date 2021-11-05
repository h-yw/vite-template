import { RouteRecordRaw } from "vue-router";
import Index from '@/views/index.vue';
// import About from '@/views/about.vue';
const routes: Array<RouteRecordRaw> = [
    {
      path: "/",
      name: "Home",
      component: Index,
    },
    {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
  ];

  export default routes;