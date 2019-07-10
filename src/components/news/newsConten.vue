<template>
    <div class="news">
        <div class="newHead">
            <h3>{{newConten.title}}</h3>
            <p class="newT">
                <span>发表时间:{{newConten.add_time | dateFormat}}</span>
                <span>点击{{newConten.click}}次</span>
            </p>
        </div>
        <hr>
        <div class="newMess" v-html="newConten.content"></div>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui'

    export default {
        data() {
            return {
                id: this.$route.params.id,
                newConten: {}
            }
        },
        created() {
            this.getnewsConten()
        },
        methods: {
            getnewsConten() {
                this.$http.get('api/getnew/' + this.id).then(res => {
                    if (res.body.status === 0) {
                        this.newConten = res.body.message[0]
                    } else {
                        console.log(111)
                        Toast('获取新闻失败')

                    }
                })
            }
        }
    }

</script>
<style>
    .news {
        padding: 0 4px;
    }

    .newHead h3 {
        font-size: 16px;
        color: lightcoral;
        text-align: center;
        padding-top: 5px;
    }

    .newT {
        font-size: 13px;
        display: flex;
        justify-content: space-between;
        color: lightskyblue;
    }
</style>