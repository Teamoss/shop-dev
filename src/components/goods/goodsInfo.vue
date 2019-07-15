<template>
    <div class="goodsInfo-container">
        <!--商品轮播图-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :imgList="imgList" :isFull="false"></swiper>
                </div>
            </div>
        </div>

        <!--商品购买区域-->
        <div class="mui-card">
            <div class="mui-card-header">{{imgInfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        <span>市场价：<del>{{imgInfo.market_price}}</del></span>&nbsp;&nbsp;&nbsp;
                        销售价:<span class="now_price"> ￥{{imgInfo.sell_price}}</span>
                    </p>
                    <p>购买数量 :
                        <goodsNumbox :class="['inline']" :maxNum="imgInfo.stock_quantity" @getCount="getSelCount"></goodsNumbox>
                    </p>
                    <mt-button type="primary" size="small">立刻购买</mt-button>
                    <mt-button type="danger" size="small" @click="addshopCar">加入购物车</mt-button>

                </div>
            </div>
        </div>

        <!--商品参数区域-->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号 :{{imgInfo.goods_no}}</p>
                    <p>库存情况 :{{imgInfo.stock_quantity}}</p>
                    <p>上架时间 :{{imgInfo.add_time | dateFormat}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button size="large" type="primary" plain @click="togoodsDesc(imgInfo.id)">图文介绍</mt-button>
                <mt-button size="large" type="danger" plain @click="togoodsComment(imgInfo.id)">商品评论</mt-button>
            </div>
        </div>

        <!--购物车小球动画-->
        <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
            <div class="box" v-show="flag" ref="box"></div>
        </transition>


    </div>
</template>
<script>
    import goodsNumbox from '../subcomponent/goodsInfo_numbox.vue'
    import swiper from './../subcomponent/swiper.vue'
    import {Toast} from 'mint-ui'

    export default {
        data() {
            return {
                id: this.$route.params.id,
                imgList: [],
                imgInfo: {},
                flag:false,
                selectedCount:1
            }
        },
        created() {
            this.getimgList();
            this.getimgInfo()
        },
        methods: {
            // 获取商品轮播图
            getimgList() {
                this.$http.get('api/getthumimages/' + this.id).then(res => {
                    if (res.body.status === 0) {
                        res.body.message.forEach(item => {
                            item.img = item.src
                        });
                        this.imgList = res.body.message
                    } else {
                        Toast("获取商品轮播图失败")
                    }
                })
            },
            // 获取商品参数
            getimgInfo() {
                this.$http.get('api/goods/getinfo/' + this.id).then(res => {
                    if (res.body.status === 0) {
                        this.imgInfo = res.body.message[0]
                    }
                })
            },
            // 跳转到商品介绍
            togoodsDesc(id) {
                this.$router.push({name: 'goodsDesc', params: {id}})
            },
            //跳转到商品评论区
            togoodsComment(id) {
                this.$router.push({name: 'goodsComment', params: {id}})
            },
            //添加商品到购物车
            addshopCar(){
                this.flag=!this.flag;
                var goodsObj={
                    id:this.id,
                    count: this.selectedCount,
                    price: this.imgInfo.sell_price,
                    selected:true
                };
                this.$store.commit('addToShopCar',goodsObj)
            },
            // 购物车小球动画
            beforeEnter(el){
                el.style.transform="translate(0,0)"
            },
            enter(el,done){
                el.offsetWidth;
                el.style.transition= 'all 0.5s cubic-bezier(.4,-0.3,1,.68)';
                //获取小球与购物车相对于视窗位置
                const box = this.$refs.box.getBoundingClientRect();
                const badge = document.getElementById('badge').getBoundingClientRect();
                const x =badge.left-box.left;
                const y =badge.top-box.top;
                el.style.transform=`translate(${x}px,${y}px)`;
                done()
            },
            afterEnter(el){
                this.flag=!this.flag
            },
            //获取子组件中购买商品数量
            getSelCount(data){
                this.selectedCount=data;
            }
        },
        components: {
            goodsNumbox,
            swiper
        }

    }

</script>
<style lang="scss" scoped>
    .goodsInfo-container /deep/ {
        background-color: #eee;
        overflow: hidden;
        position: relative;

        .now_price {
            color: red;
            font-size: 18px;
            font-weight: bold;
        }

        .inline {
            display: inline-block;
        }

        .mui-card-footer {
            display: block;

            button {
                margin-top: 10px;
            }
        }

        .box {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: red;
            position: absolute;
            left: 143px;
            top: 348px;
        }
    }

</style>