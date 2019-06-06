<template>
  <div id="app">
    <button @click="movediv">开始动画</button>
    <input type="text" v-model="zuobiaoleft">
    <input type="text" v-model="zuobiaoright">
    <p>默认情况下，所有 HTML 元素的位置都是静态的，并且无法移动。如需对位置进行操作，记得首先把元素的 CSS position 属性设置为 relative、fixed 或 absolute。</p>
    <div id="moveel" style="background:#98bf21;height:30px;width:30px;position:absolute;"></div>
  </div>
</template>





<script>
import $ from "jquery";
export default {
  data() {
    return {
      zuobiaoleft: 0,
      zuobiaoright: 0
    };
  },
  methods: {
    movediv: function() {
      $("#moveel").animate({
        left: this.zuobiaoleft,
        top: this.zuobiaoright
      });
    }
  }
};
</script>
