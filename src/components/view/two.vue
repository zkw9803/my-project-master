<template>
  <div>
    <el-menu
      router :default-active="this.$route.path"
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="/three">
        <i class="el-icon-menu"></i>
        车票
      </el-menu-item>
      <el-menu-item index="/three">
        <i class="el-icon-menu"></i>
        常用查询
      </el-menu-item>
      <el-menu-item index="/three">
        <i class="el-icon-menu"></i>
        订餐
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "two",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>
