<template>
  <!-- 报名公用点击 -->
  <div class="apply-component">
    <div class="container">
      <div class="enroll-list">
        <el-row :gutter="5">
          <el-col :span="8" v-for="item in enrollList" :key="item.id">
            <div
              class="enroll-title"
              @click="getEnroll(item)"
            >
              <span 
                class="text" 
                :class="isActive == item.id ? item.type+'-text' : item.type+'-text-2'"
                >
                {{ item.name }}
              </span>
              <span 
                :class="isActive == item.id ? 'active-text atext' : 'atext'"
                >
                {{ item.name }}
              </span>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
let vm;
export default {
  data() {
    return {
      //报名类数组
      enrollList: [
        { id: 1, name: "品牌报名", url: "dashboard/applyCom/brand",type:"brand"},
        { id: 2, name: "储备报名", url: "dashboard/applyCom/reserve",type:"reserve" },
        { id: 3, name: "招标报名", url: "dashboard/applyCom/bidding",type:"bidding" },
      ],
      //样式控制
      isActive: 1,
    };
  },
  created() {
    vm = this;
  },
  components: {
  },
  methods: {
    //样式调整
    getEnroll(e) {
      vm.isActive = e.id;
      vm.$router.push({ path: `/${e.url}` });
    },
  },
};
</script>


<style lang="less" scoped>
  .apply-component{
    .container{
      .enroll-list{
        .enroll-title{
          
          .text{
            display: block;
            width: 112px;
            height: 112px;
            border-radius: 50%;
            text-indent: -9999px;
            cursor: pointer;
            background-size: cover;
            margin: 0 auto;
          }
          .atext{
            color: #333333;
            font-size: 16px;
            font-weight: bold;
            display: block;
            text-align: center;
          }
          .active-text{
            color: #21A888;
          }
           
          .brand-text{
            background: url("../assets/img/supplier/brand-active.png") no-repeat left center;
            background-size: cover;
          }
          .reserve-text{
            background: url("../assets/img/supplier/reserve-active.png") no-repeat left center;
            background-size: cover;
          }
          .bidding-text{
            background: url("../assets/img/supplier/bidding-active.png") no-repeat left center;
            background-size: cover;
          }
          .brand-text-2{
            background: url("../assets/img/supplier/brand-2.png") no-repeat left center;
            background-size: cover;
          }
          .reserve-text-2{
            background: url("../assets/img/supplier/reserve-2.png") no-repeat left center;
            background-size: cover;
          }
          .bidding-text-2{
            background: url("../assets/img/supplier/bidding-2.png") no-repeat left center;
            background-size: cover;
          }
        }
      }
    }
  }
</style>