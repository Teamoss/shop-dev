<template>
    <div class="app-container">
        <!--顶部header区域-->
        <mt-header fixed title="淘宝宝"></mt-header>

        <!--中间路由内容区域-->
        <transition>
            <router-view></router-view>
        </transition>


        <!--底部图标导航区域-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shopcar">
                <span class="mui-icon mui-icon-contact mui-icon-extra mui-icon-extra-cart"><span
                        class="mui-badge">9</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜素</span>
            </router-link>
        </nav>
    </div>
</template>
<script>

</script>
<style scoped>
    .app-container {
        padding-top: 40px;
        overflow: hidden;
    }
    .mint-header {
        background-color: lightseagreen;
    }
    .v-enter{
        opacity: 0;
        transform: translateX(100%);
    }
    .v-leaver-to{
        opacity: 0;
        transform: translateX(-100%);
    }
    .v-enter-active, .v-leaver-active{
        transition: all 0.8s ease;
    }

</style>