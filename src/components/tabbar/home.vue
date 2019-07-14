<template>
    <div>
        <!--轮播图-->
        <swiper :imgList="imgList" :isFull="true"></swiper>

        <!--六宫格图标-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newsList">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photosList">
                    <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodsList">
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div>
            </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div>
            </a></li>
        </ul>

    </div>
</template>
<script>
    import {Toast} from "mint-ui"
    import swiper from './../subcomponent/swiper.vue'

    export default {
        data() {
            return {
                imgList: [],
            }
        },
        created() {
            this.getLunbotu();
        },
        methods: {
            getLunbotu() {
                // 获取首页轮播图
                this.$http.get("api/getlunbo").then(res => {
                    if (res.body.status === 0) {
                        this.imgList = res.body.message;
                    } else {
                        Toast("获取图片失败")
                    }
                })
            }
        },
        components:{
            swiper
        }
    }
</script>
<style scoped>
    /*.mint-swipe {*/
        /*height: 200px;*/
    /*}*/

    /*img {*/
        /*width: 100%;*/
        /*height: 100%;*/
    /*}*/

    .mui-grid-view.mui-grid-9 {
        background: white;
        border: none;
    }

    .mui-grid-view.mui-grid-9 img {
        height: 60px;
        width: 60px;
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: none;
    }

    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
        font-size: 13px;
    }
</style>