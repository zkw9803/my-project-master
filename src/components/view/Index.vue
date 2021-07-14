<template>
  <div>
    <div class="position">
      <img src="static/17.png" style="width: 60%;">
    </div>
    <el-row>
      <el-col :span="4">
        <div>
          <el-image v-bind:src="img"></el-image>
        </div>
      </el-col>
      <el-col :span="20">
        <div style="background:url(static/16.png);background-size:100% 100%">
          <el-input v-model="input" placeholder="搜索车票/餐饮/常旅客/相关规章"></el-input>
          <el-button type="primary">搜索</el-button>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link" style="font-size: 10px">
    English<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item style="font-size: 1px">English</el-dropdown-item>
              <el-dropdown-item>简体中文</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link" style="font-size: 10px">
    我的12306<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>火车票订票</el-dropdown-item>
              <el-dropdown-item>候补订票</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <router-link to="/login">登录</router-link>&emsp;
          <router-link to="/enroll">注册</router-link>&emsp;
          <router-link to="/backstage">后台登录</router-link>
        </div>
      </el-col>
    </el-row>
    <br>
    <el-row>
      <el-col>
        <div style="background-color: red;height: 40px;">
          <a href="https://www.12306.cn/index/">
            <el-button class="button">首页</el-button>
          </a>&emsp;&emsp;
          <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    车票<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>单程</el-dropdown-item>
              <el-dropdown-item>&emsp;</el-dropdown-item>
              <el-dropdown-item>往返</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>&emsp;&emsp;
          <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    团购服务<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>务工人员</el-dropdown-item>
              <el-dropdown-item>&emsp;</el-dropdown-item>
              <el-dropdown-item>学生团体</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>&emsp;&emsp;
          <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    会员服务<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>会员管理</el-dropdown-item>
              <el-dropdown-item>&emsp;</el-dropdown-item>
              <el-dropdown-item>积分账户</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>&emsp;&emsp;
          <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    站车服务<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>共享汽车</el-dropdown-item>
              <el-dropdown-item>&emsp;</el-dropdown-item>
              <el-dropdown-item>车站引导</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>&emsp;&emsp;
          <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    商旅服务<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>旅游</el-dropdown-item>
              <el-dropdown-item>&emsp;</el-dropdown-item>
              <el-dropdown-item>保险</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>&emsp;&emsp;
          <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    出行指南<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>车票</el-dropdown-item>
              <el-dropdown-item>&emsp;</el-dropdown-item>
              <el-dropdown-item>购票</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>&emsp;&emsp;
          <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    信息查询<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
            <el-dropdown-menu slot="dropdown">
              1875088
              <el-dropdown-item>时刻表</el-dropdown-item>
              <el-dropdown-item>&emsp;</el-dropdown-item>
              <el-dropdown-item>天气</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
    <div>
      <img :src="image[currentIndex]" style="width: 100%;height: 400px;">
    </div>
<div style="position: absolute;top:17%;left: 5%;width: 30%;height: 50%;background-color: white">
  <one class="one">
</one></div>
    <el-row style="margin-left:11%">
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <a href="https://kyfw.12306.cn/otn/view/icentre_qxyyInfo.html"target="_blank">
          <img src="static/20.png"><br>
          重点旅客预约
          </a>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple-light">
          <a href="https://kyfw.12306.cn/otn/view/icentre_lostInfo.html"target="_blank">
            <img src="static/21.png"><br>
            移失物品查找
          </a>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <a href="https://www.12306.cn/index/view/station/shared_Car.html"target="_blank">
          <img src="static/22.png"><br>
          共享汽车
          </a>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple-light">
          <a href="https://www.12306.cn/index/view/station/hand.html"target="_blank">
            <img src="static/23.png"><br>
            便民托运
          </a>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <a href="https://www.12306.cn/mormhweb/czyd_2143/" target="_blank">
            <img src="static/24.png"><br>
            车站引导
          </a>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple-light">
          <a href="https://www.12306.cn/mormhweb/zcfc_2548/"target="_blank">
            <img src="static/25.png"><br>
            站车风采
          </a>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <a href="https://kyfw.12306.cn/otn/view/advice_adviceInfo.html"target="_blank">
            <img src="static/26.png"><br>
            用户反馈
          </a>
        </div>
      </el-col>


    </el-row>
    <div>
      <a href="https://cx.12306.cn/tlcx/index.html" target="_blank"><img src="static/12.jpg" style="width: 40%;"></a>
      <a href="https://exservice.12306.cn/excater/index.html" target="_blank"><img src="static/13.jpg"
                                                                                   style="width: 40%;"></a>
      <a href="https://kyfw.12306.cn/otn/view/my_insurance.html" target="_blank"><img src="static/14.jpg"
                                                                                      style="width: 40%;"></a>
      <a href="https://kyfw.12306.cn/otn/view/commutation_index.html" target="_blank"><img src="static/15.jpg"
                                                                                           style="width: 40%;"></a>
    </div>

  </div>
</template>

<script>
import login from './login'
import one from "./one";

export default {
// methods:{
//   getMsg:function (data){
//     console.log(data)
//     this.message=data
//   }
// },
  name: "Index",
  components: {login: login,one:one},
  data() {
    return {
      // message:'6666'
      img: '../static/6.png',
      input: '',
      image: ['../static/18.jpg', '../static/2.jpg', '../static/3.jpg', '../static/8.jpg', '../static/9.jpg', '../static/10.jpg', '../static/11.jpg'],
      currentIndex: 0
    }

  },
  created() {
    // this的指向问题能用箭头函数不用匿名函数
    //匿名函数改成箭头函数 this代指vue
    setInterval(() => {
      this.currentIndex++;
      if (this.currentIndex === this.image.length) {
        this.currentIndex = 0;
      }
    }, 3000)//自动循环播放图片
  },

}
</script>

<style scoped>
.one{
  margin-top: 100px;
}
/*input样式*/
.el-input {
  width: 20%;
}

/*字体样式*/
a {
  text-decoration: none;
  color: blue;
  font-size: 15px;
}

/*路由去下划线*/
.router-link-active {
  text-decoration: none;

}
img{
  width: 70px;
}

/*下拉菜单样式*/
.el-dropdown-link {
  font-size: 20px;
}

/*按钮样式*/
.button {
  font-size: 15px;
  height: 40px;
  cursor: pointer;
  width: 10%;
  border-radius: 20px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #000;
}

.el-icon-arrow-down {
  font-size: 12px;
}

.position {
  position: fixed;
  left: 91%;
  top: 28%;

}
</style>
