// 入口js文件
import Vue from 'vue';

//导入路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//App根组件
import app from './App.vue'

//按需要导入Mint-UI组件
import { Header,Swipe, SwipeItem ,Toast} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Toast)

//导入MUI样式
import './lib/css/mui.css'
//拓展MUI图标样式
import './lib/css/icons-extra.css'

//自己本地的router路由模块
import router from './router.js'

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

var vm = new Vue({
    el: '#app',
    data: {

    },
     render:c=>c(app),
    router
})

