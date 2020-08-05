<template>
  <div id="app">
    <headTop></headTop>
    <div class="tabs">
      <router-link to="/albums">音单</router-link>
      <router-link to="/recommend">推荐</router-link>
      <router-link to="/catalogs">分类</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import headTop from './components/headTop'
export default {
  name: 'App',
  components: { headTop }
}
</script>

<style>
* {
  margin: 0%;
  padding: 0%;
}
html {
  background-color: whitesmoke;
}
.tabs {
  margin-top: 40px;
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  background-color: white;
  justify-content: space-between;
}
.tabs a {
  padding: 0 35px;
  color: #9e9e9e;
  font-size: 14px;
  text-decoration: none;
}
.tabs a.active {
  color: black;
  border-bottom: black solid 1px;
}
</style>
