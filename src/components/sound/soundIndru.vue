<template>
  <div class="soundIndru">
    <div class="sound-info">
      <h3>{{soundr.soundtit}}</h3>
      <ul>
        <li>{{soundr.times}}</li>
        <li>{{soundr.comments}}</li>
        <li>音频ID {{soundr.userId}}</li>
      </ul>
      <div class="introcont">
        <div :class="['jianjie',{active:flag}]">
          <p>简介:</p>
          <div v-html="soundr.page">{{soundr.page}}</div>
        </div>
      </div>
      <span :class="['taikai',{active:flag}]" @click="isTag"></span>
    </div>
    <div class="sound-user">
      <img :src="drama.userPng" />
      <div class="userinfo">
        <div class="usertit">{{drama.usertit}}</div>
        <div class="usertype">{{drama.userlag}} 类型:{{drama.usertype}}</div>
        <div class="usertime">更新至:{{drama.usertime}}</div>
      </div>
      <div class="userbtn">喜欢</div>
    </div>
    <div class="sound-relate"></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      soundr: [],
      drama: [],
      flag: false
    }
  },
  mounted() {
    function getuser1() {
      return axios('/sound/getsound?soundid=' + localStorage.getItem('soundId'))
    }
    function getuser2() {
      return axios(
        '/dramaapi/getdramabysound?sound_id=' + localStorage.getItem('soundId')
      )
    }
    axios.all([getuser1(), getuser2()]).then(
      axios.spread((res1, res2) => {
        const rea = res1.data.info.sound // eslint-disable-line no-unused-vars
        this.soundr = {
          userId: localStorage.getItem('soundId'),
          soundtit: rea.soundstr,
          times: rea.view_count,
          comments: rea.comment_count,
          page: rea.intro
        }
        const rec = res2.data.info.drama
        this.drama = {
          userPng: rec.cover,
          usertit: rec.name,
          userlag: rec.catalog_name,
          usertype: rec.type_name,
          usertime: rec.newest
        }
      })
    )
  },
  methods: {
    isTag() {
      this.flag = !this.flag
    }
  }
}
</script>

<style>
.sound-info {
  padding: 0 10px;
  padding-bottom: 18px;
  border-bottom: 1px solid #e0e0e0;
}
.sound-info h3 {
  font-size: 14px;
  font-weight: 400;
  min-height: 24px;
  line-height: 24px;
}
.sound-info ul {
  list-style-type: none;
  height: 14px;
  line-height: 14px;
  font-size: 10px;
  color: #757575;
  margin: 10px 0;
}
.sound-info ul li {
  display: inline-block;
  position: relative;
  margin-right: 20px;
}
.sound-user {
  position: relative;
  height: 104px;
  margin: 0 10px;
  padding: 18px 2px 18px 72px;
  border-bottom: 1px solid #e0e0e0;
  box-sizing: border-box;
}
.sound-user img {
  display: inline-block;
  position: absolute;
  top: 18px;
  left: 2px;
  width: 60px;
  height: 60px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}
.taikai {
  background-size: 281px 262px;
  background-position: -52px -98px;
  width: 14px;
  height: 8px;
  background-image: url('../../assets/sprite-icons.d2c81f81.png');
  display: block;
  position: relative;
  margin-left: -webkit-calc(100% - 16px);
  margin-left: -moz-calc(100% - 16px);
  margin-left: calc(100% - 16px);
  transition: transform 0.3s;
  transform: rotate(180deg);
}
.introcont {
  display: block;
  position: relative;
}
.jianjie {
  margin: 5px 0;
  font-size: 12px;
  color: #9e9e9e;
  width: 100%;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  line-height: 20px;
  max-height: 40px;
  height: auto;
}
.userinfo {
  display: inline-block;
}
.userinfo img {
  display: inline-block;
  position: absolute;
  top: 18px;
  left: 12px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.usertit {
  display: block;
  color: #000;
  font-size: 14px;
  text-decoration: none;
  height: 20px;
  overflow: hidden;
  line-height: 20px;
  width: 154px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.usertype {
  color: #9e9e9e;
  font-size: 12px;
  height: 20px;
  overflow: hidden;
  line-height: 20px;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.usertime {
  font-size: 12px;
  color: #8c8c8c;
  height: 20px;
  line-height: 20px;
}
.userbtn {
  width: 65px;
  height: 26px;
  padding: 3px;
  float: right;
  border-color: #ed7760;
  background-color: #ed7760;
  color: #fff;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 3px;
  margin: 3px;
  margin-top: 14px;
  box-sizing: border-box;
}
.jianjie.active {
  max-height: none;
}
.taikai.active {
  transform: rotateZ(0deg);
}
</style>
