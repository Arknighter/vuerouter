<template>
  <h2>App</h2>
    <div class="nav">
       <router-link to="/home" >首页</router-link>
       <router-link to="/about" >关于</router-link>
       <router-link to="/user" >用户</router-link>
      <router-view></router-view>
    </div>
    <br>
    <!-- 普通元素调整路由 -->
    <span @click="homeRouterBtn">首页</span>
    <button @click="aboutRouterBtn">关于</button>

</template>

<script setup>
import { useRouter } from 'vue-router';

    //  import Home from '../components/Home.vue'
    // import About from '../components/About.vue'

    const router = useRouter()

    const homeRouterBtn = () => {
      router.push('/home')
    }
    const aboutRouterBtn = () => {
      //方法1
      // router.push('/about')
      //方法2
      router.push({
        path:"/about",
        query:{
          name: "yjh",
          age: 18
        }
      })
    }

</script>

<style scoped>
.router-link-active{
  color:red;
}
</style>
