<template>
    <h2>About</h2>
    <p> {{ $route.query.name }}</p>
    <button @click="backRouteBtn">返回</button>
  </template>
  
  <script setup>
import { useRouter } from 'vue-router';

      const router = useRouter()
      const backRouteBtn = () => {
        //返回
        router.back()
        // router.forward() 前行
        // router.go()  正数负数
      }
      
  </script>
  
  <style scoped>
  
  </style>
  