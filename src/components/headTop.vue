<template>
  <div class="headTop">
    <div class="content">
      <a href="/">
        <i class="logo"></i>
      </a>
      <div class="right">
        <i class="search"></i>
        <i class="menu"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headTop'
}
</script>

<style>
.headTop {
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
}
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 20px;
  line-height: 20px;
  background-color: #000;
}
.content i {
  display: inline-block;
}
.logo {
  width: 100px;
  height: 20px;
  background-image: url('../assets/logo.26b47301.png');
  background-size: 100% 100%;
}
.search {
  width: 22px;
  height: 20px;
  background-image: url('../assets/sprite-icons.d2c81f81.png');
  background-size: 281px 262px;
  background-position: -48px -224px;
  margin-right: 20px;
}
.menu {
  width: 22px;
  height: 20px;
  background-image: url('../assets/sprite-icons.d2c81f81.png');
  background-size: 281px 262px;
  background-position: -24px -224px;
}
</style>
