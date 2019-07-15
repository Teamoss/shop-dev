<template>
    <div class="shopCar-container">
        <!--商品列表区域-->
        <div class="goodsList">
            <div class="mui-card" v-for="item in goodsList" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch></mt-switch>
                        <img :src="item.thumb_path" alt="">
                        <div >
                            <h1 class="goodsTitle">{{item.title}}</h1>
                            <p class="info">
                                <span class="price">￥{{item.sell_price}}</span>
                                <shopCarNumbox :initCount="$store.getters.getGoodsCount[item.id]" :goodsId="item.id"></shopCarNumbox>
                                <a href="">删除</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--商品结算区域-->
    </div>
</template>
<script>
    import shopCarNumbox from './../subcomponent/shopCar_numbox.vue'

    export default {
        data() {
            return {
                goodsList:[]
            }
        },
        created(){
            this.getAllShopGoods()
        },
        methods: {
            getAllShopGoods(){
                // 将获取到的商品id组合并用逗号隔开
                var idArr=[];
               this.$store.state.shopCar.forEach(item=>{
                   idArr.push(item.id)
               });
               if (idArr.length <= 0) {
                   return;
               }
                // 获取购物车商品列表
                this.$http.get('api/goods/getshopcarlist/'+idArr.join(',')).then(res=>{
                    if (res.body.status === 0) {
                        this.goodsList=res.body.message
                    }
                })

            }
        },
        components: {
            shopCarNumbox
        }
    }

</script>
<style lang="scss" scoped>
    .shopCar-container {
        background-color: #eee;
        overflow: hidden;
        .mui-card-content-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            img {
                width: 60px;
                height: 60px;
            }
            h1 {
                font-size: 13px;
                margin: 10px;
            }
            .info {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .price {
                    color: red;
                }
            }
        }

    }


</style>