<template>
  <div class="cataList">
    <div class="catacrow" v-for="item in soulis" :key="item.id" @click="toSound(item.id)">
      <div class="catanav">
        <img :src="item.front_cover" />
      </div>
      <div class="catr">
        <div class="catatit">{{item.soundstr}}</div>
        <div class="usname">UP主:{{item.username}}</div>
        <div class="panfot">
          <span class="sple">{{item.view_count|itNum}}</span>
          <span class="spri">{{item.duration|itNum}}</span>
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
      soulis: []
    }
  },
  props: ['id'],
  methods: {
    toSound(sounid) {
      localStorage.setItem('soundId', sounid)
      this.$router.push('/soundIndru/' + sounid)
    }
  },
  mounted() {
    axios({
      url: `/mobileWeb/catalogmenu?order=3&cid=${this.id}&page_size=4`
    }).then((res) => {
      this.soulis = res.data.info.Datas
    })
  },
  filters: {
    itNum(value) {
      return value >= 10000 ? (value / 10000).toFixed(1) + '万' : value
    }
  }
}
</script>

<style>
.catacrow {
  height: 90px;
  line-height: 90px;
  display: block;
  position: relative;
  margin: 0;
}
.catanav {
  width: 70px;
  height: 70px;
  border-radius: 4px;
  margin: 10px;
  float: left;
  overflow: hidden;
  position: relative;
  display: block;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 50%;
}
.catanav img {
  width: 70px;
  height: 70px;
  background-size: contain;
}
.usname {
  width: 86%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 12px;
  height: 20px;
  line-height: 20px;
  color: #9e9e9e;
}
.catr {
  width: calc(100% - 90px);
  float: right;
  padding: 10px 0;
  height: 70px;
  color: #424242;
  overflow: hidden;
  position: relative;
}
.catatit {
  width: 94%;
  height: 36px;
  word-break: break-all;
  text-overflow: ellipsis;
  font-size: 16px;
  line-height: 18px;
  overflow: hidden;
  color: #616161;
}
.panfot {
  height: 12px;
  line-height: 12px;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 11px;
}
.panfot span {
  position: relative;
  padding-left: 12px;
  font-size: 11px;
  line-height: 11px;
  color: #bdbdbd;
}
</style>
