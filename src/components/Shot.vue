<template>
    <!-- 所有的内容要被根节点包含起来 -->
 
   <div>
   <router-link to="/home/useradd"> 增加用户</router-link>

   <hr>

   <router-view></router-view>
       


       
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
</style>