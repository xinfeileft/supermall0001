<template>
    <div id=tab-bar>
        <slot></slot>
      
    </div>
</template>

<script>
export default {
    name:"TabBar"
}
</script>

<style scoped>

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
  }
</style>