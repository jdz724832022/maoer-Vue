<template>
  <div class="player">
    <div class="cover" :style="{backgroundImage:'url('+sound.coverImg+')'}">
      <div class="record-disk">
        <div class="dist-cover" :style="{backgroundImage:'url('+sound.distImg+')'}"></div>
      </div>
    </div>
    <audio ref="audioPlay" :src="sound.player"></audio>
    <div class="controller">
      <div class="btn-icon btnplay" @click="playAudio" v-show="!isPlay"></div>
      <div class="btn-icon btnpause" @click="pauseAudio" v-show="isPlay"></div>
    </div>
    <div class="progress-bar"></div>
    <div class="soundtime"></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      isPlay: false,
      sound: {}
    }
  },
  methods: {
    playAudio() {
      this.$refs.audioPlay.play()
      this.isPlay = true
    },
    pauseAudio() {
      this.$refs.audioPlay.pause()
      this.isPlay = false
    }
  },
  mounted() {
    axios({
      url: '/sound/getsound?soundid=' + localStorage.getItem('soundId'),
      method: 'get'
    }).then(res => {
      const rea = res.data.info.sound // eslint-disable-line no-unused-vars
      this.sound = {
        coverImg: rea.mosaic_url,
        distImg: rea.front_cover,
        player: rea.soundurl
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
.player {
  position: relative;
  height: 325px;
  margin-top: -40px;
}
.cover {
  position: absolute;
  top: 0;
  width: 100%;
  height: 325px;
  overflow: hidden;
  display: block;
  background-position: 50%;
  background-size: cover;
  z-index: 0;
}
.record-disk {
  position: absolute;
  z-index: 1;
  top: 30px;
  left: 0;
  right: 0;
  height: 220px;
  text-align: center;
  overflow: hidden;
}
.dist-cover {
  width: 220px;
  height: 220px;
  margin: 0 auto;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  overflow: hidden;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
}
.controller {
  position: absolute;
  z-index: 5;
  right: 10px;
  bottom: 20px;
  width: 48px;
  height: 30px;
  background-color: hsla(0, 0%, 84%, 0.4);
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  transition: bottom 0.5s ease;
}
.controller .btn-icon.btnplay {
  background-image: url('../../assets/iconplay.png');
  background-size: 120px 102px;
  margin-left: 1px;
  background-position: -75px 0;
}
.btnpause {
  background-image: url('../../assets/iconplay.png');
  background-size: 120px 102px;
  margin-left: 1px;
  background-position: -75px -30px;
}
.btn-icon {
  display: inline-block;
  width: 28px;
  height: 28px;
  margin-top: 1px;
  background-repeat: no-repeat;
}
/* .btn-icon,
.btn-play {
  background-image: url('https://s0.missevan.com/assets/m/images/build/sprite-icons-sound@2x.0f86e6b7.png');
  background-size: 120px 102px;
  margin-left: 1px;
  background-position: -75px 0;
  display: inline-block;
  width: 28px;
  height: 28px;
  margin-top: 1px;
  background-repeat: no-repeat;
  box-sizing: border-box;
} */
</style>
