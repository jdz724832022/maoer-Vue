<template>
  <div class="container">
    <div class="containerHead">
      <div class="allAlbums">全部音单</div>
      <div class="albumsType">
        <!-- <span>类型></span> -->
      </div>
    </div>
    <div class="contentList" v-for="item in albumList" :key="item.id" @click="toList(item.id)">
      <div class="albumBox">
        <div class="album-bgimg">
          <img
            :src="item.front_cover"
            style="width: 145px;
              height: 145px;
              background-size: contain;"
          />
          <!-- <div class="album-musnum">{{ item.music_count }}</div> -->
        </div>
        <div class="album-title">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      albumList: []
    }
  },
  methods: {
    toList(albumid) {
      this.$router.push({ name: 'detail', params: { albumid: albumid } })
    }
  },
  mounted() {
    axios({
      url: 'explore/tagalbum?order=0',
      method: 'get'
    }).then((res) => {
      this.albumList = res.data.albums
    })
  }
}
</script>
<style>
a {
  text-decoration: none;
}
.containerHead {
  height: 44px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  padding: 0 14px;
}
.allAlbums {
  font-size: 16px;
  margin-top: 14px;
}
.allAlbums::before {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: 16%;
  height: 24px;
  background-color: #000;
  width: 4px;
  border-radius: 4px;
}
.albumsType {
  font-size: 14px;
  color: #9e9e9e;
}
.albumsType span {
  margin-top: 14px;
  display: block;
  position: relative;
  float: right;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  width: 64px;
  height: 24px;
  line-height: 24px;
  font-size: 13px;
  text-align: center;
  color: #757575;
}
.albumBox {
  margin: 14px;
  width: 127px;
  height: 166px;
  float: left;
  margin-left: 13px;
}
.album-title {
  color: #616161;
  font-size: 13px;
  margin-top: 6px;
  margin-left: 10px;
}
</style>
