<template>
  <div>
    <div>
      <!--  <login :msg="message" @get="getMsg"></login>-->
      <el-row>
        <el-col :span="4">
          <div>
            <el-image v-bind:src="img"></el-image>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-input v-model="input" placeholder="搜索车票/餐饮/常旅客/相关规章"></el-input>
            <el-button type="primary">搜索</el-button>
          </div>
        </el-col>
        <el-col :span="12">
          <div>
            <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    English<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>English</el-dropdown-item>
                <el-dropdown-item>简体中文</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    我的12306<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>火车票订票</el-dropdown-item>
                <el-dropdown-item>候补订票</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

            <router-link to="/login" >登录</router-link>
            <router-link to="/enroll">注册</router-link>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col >
          <div style="background-color: red;height: 40px;">
            <a href="http://localhost:8080/"><el-button  class="button">首页</el-button></a>&emsp;&emsp;
            <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
      车票<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>单程</el-dropdown-item>
                <el-dropdown-item>&emsp;</el-dropdown-item> <el-dropdown-item>往返</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>&emsp;&emsp;
            <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    团购服务<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>务工人员</el-dropdown-item>
                <el-dropdown-item>&emsp;</el-dropdown-item> <el-dropdown-item>学生团体</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>&emsp;&emsp;
            <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    会员服务<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>会员管理</el-dropdown-item>
                <el-dropdown-item>&emsp;</el-dropdown-item> <el-dropdown-item>积分账户</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>&emsp;&emsp;
            <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    站车服务<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>共享汽车</el-dropdown-item>
                <el-dropdown-item>&emsp;</el-dropdown-item> <el-dropdown-item>车站引导</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>&emsp;&emsp;
            <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    商旅服务<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>旅游</el-dropdown-item>
                <el-dropdown-item>&emsp;</el-dropdown-item> <el-dropdown-item>保险</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>&emsp;&emsp;
            <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    出行指南<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>车票</el-dropdown-item>
                <el-dropdown-item>&emsp;</el-dropdown-item> <el-dropdown-item>购票</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>&emsp;&emsp;
            <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    信息查询<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>时刻表</el-dropdown-item>
                <el-dropdown-item>&emsp;</el-dropdown-item> <el-dropdown-item>天气</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    信息查询<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>时刻表</el-dropdown-item>
                <el-dropdown-item>&emsp;</el-dropdown-item> <el-dropdown-item>天气</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
  </div>
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

      </el-form>
      <!--    <router-view></router-view>-->
    </div>
      <p>证件类型：
        <select id="group" value="1">
          <option value="1">中国居民身份证</option>
          <option value="2">港澳居民来往内地通行证</option>
          <option value="3">台湾居民来往内地通行证</option>
          <option value="4">护照</option>
        </select>
      <p><input type="radio"name="radio">中国居民身份证</p>
      <p><input type="radio"name="radio">外国人永久居留身份证</p>
      <p><input type="radio"name="radio">港澳台居民居住证</p>

      <p>姓&emsp;&emsp;名：<input type="text"placeholder="请输入姓名"></p>
      <p>证件号码：<input type="text"placeholder="请输入您的证件号码"></p>
      <p>邮&emsp;&emsp;箱：<input type="text"placeholder="请正确输入邮箱地址"></p>
      <p>手机号码（+86）：<input type="text"placeholder="请输入您的手机号码"></p>
      <p>旅客类型：<select id="group1" value="1">
        <option value="1">成人</option>
        <option value="2">儿童</option>
        <option value="3">学生</option>
        <option value="4">残疾军人、伤残人民警察</option>
      </select>
      </p>
      <input type="checkbox">我已阅读并同意遵守 <a href="//kyfw.12306.cn/otn/regist/rule"style="text-decoration: none;color: blue">
      《中国铁路客户服务中心网站服务条款》 《隐私权政策》</a>


      <el-button type="primary" @click="handleRegister" style="width:40%;"
      >注册</el-button>

  </div>

</template>

<script>
export default {
  name: "enroll",
  methods:{


  handleRegister:function () {
    if (this.username === '') {
      alert("用户名不能为空")
    }
    if (this.password === '') {
      alert("密码不能为空")
    }
    if (this.username !== '' && this.password !== '') {
      //发送请求提交servlet url
      this.$axios.get("admin/enroll", {
        action: "enroll",
        params: {
          username: this.username,
          password: this.password
        },

      }).then(response => {
        if (response.data == 1) {
          this.$router.replace('/login')
          console.log(response);
          console.log("注册成功")
          alert("注册成功");
        } else {
          console.log("注册失败")
          alert("注册失败")
        }
        // console.log(response.data.name);
      }).catch(error => {
        console.log(error)
      });
    }
  }
  },
  data(){
    return{
      username:'',
      password:'',
      img:'../static/6.png'
    }
  }

}
</script>

<style scoped>
a {
  text-decoration: none;
  color: blue;
  font-size: 30px;
}

.router-link-active {
  text-decoration: none;

}.el-dropdown-link{
   font-size: 20px;
 }
.button{
  font-size: 15px;
  height: 35px;
  cursor: pointer;
  width: 10%;

  border-radius: 20px;
}
.el-dropdown-link {
  cursor: pointer;

}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-input {
  width: 50%;

}
</style>
