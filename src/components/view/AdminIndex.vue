<template>
  <div>
    <h1>后台管理</h1>
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple">
        <Menu></Menu>
      </div></el-col>
      <el-col :span="16"><div class="grid-content bg-purple">
        <router-view></router-view>
      </div></el-col>
    </el-row>
  </div>

</template>

<script>
import Menu from "./Menu";

export default {
  name: "AdminIndex",
  components:{Menu:Menu}
}
</script>

<style scoped>

</style>
