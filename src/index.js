// 入口js文件
import Vue from 'vue';

//导入路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//App根组件
import app from './App.vue'

//按需要导入Mint-UI组件
import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


//导入MUI样式
import './lib/css/mui.css'
//拓展MUI图标样式
import './lib/css/icons-extra.css'

//自己本地的router路由模块
import router from './router.js'


//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root='http://www.liulongbin.top:3005';

//导入时间格式化插件
import moment from 'moment'
Vue.filter('dateFormat',function (datastr,patterm="YYYY-MM-DD") {
    return moment(datastr).format(patterm)
})

var vm = new Vue({
    el: '#app',
    data: {

    },
     render:c=>c(app),
    router
})

