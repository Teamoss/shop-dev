<template>
    <div>
        <!--顶部分类滑动条区域-->
        <div id="slider" class="mui-slider ">
            <div id="sliderSegmentedControl"
                 class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',item.id===0?'mui-active':'' ]" href="#item1mobile" data-wid="tab-top-subpage-1.html"
                       v-for="item in category" :key="item.id" @click="getcategoryImg(item.id)">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>

        <!--图片列表区域-->
        <div>
            <ul class="img">
                <li v-for="item in categoryImg">
                    <img :src=item.img_url alt="">
                    <div class="img-info">
                        <p class="img-title">{{item.title}}</p>
                        <p class="img-message">{{item.zhaiyao}}</p>
                    </div>
                </li>
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
                categoryImg:[]
            }
        },
        created() {
            this.getCategory();
            this.getcategoryImg(0)
        },
        mounted(){
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
            getcategoryImg(id){
                this.$http.get('api/getimages/'+id).then(res=>{
                    if(res.body.status===0){
                        this.categoryImg=res.body.message
                    }else {
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
        list-style: none;
        position: relative;
    }
     .img-info {
        position: absolute;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.4);
    }

</style>