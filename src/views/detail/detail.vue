<template>
  <div class="albumPage">
    <div class="albumWall">
      <img :src="albumMsg.img" class="leftimg" />
      <div class="album-deta">
        <div class="album-tit">{{albumMsg.title}}</div>
        <div class="album-name">
          <img :src="albumMsg.ownerImg" />
          <span>{{albumMsg.username}}</span>
        </div>
      </div>
    </div>
    <div class="soundList">
      <div class="souLists" v-for="item in soundlist" :key="item.id" @click="soundplay(item.id)">
        <img :src="item.front_cover" />
        <div class="souDet">
          <div class="soutit">{{item.soundstr}}</div>
          <div class="soufot">
            <span class="soule">{{item.view_count_formatted}}</span>
            <span class="souri">33</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      soundlist: [],
      albumMsg: {}
    }
  },
  methods: {
    soundplay(soundid) {
      localStorage.setItem('soundId', soundid)
      this.$router.push('/soundIndru/' + soundid)
    }
  },
  mounted() {
    axios({
      url: `/sound/soundalllist?albumid=${this.$route.params.albumid}`,
      method: 'get'
    }).then((res) => {
      const rea = res.data.info // eslint-disable-line no-unused-vars
      this.soundlist = res.data.info.sounds
      this.albumMsg = {
        title: rea.album.title,
        img: rea.album.front_cover,
        ownerImg: rea.owner.boardiconurl2,
        username: rea.owner.username
      }
    })
  }
}
</script>

<style>
.tabs {
  position: relative;
  top: -40px;
  z-index: -1;
}
.albumPage {
  width: 100%;
  height: 100%;
  margin-top: -40px;
}
.albumWall {
  width: 100%;
  height: 150px;
  /* filter: blur(3px); */
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  box-sizing: border-box;
}
.leftimg {
  width: 110px;
  height: 110px;
  display: block;

  margin: 15px;
}
.album-deta {
  width: 110px;
  height: 110px;
  color: white;
  margin: 10px;
}
.album-tit {
  width: 160px;
  font-size: 16px;
  height: 30px;
  line-height: 25px;
}
.album-name {
  float: left;
  margin-top: 50px;
  margin-left: 35px;
}
.album-name img {
  height: 25px;
  width: 25px;
  display: block;
  position: absolute;
  left: 150px;
  margin: 2px;
  border-radius: 50%;
}
.souLists {
  width: 100%;
  height: 70px;
  border-bottom: 1px solid lightgrey;
  box-sizing: border-box;
}
.souLists img {
  width: 50px;
  height: 50px;
  display: block;
  margin: 10px;
  float: left;
}
.soutit {
  word-break: break-all;
  text-overflow: ellipsis;
  line-clamp: 2;
  width: 245px;
  height: 36px;
  line-height: 18px;
  font-size: 12px;
  color: #616161;
}
.souDet {
  width: 230px;
  height: 30px;
  padding: 8px;
  margin-left: 57px;
}
.soufot {
  margin-top: 5px;
  width: 140px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #9e9e9e;
  margin-right: 20px;
  padding-left: 18px;
  width: 106px;
}
</style>
