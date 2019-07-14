<template>
    <div>
        <div class="mui-numbox"  data-numbox-min='1' >
            <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
            <input class="mui-numbox-input" type="number" value="1" @change="countChange" ref="numbox" />
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
            countChange(){
                this.$emit('getCount',this.$refs.numbox.value)
            }
        },
        props:['maxNum'],
        watch:{
            maxNum:function (newVal, oldVal) {
                mui('.mui-numbox').numbox().setOption('max',newVal)
            }
        }
    }

</script>
<style lang="scss" scoped>

</style>