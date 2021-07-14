<template>
  <div>
        <el-table
        :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)">
        <el-table-column
          prop="username"
          label="名字"
          width="180">
        </el-table-column>
        <el-table-column
          prop="password"
          label="密码"
          width="180">
        </el-table-column>
        <el-table-column
          prop="studentId"
          label="id">
        </el-table-column>
          <el-table-column
            prop="IDCard"
            label="身份证">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small">
                <el-button type="text" @click="open">删除</el-button>
               </el-button>
            </template>
          </el-table-column>
      </el-table>
        <div class="block" style="margin-top:15px;">
          <el-pagination align='center' @size-change="handleSizeChange" @current-change="handleCurrentChange"
                         :current-page="currentPage"
                         :page-sizes="[1,2,5,10,20,50,100]"
                         :page-size="pageSize"
                         layout="total, sizes, prev, pager, next, jumper"
                         :total="tableData.length">
          </el-pagination>
        </div>


  </div>
</template>

<script>
import Menu from "./Menu";

export default {
  components:{Menu:Menu},
  data() {
    return {
      tableData: [],
      currentPage: 1, // 当前页码
      total: 20, // 总条数
      pageSize:5// 每页的数据条数
    };
  },

  methods: {
    //每页条数改变时触发 选择一页显示多少行
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize = val;
    },
    //当前页改变时触发 跳转其他页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    deleteRow(index, rows) {

      rows.splice(index, 1);
    },
    open() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });

    }
    // handleDelete(index, row) {
    //
    //
    //     rows.splice(index, row);
    //
    //   console.log(index, row);
    // }
  },
  name: "manage",
  beforeMount() {
  },
  mounted() {
    this.$axios.get("admin/select",{

      }
    ).then(response=>{
      console.log(">>>>>>>>>>>>>")
      console.log(response.data);
      this.tableData=response.data;

    }).catch(error => {
      console.log(">>>>>>>>>>>>失败")
      console.log(error)
    });
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;

}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
