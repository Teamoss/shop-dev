// 入口js文件
import Vue from 'vue';

//导入路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//App根组件
import app from './App.vue'

//按需要导入Mint-UI组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

//导入MUI样式
import './lib/css/mui.css'
//拓展图标样式
import './lib/css/icons-extra.css'

//自己本地的router路由模块
import router from './router.js'


var vm = new Vue({
    el: '#app',
    data: {

    },
     render:c=>c(app),
    // router
})

