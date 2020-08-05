<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
  </van-swipe>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      rotaList: []
    }
  },
  mounted() {
    axios({
      url: '/mobileWeb/newHomepage3',
      method: 'get'
    }).then(res => {
      // console.log(res.data.info.banner)
    })
  }
}
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
