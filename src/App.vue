<template>
  <div id="app">
     <router-view></router-view>
     <tab-bar>
      <tab-bar-item path="/home" activeColor="deepPink">
        <img slot="item-icon" src="~assets/img/tabbar/home1.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/home.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item >
      <tab-bar-item path="/category" activeColor="deepPink">
        <img slot="item-icon" src="~assets/img/tabbar/catc1.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/catc.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item >
      <tab-bar-item path="/buy" activeColor="deepPink">
        <img slot="item-icon" src="~assets/img/tabbar/buy1.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/buy.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item >
      <tab-bar-item path="/my" activeColor="deepPink">
        <img slot="item-icon" src="~assets/img/tabbar/my1.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/my.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item >
     </tab-bar>
     
  </div>
</template>

<script>

 import TabBar from './components/common/tabbar/TabBar'
 import TabBarItem from './components/common/tabbar/TabBarItem'

export default {
  name: 'App',
  components: {
      TabBar,
      TabBarItem 
  }
}
</script>

<style>
   @import"./assets/css/base.css"; 
</style>
