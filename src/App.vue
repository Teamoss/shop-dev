<template>
    <div class="app-container">
        <!--顶部header区域-->
        <mt-header fixed title="淘宝宝"></mt-header>

        <!--中间路由内容区域-->
        <transition>
            <router-view></router-view>
        </transition>


        <!--底部tabbar区域-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item-llb" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item-llb" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item-llb" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge" id="badge">{{$store.getters.getALLCount}}</span>
				</span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item-llb" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>

    </div>
</template>
<script>

</script>
<style scoped>
    .app-container {
        padding-top: 40px;
        padding-bottom: 50px;
        overflow: hidden;
    }
    .mint-header{
        z-index: 99;
    }
    /*页面切换动画*/
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
   /*改MUI类名解决tabar无法滑动问题（MUI自身框架问题，可能内部类名重名?）*/
    .mui-bar-tab .mui-tab-item-llb.mui-active {
        color: #007aff;
    }

    .mui-bar-tab .mui-tab-item-llb {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }

    .mui-bar-tab .mui-tab-item-llb .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }

    .mui-bar-tab .mui-tab-item-llb .mui-icon~.mui-tab-label {
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }


</style>