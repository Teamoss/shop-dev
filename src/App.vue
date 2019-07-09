<template>
   <div class="app-container">
       <!--顶部header区域-->
       <mt-header fixed title="淘淘宝"></mt-header>
       <!--中间内容区域-->
       <!--底部图标导航区域-->
       <nav class="mui-bar mui-bar-tab">
           <a class="mui-tab-item" href="#tabbar">
               <span class="mui-icon mui-icon-home"></span>
               <span class="mui-tab-label">首页</span>
           </a>
           <a class="mui-tab-item" href="#tabbar-with-chat">
               <span class="mui-icon mui-icon-contact"></span>
               <span class="mui-tab-label">会员</span>
           </a>
           <a class="mui-tab-item" href="#tabbar-with-contact">
               <span class="mui-icon mui-icon-contact mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
               <span class="mui-tab-label">购物车</span>
           </a>
           <a class="mui-tab-item" href="#tabbar-with-map">
               <span class="mui-icon mui-icon-search"></span>
               <span class="mui-tab-label">搜素</span>
           </a>
       </nav>
   </div>
</template>
<script>

</script>
<style scoped>
.app-container{
    padding-top: 40px;
    overflow: hidden;
}
</style>