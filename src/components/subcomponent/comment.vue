<template>
    <div class="content">
        <h3>发表评论</h3>
        <hr>
        <textarea name="" id="" minlength="6" placeholder="最少输入6个字"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="comment" v-for="(item,i) in comments" :key="item.id">
            <p class="user"><span>第{{i+1}}楼 用户：{{item.user_name}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>时间：{{item.add_time |dateFormat}}</span>
            </p>
            <p class="comm">{{item.content==='undefined'?'吃瓜群众路过':item.content}}</p>
        </div>
        <mt-button type="danger" size="large" plain @click="getMoreComment">加载更多</mt-button>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui'

    export default {
        data() {
            return {
                pageindex: 1,
                comments: []
            }
        },
        created() {
            this.getComments();
        },
        methods: {
            getComments() {
                // 获取新闻详细内容
                this.$http.get('api/getcomments/' + this.id + '?pageindex=' + this.pageindex).then(res => {
                    if (res.body.status === 0) {
                       this.comments=this.comments.concat(res.body.message)
                    } else {
                        Toast('获取新闻失败')

                    }
                })
            },
            getMoreComment(){
                this.pageindex++;
                this.getComments();
            }
        },
        props: ['id']
    }
</script>
<style scoped>
    textarea {
        height: 100px;
        font-size: 12px;
        margin-bottom: 3px;
        margin-top: 0;
    }

    .comment {
        margin-top: 4px;
    }

    .user {
        background: lightgray;
        line-height: 30px;
        font-size: 13px;
        color: #222222;
    }

    .comm {
        text-indent: 10px;
        font-size: 12px;
    }

</style>