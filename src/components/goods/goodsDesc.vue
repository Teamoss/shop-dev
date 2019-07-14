<template>
    <div class="descContainer">
        <h3>{{goodsDesc.title}}</h3>
        <hr>
        <!--商品内容-->
        <div class="descBody" v-html="goodsDesc.content">
        </div>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui'

    export default {
        data() {
            return {
                goodsDesc: {}
            }
        },
        created() {
            this.getgoodsDesc()
        },
        methods: {
            getgoodsDesc() {
                this.$http.get('api/goods/getdesc/' + this.$route.params.id).then(res => {
                    if (res.body.status === 0) {
                        this.goodsDesc = res.body.message[0]
                    } else {
                        Toast('获取商品图文失败')
                    }
                })
            }
        }
    }

</script>
<style lang="scss" scoped>
    .descContainer /deep/ {
        margin: 10px;

        h3 {
            font-size: 14px;
            color: lightslategray;
            text-align: center;
            margin: 15px 0;
        }
        .descBody {
            img {
                width: 100%;
            }
        }
    }

</style>