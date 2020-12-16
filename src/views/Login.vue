<template>
    <div class="login-main-filter">
        <Header :isIndex = "isIndex"></Header>
        <div class="login-box">
            
            <div class="login-containter">
                <div class="login-title">
                    登陆
                </div>
                 <div class="login-put">
                        <div class="put-box">
                            <el-input  prefix-icon="el-icon-my-user" v-model="userFrom.username" placeholder="输入用户名或手机号" class="input-sub username"></el-input>
                        </div>
                        <div class="put-box">
                            <el-input v-model="userFrom.password" prefix-icon="el-icon-my-pwd" placeholder="输入密码"  class="input-sub password"></el-input>
                        </div>
                    </div>
                    <div class="submit">
                        <el-button class="btn" @click="login">
                            登陆
                        </el-button>
                    </div>
                    <div class="text">
                        <span>新用户注册</span>
                        <span class="fenge">|</span>
                        <span>忘记密码</span>
                    </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
let vm;
export default {
    data() {
        return {
            query: {},
            userFrom:{

            },
            isIndex:false
            };
        },
    created() {
    vm = this;
    },
    components: {
        Header
    },
    methods: {
        login(){
            vm.$router.push("/")
        }
    },
};
</script>


<style lang="less">
    .login-main-filter{
        height: 100vh;
        width: 100%;
        background: url("../assets/img/login/img.png") no-repeat bottom center #56D1AA;
        .login-box{
            width: 463px;
            height: 370px;
            
            padding-top: 110px;
            margin: 0 auto;
            .login-containter{
                width: 80%;
                margin: 0 auto;
                background: #FFFFFF;
                box-shadow: 5px 9px 15px 0px rgba(62, 64, 66, 0.07);
                border-radius: 8px;
                padding: 30px 50px;
                .login-title{
                    text-align: center;
                    padding-bottom: 15px;
                    color: #010101;
                    font-weight: 400;
                    padding-top: 50px;
                    border-bottom: 3px dashed  #BFBFBF;
                }
                .text{
                    color: #999999;
                    font-size: 12px;
                    text-align: center;
                    padding-top: 30px;
                    span{
                        cursor: pointer;
                    }
                    .fenge{
                        padding: 0 10px;
                    }
                }
                .btn{
                    width: 100%;
                    background: #28AA8A;
                    border-radius: 8px;
                    color: #fff;
                    }
                .login-put{
                    .put-box{
                        .el-input__prefix{
                                display: flex;
                                align-items: center;
                                .el-input__icon{
                                width: 14px;
                                height: 14px;
                            }
                        }
                        
                        margin: 20px 0;
                        .el-input{
                            .el-input__inner{
                                height: 42px;
                            }
                        }
                        
                    }
                    
                }
            }
            
        }
    }
</style>