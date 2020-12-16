<template>
    <div class="header">
      <div class="title" @click="home">
        <img src="../assets/title.png">
        <span>
          |
        </span>
        供方报名系统
      </div>
      <!-- <div class="profile" @click="proFileFun">我的报名</div> -->
      <el-menu 
      :default-active="onRoutes" 
      mode="horizontal" 
      @select="handleSelect"
      active-text-color="#fff"
      router
      v-if="isIndex"
      >
        <!-- <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/dashboard/applyCom">供方报名</el-menu-item>
        <el-menu-item index="/dashboard/notice">通知公告</el-menu-item>
        <el-menu-item index="/dashboard/profile">我的报名</el-menu-item> -->
         <template v-for="item in items">
          <template>
            <el-menu-item :index="item.index" :key="item.index">
              <i :class="item.icon" class="icon-item"></i>
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </template>
      </template>
        <!-- <el-menu-item index="4" @click="registration">我的报名</el-menu-item> -->
      </el-menu>
    </div>
</template>

<script>
let vm;
export default {
    name:"Header",
    props:{
      isIndex:{
        type:Boolean,
        default:()=>{
          return true
        }
      }
    },
    data() {
        return {
            query: {},
            activeIndex:"/",
            items: [
              {
                icon:"icon-shouye-yes",
                index: "/index",
                title: "首页",
              },
              {
                icon:"icon-baoming",
                index: "/dashboard/applyCom/Brand",
                title: "供方报名",
                subs:[
                  {
                     index: "/apply",
                  }
                ]
              },
              {
                icon:"icon-shengyinlingsheng",
                index: "/dashboard/notice",
                title: "通知公告",
              },
              {
                icon:"icon-wenjian1",
                index: "/dashboard/profile",
                title: "我的报名",
              },
          ], 
        };
    },
    created() {
        vm = this;
    },
    computed: {
      onRoutes(e) {
        return this.$route.path;
      },
    },
    components: {},
    methods: {
      handleSelect(e,index){
        console.log(e);
        console.log(index);
      },
      registration(){
        vm.$router.push("/login")
      },
      //回到首页
      home(){
        vm.$router.push("/")
      }
    },
};
</script>


<style lang="less">
    .header {
      line-height: 78px;
      display: flex;
      // flex-direction: column;
      padding-right: 10vw;
      padding-left: 5vw;
      justify-content: space-between;
      color: #00549e;
      font-size: 28px;
      background: #fff;
      .el-menu--horizontal>.el-menu-item.is-active {
          background-color: #21A888;
          border-bottom-color: #21A888!important;
      }
      .el-menu.el-menu--horizontal{
        border: none;
      }
      .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
          background-color: #21A888;
          border-bottom-color: #21A888!important;
          color: #fff;
      }
      .el-menu--horizontal>.el-menu-item{
        width: 210px;
        line-height: 78px;
        height: 78px;
        text-align: center;
        font-size: 16px;
        font-weight: bold;
        .icon-item{
          padding-right: 5px;
        }
      }
      .title{
        cursor: pointer;
        display: flex;
        align-items: center;
        color: #139688;
        font-weight: bold;
        img{
              position: relative;
              top: -3px;
        }
      }
  }
</style>