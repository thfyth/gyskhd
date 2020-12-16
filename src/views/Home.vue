<template>
  <div class="mian">
    <Header></Header>
    <router-view />
    <div class="footer">
      <div class="footer-box">
        <el-row :gutter="20">
          <el-col :span="4">
            <div class="bottom-img">
              <img src="../assets/img/other/bottom.png" alt="">
            </div>
          </el-col>
          <el-col :span="20">
            <span class="bot-item-titel">
              贵阳市医疗健康产业投资股份有限公司   黔ICP备19013095号
            </span>
            <el-row :gutter="40">
               <el-col :span="6">
                <div class="bottom-list">
                  <span class="bot-item">
                    贵黔国际医院管理有限公司 
                  </span>
                  <span class="bot-item">
                    贵阳弘瑞康社区卫生服务管理有限公司
                  </span>
                </div>
              </el-col>
              <el-col :span="6">      
                <div class="bottom-list">
                  <span class="bot-item">
                    贵阳弘祥康养老产业开发有限公司 
                  </span>
                  <span class="bot-item">
                    贵阳弘盛康医疗科技有限公司
                  </span>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="bottom-list">
                  <span class="bot-item">
                    贵阳弘颐康养老产业投资有限公司
                  </span>
                  <span class="bot-item">
                    贵阳弘杏康咨询服务有限责任公司
                  </span>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="bottom-list">
                  <span class="bot-item">
                    乐湾国际温泉度假酒店
                  </span>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
let vm;
export default {
  name: "Home",
  data() {
    return {
      loginForm: {
        userName: null,
        passWord: null,
      },
    };
  },
  created() {
    vm = this;
  },
  methods: {
    proFileFun() {
      vm.$router.push({ path: "/profile" });
    },
    showPwd() {},
    //登陆
    handleLogin() {},
    //返回首页
    home(){
      vm.$router.push({ path: "/" });
    }
  },
  components:{
    Header
  }
};
</script>


<style lang="less" scoped>
.mian {
  .footer {
    width: 100%;
    // height: 100px;
    // line-height: 100px;
    background-color: #21A888;
    text-align: center;
    color: #fff;
    box-sizing: border-box;
    padding: 20px 0;
    margin-top: 50px;
    .footer-box{
      width: 80vw;
      margin: 0 auto;
      .bottom-img{
        text-align: center;
        img{
          width: 96px;
        }
      }
       .bot-item-titel{
         text-align: left;
         font-weight: bold;
         display: block;
          font-size: 14px;
          line-height: 32px;
       }
      .bottom-list{
        .bot-item{
          display: block;
          text-align: left;
          font-size: 14px;
          line-height: 32px;
        }
       
      }
    }
  }
  
}
</style>
