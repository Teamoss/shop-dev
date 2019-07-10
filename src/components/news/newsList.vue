<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                <router-link :to="'/home/newsConten/' + item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h4 class="news-list">{{item.title}}</h4>
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{item.add_time | dateFormat}}</span>
                            <span>点击次数:{{item.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui';

    export default {
        data() {
            return {
                newsList: []
            }
        },
        created() {
            this.getnewsList()
        },
        methods: {
            getnewsList() {
                this.$http.get('api/getnewslist').then(res => {
                    if (res.body.status === 0) {
                        this.newsList = res.body.message
                    } else {
                        Toast('获取新闻列表失败')
                    }
                })
            }
        }
    }
</script>
<style scoped>
    .news-list {
        font-size: 14px;
    }

    .mui-ellipsis {
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        color: lightskyblue;
    }
</style>