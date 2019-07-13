<template>
    <!--商品列表区域-->
    <div class="goods-list">
        <div class="goods-item">
            <img src="../../images/menu1.png" alt="">
            <h3>小米米米</h3>
            <div class="info">
                <p class="price">
                    <span class="new">￥899</span>
                    <span class="old">000</span>
                </p>
                <p class="status">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="../../images/menu1.png" alt="">
            <h3>小米米米</h3>
            <div class="info">
                <p class="price">
                    <span class="new">￥899</span>
                    <span class="old">000</span>
                </p>
                <p class="status">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="../../images/menu1.png" alt="">
            <h3>小米米米</h3>
            <div class="info">
                <p class="price">
                    <span class="new">￥899</span>
                    <span class="old">000</span>
                </p>
                <p class="status">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>

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