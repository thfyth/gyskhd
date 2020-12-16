import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    redirect: "/index",
    children: [{
        path: 'index',
        name: 'Index',
        component: () => import("@/views/Index"),
        meta: {
          title: '首页'
        }
      }, {
        path: 'dashboard',
        name: 'Dashboard',
        redirect: "/dashboard/applyCom/Brand",
        component: () => import("@/views/Dashboard"),
        children: [{
            path: 'applyCom',
            name: 'ApplyCom',
            redirect: "/dashboard/applyCom/Brand",
            component: () => import("@/views/ApplyCom"),
            children: [{
                path: 'brand',
                name: 'Brand',
                component: () => import("@/views/Brand"),
                meta: {
                  title: '品牌报名'
                }
              },
              {
                path: 'reserve',
                name: 'Reserve',
                component: () => import("@/views/Reserve"),
                meta: {
                  title: '储备报名'
                }
              },
              {
                path: 'bidding',
                name: 'Bidding',
                component: () => import("@/views/Bidding"),
                meta: {
                  title: '招标报名'
                }
              },
            ]
          },
          {
            path: '/apply',
            name: 'Apply',
            component: () => import("@/views/Apply"),
            meta: {
              title: '报名'
            }
          },
          {
            path: 'notice',
            name: 'Notice',
            component: () => import("@/views/Notice"),
            meta: {
              title: '通知公告'
            }
          },
          {
            path: 'profile',
            name: 'Profile',
            component: () => import("@/views/Profile"),
            meta: {
              title: '我的报名'
            }
          },
          {
            path: 'detail/:id',
            name: 'Detail',
            component: () => import("@/views/Detail"),
            meta: {
              title: '公告详情'
            }
          },
          {
            path: 'tenderNotice',
            name: 'TenderNotice',
            component: () => import("@/views/TenderNotice"),
            meta: {
              title: '招标公告'
            }
          },
          
        ]
      },
      


    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("@/views/Login"),
  },
  

]

const router = new VueRouter({
  routes
})

export default router