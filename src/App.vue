<template>
  <h2>App</h2>
    <div class="nav">
       <router-link to="/home" >首页</router-link>
       <router-link to="/about" >关于</router-link>
       <router-link to="/user" >用户</router-link>
      <router-view></router-view>
    </div>
    
</template>

<script setup>
//  import Home from '../components/Home.vue'
// import About from '../components/About.vue'

</script>

<style scoped>
.router-link-active{
  color:red;
}
</style>
