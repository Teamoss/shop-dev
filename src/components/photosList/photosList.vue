<template>
    <div>
        <!--顶部分类滑动条区域-->
        <!--click设置为tap防止在手机中无法点击问题-->
        <div id="slider" class="mui-slider ">
            <div id="sliderSegmentedControl"
                 class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',item.id===0?'mui-active':'' ]" href="#item1mobile"
                       data-wid="tab-top-subpage-1.html"
                       v-for="item in category" :key="item.id" @tap="getcategoryImg(item.id)">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>

        <!--图片列表区域-->
        <div>
            <ul class="img">
                <router-link v-for="item in categoryImg" tag="li" :key="item.id" :to="'/home/photosMessage/'+item.id">
                    <img v-lazy="item.img_url">
                    <div class="img-info">
                        <p class="img-title">{{item.title}}</p>
                        <p class="img-message">{{item.zhaiyao}}</p>
                    </div>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui'
    // 导入MUI JS文件
    import mui from '../../lib/js/mui'

    export default {
        data() {
            return {
                category: [],
                categoryImg: []
            }
        },
        created() {
            this.getCategory();
            this.getcategoryImg(0)
        },
        mounted() {
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods: {
            // 获取列表分类
            getCategory() {
                this.$http.get('api/getimgcategory').then(res => {
                    if (res.body.status === 0) {
                        res.body.message.unshift({title: '全部', id: 0})
                        this.category = res.body.message
                    } else {
                        Toast('获取图片列表失败')
                    }
                })
            },
            // 获取列表图片
            getcategoryImg(id) {
                this.$http.get('api/getimages/' + id).then(res => {
                    if (res.body.status === 0) {
                        this.categoryImg = res.body.message
                    } else {
                        Toast('获取图片列表失败')
                    }
                })
            }

        }
    }

</script>
<style scoped>
    * {
        touch-action: pan-y;
    }

    .img {
        margin: 0;
        padding: 0 4px;
    }

    .img li {
        list-style: none;
        position: relative;
        margin-bottom: 10px;
    }

    img {
        width: 100%;
    }
    image[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
    .img-info {
        position: absolute;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.4);
        text-align: left;
        overflow: hidden;
        max-height: 86px;
    }

    .img-title {
        color: white;
        font-size: 14px;
        margin: 3px;
    }

    .img-message {
        color: white;
        font-size: 12px;
        text-indent: 2em;
    }
</style>