<template>
  <div class="pannelList">
    <div class="pancrow" v-for="item in arr" :key="item.id">
      <div class="pannav" @click="toSound(item.id)">
        <img :src="item.front_cover" />
      </div>
      <div class="panavtit">{{item.soundstr}}</div>
      <div class="panfot">
        <span class="sple">{{item.view_count|itNum}}</span>
        <span class="spri">{{item.all_comments|itNum}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    arr: Array
  },
  methods: {
    toSound(soundid) {
      localStorage.setItem('soundId', soundid)
      this.$router.push('/soundIndru/' + soundid)
    }
  },
  filters: {
    itNum(value) {
      return value >= 10000 ? (value / 10000).toFixed(1) + '万' : value
    }
  }
}
</script>

<style>
.pancrow {
  width: 96px;
  margin-left: 7px;
  float: left;
}
.pannav {
  width: 96px;
}
.pannav img {
  width: 96px;
  height: 106px;
  background-size: contain;
}
.panavtit {
  width: 100%;
  height: 36px;
  word-break: break-all;

  text-overflow: ellipsis;
  overflow: hidden;

  box-orient: vertical;
  line-clamp: 2;
  line-height: 18px;
  margin: 4px 0;
  color: #616161;
  font-size: 13px;
  width: 100%;
}
.panfot {
  display: flex;
  justify-content: space-between;
}
.panfot span {
  position: relative;
  padding-left: 12px;
  font-size: 11px;
  line-height: 11px;
  color: #bdbdbd;
}
</style>
