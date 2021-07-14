<template>
  <div>
    <el-row :gutter="24">
      <el-col :span="8"><div class="grid-content bg-purple">
        <two></two>
      </div></el-col>
      <el-col :span="16"><div class="grid-content bg-purple"style="width: 200px;">
        <router-view></router-view>
      </div></el-col>
    </el-row>
  </div>
</template>

<script>


import two from "./two";

export default {
  name: "one",
  components:{two:two}
}
</script>

<style scoped>

</style>
