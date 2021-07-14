<template>
  <div style="width: 600px; border: red 1px solid;margin:auto">
    <h1>后台管理登录</h1>
              <el-form label-width="80px" :model="formLabelAlign">
                <el-form-item label="账号">
                  <el-input v-model="acc"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                  <el-input v-model="pwd"></el-input>
                </el-form-item>
              </el-form>

    <el-button v-on:click="denglu">登录</el-button>

            </div>

</template>

<script>
export default {
  name: "backstage",
  data(){
    return{
      acc:'',
      pwd:''
    }
  },
  methods:{
denglu:function (){
    alert("登录成功")
  window.location.href="./manage"
}
  }

}
</script>

<style scoped>
.el-input{
  width: 400px;
}
</style>
