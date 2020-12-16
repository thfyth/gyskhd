<template>
    <div class="notice-main">
        <div class="notice-title">
            通知公告
        </div>
        <div class="notice-box">
             <el-timeline :reverse="reverse">
                <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                placement="top"
                :timestamp="activity.timestamp">
                <div class="timestmp-containt" @click="detail(activity.timestamp)">
                    {{activity.content}}
                    <div class="border-delta"></div>
                </div>
                </el-timeline-item>
            </el-timeline>
        </div>
    </div>
</template>

<script>
let vm;
export default {
    data() {
        return {
            query: {},
            reverse: true,
            activities: [{
            content: '医建投2019至2021年度材料设计备类集采定标结果公告',
            timestamp: '2018-04-15'
            }, {
            content: '医建投2019至2021年度材料设计备类集采定标结果公告',
            timestamp: '2018-04-13'
            }, {
            content: '医建投2019至2021年度材料设计备类集采定标结果公告',
            timestamp: '2018-04-11'
            }, {
            content: '医建投2019至2021年度材料设计备类集采定标结果公告',
            timestamp: '2018-04-11'
            }, {
            content: '医建投2019至2021年度材料设计备类集采定标结果公告',
            timestamp: '2018-04-11'
            }, {
            content: '医建投2019至2021年度材料设计备类集采定标结果公告',
            timestamp: '2018-04-11'
            }, {
            content: '医建投2019至2021年度材料设计备类集采定标结果公告',
            timestamp: '2018-04-11'
            }, {
            content: '医建投2019至2021年度材料设计备类集采定标结果公告',
            timestamp: '2018-04-11'
            }, {
            content: '医建投2019至2021年度材料设计备类集采定标结果公告',
            timestamp: '2018-04-11'
            }]
        };
    },
    created() {
    vm = this;
    },
    components: {},
    methods: {
        detail(e){
            vm.$router.push("/dashboard/detail/"+e)
        }
    },
};
</script>

<style lang="less">
    .notice-main{
        width: 60vw;
        margin: 0 auto;
        .notice-title{
            text-align: center;
            font-weight: bold;
            color: #21A888;;
            margin-bottom: 60px;
            font-size: 18px;
            
        }
        .notice-box{
            .el-timeline-item__wrapper{
                display: flex;
            }
            .el-timeline-item__timestamp.is-top{
                font-weight: 400;
                color: #168369;
                font-size: 16px;
            }
            .el-timeline-item__content{
                width: 80%;
                .timestmp-containt{
                    position: relative;
                    background: #F8F8F8;
                    top: -20px;
                    padding-left: 20px;
                    margin-left: 20px;
                    line-height: 60px;
                    height: 60px;
                    font-size: 16px;
                    color: #21A888;
                    cursor: pointer;
                    .border-delta{
                        width: 10px;
                        border-color: transparent #F8F8F8;
                        border-style: solid;
                        border-width: 6px 10px 6px 0px;
                        position: absolute;
                        left: -20px;
                        top: 25px;
                    }
                }
            }
            
        }
    }
</style>