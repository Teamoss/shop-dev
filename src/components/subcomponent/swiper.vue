<template>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in imgList" :key="item.id">
            <img :src="item.img" alt="" :class="{'Full':isFull}">
        </mt-swipe-item>
    </mt-swipe>
</template>
<script>
    export default {
        props:['imgList','isFull']
    }

</script>
<style lang="scss" scoped>
    .mint-swipe {
        height: 200px;
        .mint-swipe-item {
            text-align: center;
            img {
               /*width: 100%;*/
                height: 100%;
            }
        }
    }
    .Full{
        width: 100%;
    }


</style>