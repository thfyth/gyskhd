<template>
    <div class="tender-notice">
        <div class="profile-title">
            招标公告
        </div>
        <div class="table-view">
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
              <el-table-column label="招标标题"
              align="center"
              >
            <template slot-scope="scope">
                <span class="active-tender" @click="jumpFun(scope.row.time)">{{scope.row.name}}</span>
            </template>
              </el-table-column>
              <el-table-column prop="fenlei" label="招标类别"  align="center"></el-table-column>
              <el-table-column prop="time" label="报名截止时间" align="center"></el-table-column>
            </el-table>
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
          fenlei:"工程类-工程篱工类-总包",
          time:"2020-12-14",
        },{
          name:"XX报名",
          fenlei:"工程类-工程篱工类-总包",
          time:"2020-12-14",
        },{
          name:"XX报名",
          fenlei:"工程类-工程篱工类-总包",
          time:"2020-12-14",
        },{
          name:"XX报名",
          fenlei:"工程类-工程篱工类-总包",
          time:"2020-12-14",
        },{
          name:"XX报名",
          fenlei:"工程类-工程篱工类-总包",
          time:"2020-12-14",
        },{
          name:"XX报名",
          fenlei:"工程类-工程篱工类-总包",
          time:"2020-12-14",
        },{
          name:"XX报名",
          fenlei:"工程类-工程篱工类-总包",
          time:"2020-12-14",
        },{
          name:"XX报名",
          fenlei:"工程类-工程篱工类-总包",
          time:"2020-12-14",
        },{
          name:"XX报名",
          fenlei:"工程类-工程篱工类-总包",
          time:"2020-12-14",
        },{
          name:"XX报名",
          fenlei:"工程类-工程篱工类-总包",
          time:"2020-12-14",
        },{
          name:"XX报名",
          fenlei:"工程类-工程篱工类-总包",
          time:"2020-12-14",
        }
      ],
        };
    },
    created() {
        vm = this;
    },
    
    components: {},
    methods: {
        jumpFun(e){
            vm.$router.push("/dashboard/detail/"+e)
        }
    },
};
</script>


<style lang="less">
    .tender-notice{
        width: 60vw;
        margin: 0 auto;
        .profile-title{
            padding: 2px 30px;
            font-size: 22px;
            background: url("../assets/img/other/tender.png") no-repeat left center;
            line-height: 26px;
            border-bottom: 2px solid #21A888;
            display: inline-block;
            margin-bottom: 12px;
        }
        .active-tender{
            cursor: pointer;
        }
    }
</style>