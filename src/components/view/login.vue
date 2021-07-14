<template>
<div>
<!--  <el-row>-->
<!--    <el-col >-->
<!--      <div>-->
        <a href="./Index"><el-image v-bind:src="img"></el-image></a>
<!--     <div class="div">-->
<!--       <div v-bind:style="div">-->
<!--         <div style="height: 25%"><br>-->
<!--           扫码登录&emsp;&emsp;&emsp;|&emsp;&emsp;&emsp;账号登录-->
<!--         </div>-->
<!--         <input style="width: 60%;height: 5%" type="text"placeholder="用户名/邮箱/手机号"/><br><br>-->
<!--         <input style="width: 60%;height: 5%"type="password"placeholder="密码"/><br><br>-->
<!--         <div class="div1">-->
<!--         </div>-->
<!--         <button class="button">立即登录</button>-->
<!--         <p> <a href="enroll" style="position: absolute;top: 84%;left: 19%;text-decoration:none;color: blue">注册12306账号&emsp;|</a>-->
<!--           <a v-bind:href="url" style="position: absolute;top: 84%;left: 53%;text-decoration:none;color: blue">&emsp;忘记密码？</a>-->
<!--         <p>-->
<!--         <hr color="	#F0F0F0"style="position: absolute;top: 87%;width: 100%"></hr>-->
<!--         <p style="position: absolute;top: 87%">铁路12306每日05:00~23:30提供购票、改签、变更到站业务办理，全天均可办理退票等其他服务。</p>-->
<!--       </div>-->
<!--     </div>-->

<!--        <div style="width: 500px; border: red 1px solid;margin:auto">-->
<!--          <el-form label-width="80px" :model="formLabelAlign">-->
<!--            <el-form-item label="名称">-->
<!--              <el-input v-model="Name"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="活动区域">-->
<!--              <el-input ></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="活动形式">-->
<!--              <el-input ></el-input>-->
<!--            </el-form-item>-->
<!--          </el-form>-->
<!--        </div>-->
<!--      </div>-->

<!--    </el-col>-->
<!--  </el-row>-->
  <div class="div">
    <el-form
      status-icon
      label-position="left"
      label-width="0px"
      class="demo-ruleForm login-page">
      <h3 class="title">系统登录</h3>
      <el-form-item  >
        <el-input type="text"

                  placeholder="用户名"
                  v-model="username"
        ></el-input>
      </el-form-item>
      <el-form-item >
        <el-input type="password"
                  auto-complete="off"
                  placeholder="密码"
                  v-model="password"
        ></el-input>
      </el-form-item>
      <el-form-item  >
        <el-input type="text"

                  placeholder="验证码"
                  v-model="password2"
        ></el-input>
      </el-form-item>
      <el-checkbox
        class="rememberme"
      >记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:40%;"
                   @click.prevent="handleLogin" >登录</el-button>
        <el-button type="primary" @click="handleRegister" style="width:40%;"
        >注册</el-button>
      </el-form-item>
    </el-form>
    <!--    <router-view></router-view>-->
  </div>
<!--  //1.在子组件中绑定一个事件-->
<!--  <button @click="ReParentMsg">子传父组件</button>-->
  <img :src="image[currentIndex]" style="width: 100%;height: 550px;">
  <div>
    <el-row style="margin-left: 18%">
      <el-col span="3">
        友情链接
        <div class="tupian">
         <a href="http://www.china-ric.com/" target="_blank"><img src="static/27.png"></a>
        </div>&emsp;
        <div class="tupian">
        <a href="http://www.95306.cn/"target="_blank"><img src="static/28.png"></a>
      </div>
      </el-col>
      <el-col span="3"style="margin-top:20.8px">
        <div class="tupian">
          <a href="http://www.cre.cn/"target="_blank"><img src="static/29.png"></a>
        </div>&emsp;
        <div class="tupian">
          <a href="http://www.china-railway.com.cn/"target="_blank"><img src="static/30.png"></a>
        </div>
      </el-col>
      <el-col span="18">
        <div>
          <img src="static/31.png"style="width: 80%;">
        </div>
      </el-col>
    </el-row>
  </div>
<el-row>
  <el-col>
    <div>
      <img src="static/32.png"style="width: 100%;">
    </div>
  </el-col>
</el-row>
</div>

</template>

<script>
export default {
  name:"login",
  methods:{
    handleRegister:function(){
      this.$router.replace('/enroll')
    },
    handleLogin:function (){
      if (this.username===''){
        alert("用户名不能为空")
      }
      if (this.password===''){
        alert("密码不能为空")
      }
      if (this.username!=='' && this.password!==''){
        //发送请求提交servlet url
        this.$axios.get("admin/login",{
          action:"login",
          params:{
            username:this.username,
            password:this.password
          },

        }).then(response=>{
          if (response.data==1){
            this.$router.replace('/Index')
            console.log(response);
            console.log("登录成功")
           alert("登录成功");
          }
          else if (response.data==3){
            this.$router.replace('/AdminIndex')
            console.log(response);
            console.log("管理员登录成功")
            alert("管理员登录");
          }else {
            console.log("登录失败")
            alert("登录失败")
          }

        }).catch(error=>{
          console.log(error)
        });

      }
    }
  },
  data(){
    return{
      username:'',
      password:'',
      password2:'',
      img:'../static/6.png',
      image:['../static/10.jpg','../static/11.jpg'] ,
      currentIndex:0
    }
},
created(){
  // this的指向问题能用箭头函数不用匿名函数
  //匿名函数改成箭头函数 this代指vue
  setInterval( ()=>{
    this.currentIndex++;
    if(this.currentIndex === this.image.length){
      this.currentIndex = 0;
    }
  },3000)//自动循环播放图片
},
//   computed:{
//     getParam:function (){
//       this.$route.params.pid;
//     }
//   },
//   name: "login",
//   props:["msg"],
// data(){
//   return{
//     count:1,
//     Name:'',
//   }
// },
  // methods:{
  //   ReParentMsg:function (){
  //     //2.把值传给父组件     this.$emit
  //     // this.$emit("get",66555);
  //     this.$emit('get',this.count++)
  //
  //   }
  // }
}
</script>

<style scoped>
.div{
  width: 30%;
  height: 80%;
  /*background-color: white;*/
  position: absolute;
  top: 29%;
  left:67% ;
}
.div1{
  width: 61.5%;
  height:30%;
 background:black;
  position: absolute;
  left: 19%
}
.button {
  width:62%;
  height:5%;
  background: #FF9224;
  position: absolute;
  top: 79%;
  left:19%;
  border-radius:10px;
  outline:none;
  border:none;
}
/*.login-container {*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  position: absolute;*/
/*  top: 15%;*/
/*  left:67% ;*/
/*}*/
.login-page {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  margin: 20px auto;
  width: 350px;
  padding: 35px 35px 15px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
label.el-checkbox.rememberme {
  margin: 0px 0px 15px;
  text-align: left;
}
img{
  width:150px;
}
.tupian{
  border: black 1px solid;
}
</style>
