<template>
  <div class="soundTabs">
    <ul class="soundTabslist">
      <router-link to="/soundIndru/:id" class="stn">简介</router-link>
      <router-link to="/soundTalk/:id" class="stn">评论</router-link>
      <router-link to="/soundPic/:id" class="stn">图片</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 0
    }
  },
  mounted() {
    this.id = localStorage.getItem('soundId')
  },
  methods: {}
}
</script>

<style>
.soundTabs {
  display: block;
  position: relative;
}
.soundTabslist {
  display: flex;
  position: relative;
  height: 40px;
  line-height: 40px;
  justify-content: space-between;
  font-size: 12px;
  margin: 6px 0;
  overflow-x: scroll;
  overflow-y: hidden;
}
.stn {
  position: relative;
  display: inline-block;
  text-align: center;
  flex: 1 0 auto;
  cursor: pointer;
  color: black;
  z-index: 0;
}
.stn::before {
  content: '';
  display: block;
  position: absolute;
  top: 10px;
  left: 0;
  border-left: 1px solid #e0e0e0;
  height: 18px;
}
.stn::after {
  content: '';
  width: 74px;
  height: 100%;
  display: block;
  position: absolute;
  bottom: 0;
  margin: 0 -webkit-calc((100% - 74px)/2);
  margin: 0 -moz-calc((100% - 74px)/2);
  margin: 0 calc((100% - 74px) / 2);
  border-bottom: 2px solid transparent;
  z-index: 1;
}
.soundTabslist a {
  text-decoration: none;
}
.soundTabslist a.active {
  color: #c14a3f;
  border-bottom: #c14a3f solid 2px;
}
</style>
