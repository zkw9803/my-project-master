import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import login from '../components/view/login'
import enroll from '../components/view/enroll'
import Index from '../components/view/Index'
import backstage from '../components/view/backstage'
import manage from '../components/view/manage'
import AdminIndex from "../components/view/AdminIndex";
import one from "../components/view/one";
import three from "../components/view/three";
Vue.use(Router)

//
const routers = [
  {path: '/login', name: 'login', component: login},
  {path: '/one', name: 'one', component: one,
    children:[{path: '/three', name: 'three', component: three}]
  },
  {path: '/backstage', name: 'backstage', component: backstage},
  {path: '/enroll', name: 'enroll', component: enroll},
  {path: '/', name: 'Index', component: Index},
  {path: '/Index', name: 'Index', component: Index},
  {path: '/AdminIndex', name: 'AdminIndex', component: AdminIndex,
    children:[{path: '/manage', name: 'manage', component: manage}]
  },
]

export default new Router({
  mode: 'history',
  routes: routers

  // router: {
  //     path: '/',
  //     name: 'HelloWorld',
  //     component: HelloWorld
  //   }

})
