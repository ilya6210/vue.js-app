import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [{
      path: "/",
      component: () => import("@/views/HomePage"),
      meta: {
        auth: true,
        title: "Home - Vue.js created website"
      }
    },
    {
      path: "/admin",
      component: () => import("@/views/AdminPage"),
      meta: {
        auth: true,
        title: "Admin Page - Vue.js created website"
      },
      children: [{
          path: '',
          component: () => import("@/views/AdminHomePage"),
          meta: {
            title: "Admin Dashboard - Vue.js created website"
          }
        },
        {
          path: 'table',
          component: () => import("@/views/ProductsTablePage"),
          meta: {
            title: "Admin Dashboard - Products Table list"
          }
        },
        {
          path: 'users',
          component: () => import("@/views/AdminUserProfilePage"),
          meta: {
            title: "Admin Dashboard - Users"
          },
        },
        {
          path: 'charts',
          component: () => import("@/views/AdminCharts"),
          meta: {
            title: "Admin Dashboard - Charts, created with Chart.js"
          },
        }
      ]
    },
    {
      path: "/contact",
      component: () => import("@/views/ContactPage"),
      meta: {
        auth: true,
        title: "Contact - Vue.js created website"
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.title == undefined) document.title = "My example title";
  else document.title = to.meta.title;
  next();
});


export default router;