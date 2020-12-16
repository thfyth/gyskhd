<template>
  <div class="nrand-main">
    <div class="brand-list">
      <div class="list-title brand-title">业务分类</div>
      <div class="list-box">
        <div class="item-box">
          <div class="item">
          <el-row :gutter="10">
            <el-col :span="4">
              <div class="item-title">一级分类</div>
            </el-col>
            <el-col :span="20">
              <div class="item-list-box">
                <div class="item-list" v-for="item in oneList" :key="item.id" :class="isActive == item.id ?'active' : ''" @click="getOne(item)">
                  {{item.name}}
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="item">
          <el-row :gutter="10">
            <el-col :span="4">
              <div class="item-title">二级分类</div>
            </el-col>
            <el-col :span="20">
              <div class="item-list-box">
                <div class="item-list" v-for="item in twoList" :key="item.id" :class="twoIsActive == item.id ?'active' : ''" @click="getTwo(item)">
                  {{item.name}}
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        </div>
        <div class="item shree-item">
          <div class="item-title">三级分类</div>
          <div class="item-list-box three-level">
            <div class="item-three-list">
              <p class="three-title">
                <span>
                  总包
                </span>
                <span class="img-intend">
                  <img src="../assets/img/supplier/home.png" alt="">
                </span>
              </p>
              <div class="three-text">
                <p>
                  描述:总包
                </p>
                <p>
                  联系人：刘先生
                </p>
                <p>
                  联系电话:0855-21212121
                </p>
              </div>
              <div class="three-enroll">
                <span class="btn" @click="applyBtn">储备报名</span>
              </div>
            </div>
            <!-- <div class="item-three-list">
              <p class="three-title">外装</p>
              <div class="three-enroll">
                <span class="btn">储备报名</span>
              </div>
            </div> -->
            
          </div>

        </div>
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
      //一级分类数组
      oneList: [
        {id:1 ,name: "材料设备类"},
        {id:2 , name: "工程类"},
      ],
      //二级分类数组
      twoList: [
        {id:1 ,name: "工程施工类"},
        {id:2 , name: "特种工程类"},
      ],
      isActive:0,
      twoIsActive:0,
    };
  },
  created() {
    vm = this;
  },
  components: {
  },
  methods: {
    getOne(e){
      vm.isActive=e.id;
    },
    getTwo(e){
      vm.twoIsActive=e.id;
    },
    //前往报名
    applyBtn(){
      vm.$router.push({path:"/apply"})
    }
  },
};
</script>


<style lang="less" scoped>
.nrand-main {
  .brand-list{
    margin: 10px;
    padding: 10px;
  }
  .brand-title{
    padding: 2px 30px;
    background: url("../assets/img/supplier/round.png") no-repeat left center;
    line-height: 26px;
    border-bottom:2px solid #21A888;
    display: inline-block;
  }
  .item-box{
      padding: 30px;
      border: 2px solid #EEEEEE;
      border-radius: 4px;
    }
    .shree-item{
      border: 2px solid #EEEEEE;
      margin-top: 10px;
    }
  .item {
    
    .item-title {
      padding: 10px 30px;
      font-weight: bold;
      color: #333;
      font-size: 14px;
    }
    .item-list-box {
      display: flex;
      .item-list {
        padding: 2px 10px;
        margin: 10px;
        cursor: pointer;
        border-radius: 10px;
        color: #333;
        border: 1px solid #fff;
        font-weight: 400;
      }
    }
    .active{
      background: #EAFFFA;
        border: 1px solid #21A888!important;
      color: #21A888!important;
    }
    .three-level {
      padding: 0 50px;
      flex-wrap: wrap;
      .item-three-list {
        cursor: pointer;
        width: 240px;
        height: 150px;
        margin: 10px 20px;
        
        border: 2px solid #EEEEEE;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .three-title{
          margin-top: 5px;
          padding: 0 15px;
          display: flex;
          justify-content: space-between;
          .img-intend{
            width: 24px;
            height: 24px;
            img{
              width: 100%;
            }
          }
        }
        .three-text{
          padding: 5px 15px;
          font-size: 12px;
          line-height: 18px;
          color: #888;
        }
        .three-enroll {
          margin: 10px 0;
          text-align: center;
          .btn {
            padding: 5px 20px;
            border-radius: 5px;
            display: inline-block;
            background: #21A888;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>