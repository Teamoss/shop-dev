<template>
    <div class="content">
        <!--图片头部信息-->
        <div class="header">
            <h3>{{imgMessage.title}}</h3>
            <p class="header-info">
                <span>发表时间:{{imgMessage.add_time | dateFormat}}</span>
                <span>点击{{imgMessage.click}}次</span>
            </p>
        </div>
        <hr>

        <!--缩略图-->
        <div class="thumbs">
            <vue-preview :slides="list" @close="handleClose"></vue-preview>
        </div>

        <!--图片内容-->
        <div v-html="imgMessage.content" class="imgContent"></div>

        <!--发表评论-->
        <box-comment :id="id"></box-comment>

    </div>
</template>
<script>
    import comment from './../subcomponent/comment.vue';
    import {Toast} from 'mint-ui'

    export default {
        data() {
            return {
                id: this.$route.params.id,
                imgMessage: {},
                list: []
            }
        },
        created() {
            this.getphotoMessage();
            this.getImgView()
        },
        methods: {
            //获取图片信息
            getphotoMessage() {
                this.$http.get('api/getimageInfo/' + this.id).then(res => {
                    if (res.body.status === 0) {
                        this.imgMessage = res.body.message[0]
                    } else {
                        Toast('获取图片详细失败')
                    }
                })
            },
            // 获取缩略图
            getImgView() {
                this.$http.get('api/getthumimages/' + this.id).then(res => {
                    if (res.body.status === 0) {
                        res.body.message.forEach(item => {
                            item.w = 600;
                            item.h = 400;
                            item.msrc = item.src

                        });
                        this.list = res.body.message
                    } else {
                        Toast('获取缩略图失败')
                    }
                })
            },
            //缩略图
            handleClose() {
                console.log('close event')
            }
        },
        components: {
            'box-comment': comment
        }
    }

</script>
<style lang="scss" scoped>
    .content {
        padding: 0 4px;
    }

    h3 {
        font-size: 15px;
        color: lightseagreen;
        text-align: center;
        margin: 20px;
    }

    .header-info {
        display: flex;
        justify-content: space-between;
    }

    .imgContent {
        font-size: 12px;
        color: #6d6d72;
        margin-bottom: 10px;
        line-height: 25px;
    }

    .thumbs {
        /deep/ .my-gallery {
            display: flex;
            flex-wrap: wrap;
            figure {
                width: 30%;
                margin: 5px;
                img {
                    width: 100%;
                }
            }
        }
    }

</style>