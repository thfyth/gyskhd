<template>
  <!-- 用户中心 -->
  <div class="profile">
    <div class="profile-title">
      我的报名
    </div>
    <div class="table-view">
      <div class="table-left">
        <div class="left-ltst">
            <span class="title-pro">报名分类</span>
            
            <div class="left-item">
              <span v-for="item in noticeType" :key="item.id" @click="getTitle(item.id)" class="title-item" :class="item.id === isActive?'active':''">
                <i :class="item.icon"></i>
                {{item.name}}
              </span>
            </div>
          </div>
      </div>
      <div class="table-right">
          <div class="table-title">
            <div class="search-list">
              <el-input class="search-input" v-model="query.name" placeholder="请输入关键字"></el-input>
            </div>
            <div class="search-list">
              <el-button class="search-btn">搜索</el-button>
            </div>
            <div class="search-list"><el-button class="rester-btn">重置</el-button></div>
          </div>
          <div class="table-box">

            <el-table
              :data="tableData"
              style="width: 100%"
               :header-cell-style="{background:'#21A888',color:'#fff','text-align':'center'}"
              >
              <el-table-column
                type="index"
                label="序号">
              </el-table-column>
              
              <el-table-column prop="fenlei" label="供方分类"  align="center"></el-table-column>
              <el-table-column prop="time" label="报名时间" align="center"></el-table-column>
              <el-table-column label="状态" align="center">
                <template slot-scope="scope">
                  <span v-if="scope.row.status == 0">
                    尚未提交报名
                  </span>
                  <span v-else-if="scope.row.status == 1">
                    审核中
                  </span>
                  <span v-else-if="scope.row.status == 2">
                    审核失败
                  </span>
                  <span v-else>
                    尚未提交报名
                  </span>
                </template>
              </el-table-column>
              <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                  <el-button  v-if="scope.row.status == 0" class="go-id" @click="delFun(scope.row)">
                    继续报名
                  </el-button>
                  <el-button class="res-id"  v-if="scope.row.status == 1">
                    修改
                  </el-button>
                  <el-button class="view-id"  v-if="scope.row.status == 1 || scope.row.status == 2">
                    查看
                  </el-button>
                  <span v-if="scope.row.status == 3">报名截止，已失效</span>
                </template>
              </el-table-column>
            </el-table>
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
      tableData:[
        {
          name:"XX报名",
          fenlei:"工程类/工程施工类/外装",
          time:"2020-12-14",
          status:1,
        },{
          name:"XX报名",
          fenlei:"工程类/工程施工类/外装",
          time:"2020-12-14",
          status:1,
        },{
          name:"XX报名",
          fenlei:"工程类/工程施工类/外装",
          time:"2020-12-14",
          status:0,

        },{
          name:"XX报名",
          fenlei:"工程类/工程施工类/外装",
          time:"2020-12-14",
          status:0,
        },{
          name:"XX报名",
          fenlei:"工程类/工程施工类/外装",
          time:"2020-12-14",
          status:2,
        },{
          name:"XX报名",
          fenlei:"工程类/工程施工类/外装",
          time:"2020-12-14",
          status:3,
        }
      ],
      noticeType:[
        {
          id:1,
          icon:'icon-chubei',
          name:"我的储备报名"
        },
        {
          id:2,
          icon:'icon-pinpai',
          name:"我的品牌报名"
        },
        {
          id:3,
          icon:'icon-zhaobiao',
          name:"我的招标报名"
        },
      ],
      isActive:1
    };
  },
  created() {
    vm = this;
  },
  components: {
  },
  methods: {
    //删除
    delFun(e){
      console.log(e);
    },
    //切换选择报名类型
    getTitle(e){
      vm.isActive = e;
    }
  },
};
</script>

<style lang="less">
  .profile{
    width: 80vw;
    margin: 0 auto;
    .profile-title{
        padding: 2px 30px;
        background: url("../assets/img/other/profile.png") no-repeat left center;
        line-height: 26px;
        border-bottom: 2px solid #21A888;
        display: inline-block;
        margin-bottom: 12px;
    }
    .left-ltst{
      .left-item{
        padding-top: 10px;
      }
      span{
        display: block;
        line-height: 42px;
        text-align: center;
        font-size: 16px;
        font-weight: 400;
      }
      .title-pro{
        background: #36B092;
        text-align: center;
        color: #fff;
        font-weight: 500;
      }
      .title-item{
        border-top:1px solid#fff;
        border-bottom:1px solid#fff;
        cursor: pointer;
        font-weight: 500;
        color: #555555;
      }
      .active{
        border-top:1px solid hsl(165, 53%, 45%);
        border-bottom:1px solid hsl(165, 53%, 45%);
        color: #36B092;
      }
    }
    .table-view{
      border-top: 1px solid #eee;
      padding-top: 18px;
      display: flex;
      .table-left{
        width: 238px;
        margin: 0 20px;
        border-left:1px solid #EEEEEE;
        border-right: 1px solid #EEEEEE;
      }
      .table-right{
        width: calc(100% - 300px);
        .table-title{
          display: flex;
          align-items: center;
          padding: 10px 0;
          div{
            margin-right: 20px;
            line-height: 42px;
            .search-btn{
              background: #21A888;
              border: 2px solid #21A888;
              color: #fff;
              // height: 32px;
              line-height: 32px;
              height: 34px;
              padding: 0 40px;
            }
            .rester-btn{
              color: #333;
              background: #FFFFFF;
              border: 2px solid #A9A9A9;
              line-height: 32px;
                height: 34px;
              padding: 0 40px;
            }
            .search-input{
              .el-input__inner{
                height: 32px;
                line-height: 32px;
                border: 1px solid  #21A888;
              }
            }
          }
        }
        .el-table{
          tr{
            box-shadow: 0px 0px 14px 2px rgba(0, 0, 0, 0.09);
          }
        }
      }
      
    }
    .del-id{
      background: #05C0BE;
      color: #fff;
    }
    .go-id{
      background: #21A888;
      color: #fff;
    }
    .view-id{
      background: #21A888;
      color: #fff;
    }
    .res-id{
      background: #05C0BE;
      color: #fff;
    }
  }
</style>
