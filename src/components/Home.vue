<template>
    <!-- 所有的内容要被根节点包含起来 -->
 
   <div>
   <router-link :to="{name:'home1'}">首页1</router-link>
   <router-link :to="{name:'home2'}">首页2</router-link>
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
