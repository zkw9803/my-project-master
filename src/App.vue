<template>
  <div id="app">
<!--    <router-view/>-->
<!--    <login></login>-->
<!--    <enroll></enroll>-->
    <router-view><Index></Index></router-view>
  </div>
</template>

<script>
// import Login from './components/Login'
// import enroll from './components/enroll'
import Index from './components/view/Index'

export default {
  // components: {Login: Login,enroll:enroll},
  components: {Index: Index},

  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

</style>
