// 入口js文件
import Vue from 'vue';

//导入路由
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//导入vuex
import Vuex from 'vuex'

Vue.use(Vuex)

//App根组件
import app from './App.vue'

//按需要导入Mint-UI组件
// import {Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui';
// Vue.component(Button.name, Button);
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.use(Lazyload)
//全部引入MintUI解决懒加载无动画
import MintUI from 'mint-ui'

Vue.use(MintUI);
import 'mint-ui/lib/style.css'


//导入MUI样式
import './lib/css/mui.css';
//拓展MUI图标样式
import './lib/css/icons-extra.css'

//自己本地的router路由模块
import router from './router.js'

// 导入图片缩略图插件
import VuePreview from 'vue-preview'

Vue.use(VuePreview);

//导入vue-resource
import VueResource from 'vue-resource'

Vue.use(VueResource);
// 配置跟地址
Vue.http.options.root = 'http://www.liulongbin.top:3005';
// 配置表单提交格式 application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;

//导入时间格式化插件
import moment from 'moment'

Vue.filter('dateFormat', function (datastr, patterm = "YYYY-MM-DD") {
    return moment(datastr).format(patterm)
});

// 购物车数据本地持久化存储
var shopCar = JSON.parse(localStorage.getItem('shopCar') || '[]')
var store = new Vuex.Store({
    state: {
        shopCar: shopCar
    },
    mutations: {
        //获取添加过来的商品
        addToShopCar(state, goodsInfo) {
            var flag = false;
            state.shopCar.some(item => {
                if (item.id === goodsInfo.id) {
                    // 这里用item.count+= parseInt(goodsInfo.count)会出现字符串拼接情况
                    item.count = parseInt(item.count) + parseInt(goodsInfo.count);
                    // console.log(item.count);
                    flag = true;
                    return true
                }
            });
            if (!flag) {
                state.shopCar.push(goodsInfo)
            }
            localStorage.setItem('shopCar', JSON.stringify(state.shopCar))
        },
        //更新购物车商品数量
        updateGoodsCount(state, goodsObj) {
            state.shopCar.some(item => {
                if (item.id === goodsObj.id) {
                    item.count = parseInt(goodsObj.count);
                    return true
                }
            });
            localStorage.setItem('shopCar', JSON.stringify(state.shopCar))
        },
        //删除对应购物车商品数据并同步到本地存储中
        removeShopCarGoods(state, id) {
            state.shopCar.forEach((item, index) => {
                if (item.id === id) {
                    state.shopCar.splice(index, 1);
                    return true
                }
            });
            localStorage.setItem('shopCar', JSON.stringify(state.shopCar))
        },
        //修改商品状态
        updateGoodsSelected(state, goods) {
            state.shopCar.forEach(item => {
                if (item.id === goods.id) {
                    item.selected = goods.selected;
                    return true
                }
            });
            localStorage.setItem('shopCar', JSON.stringify(state.shopCar))
        }
    },
    getters: {
        // 获取购物车商品总数量
        getALLCount(state) {
            var sumGoods = 0;
            state.shopCar.forEach(item => {
                sumGoods += parseInt(item.count)
            });
            return sumGoods
        },
        //获取购物车商品初始数量
        getGoodsCount(state) {
            var goodsCount = {};
            state.shopCar.forEach(item => {
                goodsCount[item.id] = item.count
            });
            return goodsCount
        },
        // 获取购物车商品状态
        getGoodsSelected(state) {
            var objSelect = {};
            state.shopCar.forEach(item => {
                objSelect[item.id] = item.selected
            });
            return objSelect

        },
        // 购物车商品结算
        allGoodsAccount(state) {
            var goodsSum = {
                goodsNum: 0,
                goodsAccount: 0
            };
            state.shopCar.forEach(item => {
                if (item.selected) {
                    goodsSum.goodsNum += item.count;
                    goodsSum.goodsAccount += item.price * item.count
                }
            });
            return goodsSum
        }
    }

});

var vm = new Vue({
    el: '#app',
    data: {},
    render: c => c(app),
    router,
    store
});

