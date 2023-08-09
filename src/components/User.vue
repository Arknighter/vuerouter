<template>

     <!-- 在模板中拿到路由   user/id -->
    <h2>user: {{ $route.params.id }}</h2>
   

</template>
<script setup>
    import { useRoute } from 'vue-router'
    //获取route跳转的id
    const route = useRoute()
    console.log(route.params.id)

    //

</script>
<style scoped></style>