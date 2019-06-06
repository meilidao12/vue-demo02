<template>
    <div>
        首页1
        <br>
        <hr>
        <el-row>
            <el-button type="primary" @click="hhh">主要按钮</el-button>
        </el-row>
        <br>
        <hr>
        <el-progress type='circle' :percentage='25' :width='50' :show-text='false' :stroke-width='4'>123</el-progress>
        <hr>
        <br>
        <div>{{message}}</div>
        <br>
        <hr>
        <div>{{reversedmessage}}</div>
        <br>
        <hr>
        <div>{{firstname}}</div>
        <div>{{lastname}}</div>
        <div>{{fullname}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            message: 'hello11234',
            firstname:'fffffff',
            lastname:'Bar123231321',
        }
    },
    methods:{
        hhh:function(){
            alert("点击了主要按钮");
        }
    },
    // 计算属性
    computed:{
        reversedmessage:function(){
            return this.message.split('').reverse().join('');
        },
        fullname:function(){
            return this.firstname + " " + this.lastname
        }
    },
    //侦听属性
    watch:{
        firstname:function(val){
            this.fullname = val + ' ' + this.lastname;
        },
        lastname:function(val){
            this.fullname = this.firstname + ' '+val;
        }
    }
}
</script>

<style scoped>

</style>

