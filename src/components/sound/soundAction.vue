<template>
  <div class="sound-action">
    <ul>
      <li>
        <i class="share"></i>
        <span>分享</span>
      </li>
      <li @click="isRed">
        <i class="like" :class="{aabb:red}"></i>
        <span>喜欢</span>
      </li>
      <li>
        <i class="download"></i>
        <span>下载</span>
      </li>
    </ul>
    <div class="actionbtn" @click="toActbtn">用客户端打开</div>
  </div>
</template>

<script>
import { Dialog } from 'vant'
export default {
  data() {
    return {
      red: false
    }
  },
  components: {
    [Dialog.Component.name]: Dialog.Component
  },
  methods: {
    toActbtn() {
      location.href =
        'https://www.missevan.com/app/download?device=0&ct=missevan'

      // Dialog.confirm({
      //   title: '下载客户端',
      //   message: '下载APP获取更多有趣内容'
      // }).then(() => {
      //         })
    },
    isRed() {
      this.red = !this.red
    }
  }
}
</script>

<style>
.sound-action {
  display: flex;
  align-items: center;
  padding: 14px 12px 10px;
  background-color: #fff;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.05);
}
.sound-action ul {
  display: flex;
  list-style: none;
  flex-grow: 1;
  justify-content: space-around;
  list-style-type: none;
}
.sound-action ul li {
  display: list-item;
  padding: 0 2px;
  text-align: center;
  cursor: pointer;
}
.sound-action ul li i {
  display: block;
  width: 35px;
  height: 35px;
  background-image: url('../../assets/sprite-icons.d2c81f81.png');
  background-repeat: no-repeat;
  background-size: 281px 262px;
  border-radius: 50%;
}
.sound-action ul li span {
  display: block;
  margin-top: 3px;
  font-size: 10px;
}
.share {
  background-position: -111px -150px;
}
.like {
  background-position: -37px -150px;
}
.download {
  background-position: -154px 0px;
}
.actionbtn {
  width: 120px;
  height: 32px;
  margin-left: 8px;
  border-radius: 4px;
  border-color: #ed7760;
  background-color: #ed7760;
  text-align: center;
  font-size: 12px;
  line-height: 32px;
  color: white;
}
.aabb {
  background-position: 0px -150px;
}
</style>
