<template>
  <div class="table-view">
    <!-- <div class="table-title">招标公告</div> -->
    <el-table :data="tableData" style="width: 100%">
      <template v-for="(item, index) in tableLabel">
        <el-table-column
          prop="item.prop"
          :key="index"
          label="item.label"
          width="item.width"
        >
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>
<script>
export default {
    name:"vTable",
  props: {
    tableLabel: {
      type: Array,
      default: () => {
        return [];
      },
    },

    tableData: {
      type: Array,
      default: () => {
        return [];
      },
    },
    tableOption: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  methods: {},
};
</script>