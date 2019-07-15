<template>
    <div>
        <!--商品列表区域-->
        <div class="goodsList">
            <div class="mui-card" v-for="(item,index) in goodsList" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch v-model="$store.getters.getGoodsSelected[item.id]" @change="changeSecleted(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
                        <img :src="item.thumb_path" alt="">
                        <div>
                            <h1 class="goodsTitle">{{item.title}}</h1>
                            <p class="info">
                                <span class="price">￥{{item.sell_price}}</span>
                                <shopCarNumbox :initCount="$store.getters.getGoodsCount[item.id]"
                                               :goodsId="item.id"></shopCarNumbox>
                                <a href="#" @click.prevent="removeShopGoods(item.id, index)">删除</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--商品结算区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner case">
                   <div class="left">
                       <p>总计(不含运费)</p>
                       <p>已勾选商品<span class="red"> {{$store.getters.allGoodsAccount.goodsNum}} </span>件， 总价:&nbsp;<span class="red">￥{{$store.getters.allGoodsAccount.goodsAccount}}</span>  </p>
                   </div>
                    <mt-button type="danger">结算</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import shopCarNumbox from './../subcomponent/shopCar_numbox.vue'

    export default {
        data() {
            return {
                goodsList: []
            }
        },
        created() {
            this.getAllShopGoods()
        },
        methods: {
            // 获取购物车商品列表
            getAllShopGoods() {
                // 将获取到的商品id组合并用逗号隔开用于传参
                var idArr = [];
                this.$store.state.shopCar.forEach(item => {
                    idArr.push(item.id)
                });
                if (idArr.length <= 0) {
                    return;
                }
                this.$http.get('api/goods/getshopcarlist/' + idArr.join(',')).then(res => {
                    if (res.body.status === 0) {
                        this.goodsList = res.body.message
                    }
                })

            },

            removeShopGoods(id, index) {
                // 删除购物车中对应的商品
                this.goodsList.splice(index, 1);
                // 同步数据到公共数据中
                this.$store.commit('removeShopCarGoods', id)

            },

            // 改变商品状态
            changeSecleted(id,selected){
                this.$store.commit('updateGoodsSelected',{id,selected:selected})
            }
        },
        components: {
            shopCarNumbox
        }
    }

</script>
<style lang="scss" scoped>
    .goodsList {
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
    .case {
        display: flex;
        align-items: center;
        justify-content: space-between;
        p {
            color: #222222;
            .red {
                color: red;
                font-weight: bold;
                font-size: 16px;
            }
        }
    }


</style>