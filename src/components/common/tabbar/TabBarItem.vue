<template>
    <div class="tab-bar-item" @click="itemClick"> 
      <!--  <img src="../../assets/img/tabbar/1.png" alt="">
        <div>首页</div>--> 
        <div v-if="!isActive"> 
            <slot  name="item-icon"></slot>
        </div>

        <div v-else> 
             <slot name="item-icon-active"></slot>
        </div>
        
        <div :style="activeStyle">
             <slot  name="item-text"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:"TabBarItem",
    props:{
         path:String,
         activeColor:{
             type:String,
             default:'red'
         }
    },
    data(){
        return{
           // isActive: true    
        }
    },
    computed:{
          isActive(){
              //$route 活跃的路由
              return this.$route.path.indexOf(this.path) !==-1
          },
          activeStyle(){
              return this.isActive ? {color: this.activeColor}:{}
          }
    },
    methods:{
        itemClick(){
            //console.log("itemClick")
            this.$router.replace(this.path)
        }
    }
}
</script>
<style   scoped>
#tab-bar{
    display: flex;
    background-color: #f6f6f6;

    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;
    box-shadow: 0 -1px  1px 1px rgb(100,100,100,.2);
  }
  .tab-bar-item{
    flex:1;
    text-align: center;
    height:49px;
    font-size: 14px;
  }
  .tab-bar-item img{
      width: 30px;
      height: 22px;
      margin-top: 3px;
      vertical-align: middle;
      margin-bottom: 2px;
  }
  
</style>