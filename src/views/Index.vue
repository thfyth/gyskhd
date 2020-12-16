<template>
    <div class="index-box">
        <div class="banner">
            <div class="banner-img">
                <!-- <img src="" alt="" srcset=""> -->
            </div>
            <div class="login-box">
                <div class="login-header">
                    供方报名登陆
                </div>
                <div class="login-main">
                    <div class="login-img">
                        <img src="../assets/img/index/login-title.png" alt="">
                    </div>
                    <div class="login-put">
                        <div class="put-box">
                            <el-input  prefix-icon="el-icon-my-user" v-model="userFrom.username" placeholder="" class="input-sub username"></el-input>
                        </div>
                        <div class="put-box">
                            <el-input v-model="userFrom.password" prefix-icon="el-icon-my-pwd" placeholder=""  class="input-sub password"></el-input>
                        </div>
                    </div>
                    <div class="text">
                        <span @click="register" class="register">新用户注册</span>
                        <span class="fenge">|</span>
                        <span>忘记密码</span>
                    </div>
                    <div class="submit">
                        <el-button class="btn">
                            登陆
                        </el-button>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="container">
            <!-- 公告 -->
            <div class="notice-list">
                <el-row :gutter="14">
                    <el-col :span="12">
                        <div class="list-box">
                            <div class="list-title">
                                <span class="notice-title">通知公告</span>
                                <span class="more" @click="more('notice')">更多></span>
                            </div>
                            <div class="notice-item">
                                <div class="items"  :class="'item-'+index" v-for="(item,index) in newsList" :key="index">
                                    <div class="item-title">
                                        {{item.name}}
                                    </div>
                                    <div class="item-time">
                                        {{item.time}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="list-box">
                            <div class="list-title">
                                <span class="notice-title">招标公告</span>
                                <span class="more" @click="more('tenderNotice')">更多></span>
                            </div>
                            <div class="notice-item">
                                <div class="items"  :class="'item-'+index" v-for="(item,index) in newsList" :key="index">
                                    <div class="item-title">
                                        {{item.name}}
                                    </div>
                                    <div class="item-time">
                                        {{item.time}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <!-- 入库信息 -->
            <div class="settlement">
                <el-row :gutter="25">
                    <el-col :span="8">
                        <div class="settlement-left">
                            <div class="settle-img">
                                <img src="../assets/img/index/caigou.png" alt="">
                            </div>
                            <div class="settle-sign">
                                <el-button class="settle-sign-btn" @click="toBrand">
                                    我要报名
                                </el-button>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="settle-center">
                            <div class="center-bg"></div>
                            <div class="center-box">
                                <div class="settle-all">
                                <span>
                                    目前医键投累
                                    <br>
                                    计入库供方单位
                                </span>
                                <span class="settle-num">
                                    234873839
                                </span>
                            </div>
                            <div class="settle-list">
                                <div class="settle-item">
                                        <div class="settle-name">
                                            宁格朗电气股份有限公司
                                        </div>
                                        <div class="settle-behavior">
                                            入库
                                        </div>
                                    </div>
                                    <div class="settle-item">
                                        <div class="settle-name">
                                            宁格朗电气股份有限公司
                                        </div>
                                        <div class="settle-behavior">
                                            入库
                                        </div>
                                    </div>
                                    <div class="settle-item">
                                        <div class="settle-name">
                                            宁格朗电气股份有限公司
                                        </div>
                                        <div class="settle-behavior">
                                            入库
                                        </div>
                                    </div>
                                    <div class="settle-item">
                                        <div class="settle-name">
                                            宁格朗电气股份有限公司
                                        </div>
                                        <div class="settle-behavior">
                                            入库
                                        </div>
                                    </div>
                                    <div class="settle-item">
                                        <div class="settle-name">
                                            宁格朗电气股份有限公司
                                        </div>
                                        <div class="settle-behavior">
                                            入库
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="10">
                        <div class="settle-right">
                            <div class="right-title">
                                优质供方单位  top10
                            </div>
                            <div class="right-box">
                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <div class="right-item">
                                            宁格朗电气股份有限公司
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="right-item">
                                            深振市万科达新型建筑材材公司
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <div class="right-item">
                                            宁格朗电气股份有限公司
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="right-item">
                                            深振市万科达新型建筑材材公司
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <div class="right-item">
                                            浙江杨印网光告有限公司
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="right-item">
                                            光东宏安丰人防工程有限公司
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <div class="right-item">
                                            上海世尊家具有限公司
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="right-item">
                                            深振市万科达新型建筑材材公司
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <div class="right-item">
                                            宁格朗电气股份有限公司
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="right-item">
                                            深振市万科达新型建筑材材公司
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="footer-img">
            <!-- <img src="../assets/img/index/footer.png" alt=""> -->
            <div class="footer-main">
                <span class="consult">
                    我要咨询
                </span>
            </div>
        </div>
    </div>
</template>

<script>
let vm;
export default {
    data() {
        return {
            query: {},
            userFrom:{
                username:null,
                password:null
            },
            newsList:[
                {
                    id:1,
                    name:"医健投2019年至2021年度材料设备采购招标公告",
                    time:"2020-12-04"
                },
                {
                    id:2,
                    name:"医健投2019年至2021年度材料设备采购招标公告",
                    time:"2020-12-04"
                },
                {
                    id:3,
                    name:"医健投2019年至2021年度材料设备采购招标公告",
                    time:"2020-12-04"
                },
                {
                    id:4,
                    name:"医健投2019年至2021年度材料设备采购招标公告",
                    time:"2020-12-04"
                },
                {
                    id:5,
                    name:"医健投2019年至2021年度材料设备采购招标公告",
                    time:"2020-12-04"
                },
                {
                    id:6,
                    name:"医健投2019年至2021年度材料设备采购招标公告",
                    time:"2020-12-04"
                },
                {
                    id:7,
                    name:"医健投2019年至2021年度材料设备采购招标公告",
                    time:"2020-12-04"
                },
                {
                    id:8,
                    name:"医健投2019年至2021年度材料设备采购招标公告",
                    time:"2020-12-04"
                },
            ]
        };
    },
    created() {
        vm = this;
    },
    components: {},
    methods: {
        //注册
        register(){
            vm.$router.push("/login")
        },
        more(e){
            vm.$router.push("/dashboard/"+e)
        },
        toBrand(){
            vm.$router.push("/dashboard/applyCom")
        }
    },
};
</script>


<style lang="less">
    .index-box{

        .container{
            width: 80vw;
            margin: 0 auto;
            .notice-list{
                margin-top: 20px;
                .list-box{
                    border-top: 4px solid #21A888;
                    box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.13);
                    .list-title{
                        display: flex;
                        line-height: 38px;
                        justify-content: space-between;
                        background: #E0FAF3;;
                        .notice-title{
                            display: inline-block;
                            background: #21A888;
                            font-size: 18px;
                            font-weight: bold;
                            color: #FFFFFF;
                            padding: 0 28px;
                        }
                        .more{
                            color: #595857;
                            margin-right: 20px;
                            font-weight: bold;
                            font-size: 16px;
                            cursor: pointer;
                        }
                    }
                }
            }
            .notice-item{
                padding: 10px 30px;
                .items{
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                    margin: 12px 0;
                }
            }
            .settlement{
                margin-top: 30px;
                padding: 10px 0;
                box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.13);
                .settlement-left{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
                    padding-top: 30px;
                    img{
                        width: 100%;
                    }
                    .settle-sign{
                        padding: 20px 0;
                        .settle-sign-btn{
                            color: #fff;
                            border-radius: 25px;
                            width: 300px;
                            font-size: 22px;
                            font-weight: bold;
                            background: linear-gradient(to left, #10BFC2 , #0AAF97); /* 标准自的bai语du法zhidao */
                        }
                    }
                    
                }
                .settle-center{
                    .center-bg{
                        height: 4px;
                        background: #C6CEE0;
                        border-radius: 4px;
                        width: 100%;
                    }
                    .center-box{
                        width: 96%;
                        margin: 0 auto;
                        // padding: 10px 30px;
                        position: relative;
                        top: -2px;
                        border: 2px solid #E6F0FD;
                        box-shadow: 2px 0px 9px 1px rgba(0, 0, 0, 0.06);
                        border-radius: 0px 10px 10px 0px;
                        .settle-all{
                            // background: url("../assets/img/index/left-icon.png") no-repeat left center;
                            // border: 2px solid #E6F0FD;
                            // box-shadow: 2px 0px 9px 1px rgba(0, 0, 0, 0.06);
                            // border-radius: 0px 10px 10px 0px;
                            // padding-left: 20px;
                            line-height: 20px;
                            display: flex;
                            padding: 10px 20px;
                            padding: 10px 20px 0;
                            span{
                                display: block;
                                font-size: 14px;
                                color: #595857;
                                padding: 10px 0;
                                font-weight: bold;
                            }
                            .settle-num{
                                display: flex;
                                align-items: center;
                                font-size: 28px;    
                                color: #21A888;;
                                padding-left: 10px;
                            }
                        }
                    }
                    
                    
                }
                .settle-right{
                        padding: 10px;
                    .right-title{
                        color: #595857;
                        font-size: 16px;
                        font-weight: bold;
                        background: url("../assets/img/index/top.png") no-repeat left center;
                        background-size: 24px 24px;
                        padding: 10px 28px;
                    }
                    .right-box{
                        margin-top: 30px;
                        .el-row{
                                padding: 5px 0;
                            }
                        .right-item{
                            color: #595857;
                            font-size: 14px;
                            position: relative;
                            
                        }
                        .right-item::before{
                            width: 6px;
                            height: 6px;
                            display: block;
                            content: "";
                            position: absolute;
                            left: -10px;
                            top: 7px;
                            background: #21A888;
                            border-radius: 50%;
                        }
                    }
                }
                .settle-list{
                    padding-top: 10px;
                    .settle-item{
                        display: flex;
                        justify-content: space-between;
                        font-size: 14px;
                        color: #595857;
                        padding: 5px 20px;
                    }
                }
                
            }
        }
        .footer-img{
            width: 80vw;
            height: 268px;
            
            margin: 0 auto;
            padding-top: 25px;
            .footer-main{
                width: 100%;
                height: 100%;
                background: url("../assets/img/other/bot.png") no-repeat left center;
                background-size: 100% 100%;
                .consult{
                    background: #05C0BE;
                    padding: 15px 60px;
                    display: inline-block;
                    font-weight: 500;
                    color: #FFFFFF;
                    position: relative;
                    top: 60px;
                    cursor: pointer;
                    left: 120px;
                }
            }
            
        }
        .banner{
            position: relative;
            height: 368px;
            background: url("../assets/img/index/banner.png") no-repeat left center;
            background-size:cover;
            .banner-img{
                height: 100%;
                width: 100%;
                img{
                    height: 100%;
                    width: 100%;
                }
            }
            .bg{
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
                
            }
            .login-box{
                width: 468px;
                height: 100%;
                position: absolute;
                top: 0;
                right: 268px;
                    background: rgba(33,168,136, .35);
                .login-header{
                    line-height: 50px;
                    font-size: 18px;
                    font-weight: bold;
                    color: #FFFFFF;
                    background: #21A888;
                    text-align: center;
                }
                .text{
                    color: #fff;
                    font-size: 16px;
                    margin-bottom: 25px;
                    span{
                        cursor: pointer;
                    }
                    .fenge{
                        padding: 0 10px;
                    }
                }
                .login-put{
                    .put-box{
                        .el-input__prefix{
                            display: flex;
                            align-items: center;
                            top: 10px;
                        }
                        .el-input__icon{
                            width: 16px;
                            height: 16px;
                        }
                        margin: 10px 0;
                        .el-input{
                            width: 80%;
                            margin: 0 auto;
                            padding-top: 20px;
                            .el-input__inner{
                                height: 38px;
                                line-height: 38px;
                            }
                        }
                        
                    }
                }
                
                .login-main{
                    text-align: center;
                    padding: 0 10px;
                    .login-img{
                        margin-top: 10px;
                        img{
                            width: 212px;
                        }
                    }
                }
                .submit{
                    .btn{
                        background: #21A888;
                        border-radius: 25px;
                        line-height: 50px;
                        height: 50px;
                        width: 284px;
                        padding: 0;
                        color: #fff;
                        font-size: 22px;
                        text-align: center;
                        font-weight: 400;
                    }
                }
            }
        }
    }
</style>