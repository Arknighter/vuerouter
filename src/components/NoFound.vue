<template>
    <h2>not found  </h2>
    <h3>当前路径：{{ $route.params.pathMatch }} 不正确</h3>
    <div class="img">
        <img src="../../public/1output.png" alt="">
    </div>
</template>
<script setup>

</script>


<style scoped>
    h3 {
        color: red;
    }
    .img{
        height: 600px;
        width: 600px;
    }
    img{
        height: auto;
        width: 100%;
      
    }
</style>