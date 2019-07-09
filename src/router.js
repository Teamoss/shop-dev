import VueRouter from 'vue-router';
import home from './components/tabbar/home.vue';
import member from './components/tabbar/member.vue'
import search from './components/tabbar/search.vue'
import shopcar from './components/tabbar/shopcar.vue'

var router =new VueRouter({
    routes:[
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/shopcar',component:shopcar},
        {path:'/search',component:search}
    ],
    linkActiveClass:'mui-active'
})
export default router