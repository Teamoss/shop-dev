<template>
    <!--商品列表区域-->
    <div class="goods-list">
        <div class="goods-item" v-for="item in goodsList" :key="item.id" @click="toDetail(item.id)">
            <img :src="item.img_url" alt="">
            <h3>{{item.title}}</h3>
            <div class="info">
                <p class="price">
                    <span class="new">￥{{item.sell_price}}</span>
                    <span class="old">{{item.market_price}}</span>
                </p>
                <p class="status">
                    <span>热卖中</span>
                    <span>剩余{{item.stock_quantity}}件</span>
                </p>
            </div>
        </div>

        <!--加载更多-->
        <mt-button type="danger" size="large"  @click="getMore">加载更多</mt-button>
    </div>



</template>
<script>
    import {Toast} from 'mint-ui'
    export default {
        data(){
            return{
                goodsList:[],
                pageindex:1

            }
        },
        created(){
          this.getgoodsList()
        },
        methods:{
            //获取商品列表
            getgoodsList(){
                this.$http.get('api/getgoods?pageindex='+this.pageindex).then(res=>{
                    if (res.body.status === 0) {
                        this.goodsList=this.goodsList.concat(res.body.message)
                    }else{
                        Toast("商品列表获取失败")
                    }
                })
            },
            // 获取更多商品列表
            getMore(){
                this.pageindex++;
                this.getgoodsList()
            },
            // 跳转到商品购买页面
            toDetail(id){
                this.$router.push({name:'goodsInfo',params:{id}})
            }
        }
    }

</script>
<style lang="scss" scoped>
    .goods-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0 7px;

        .goods-item {
            width: 49%;
            border: 1px solid #ccc;
            margin: 4px 0;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            h3{
                font-size: 14px;

            }
            img {
                width: 100%;
            }

            .info {
                background-color: #eeeeee;
                p{
                    margin: 0;
                    padding: 5px;
                }
                .price{
                    .new{
                        color: red;
                        font-weight: bold;
                        font-size: 14px;
                    }
                    .old{
                        text-decoration: line-through;
                        margin-left: 10px;
                        font-size: 12px;
                    }
                    .status{
                        display: flex;
                        justify-content: space-between;
                        font-size: 12px;
                    }
                }
            }
        }
    }

</style>