<template>
    <div>
        <div class="mui-numbox"  data-numbox-min='1' >
            <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
            <input class="mui-numbox-input" type="number" :value="initCount" @change="changeCount" ref="boxNum" readonly />
            <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
        </div>
    </div>
</template>
<script>
    import mui from '../../lib/js/mui.js'
    export default {
        mounted() {
            mui('.mui-numbox').numbox();
            // console.log(this.maxNum)
        },
        methods:{
            changeCount(){
                this.$store.commit('updateGoodsCount',{
                    id:this.goodsId,
                    count: this.$refs.boxNum.value
                })
            }
        },
        props:['initCount','goodsId']
    }

</script>
<style lang="scss" scoped>

</style>