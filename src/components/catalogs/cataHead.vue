<template>
  <div class="cataHead">
    <div class="catalogstit">
      <span>{{title}}</span>
    </div>
    <div class="panlright"></div>
  </div>
</template>

<script>
export default {
  name: 'catahead',
  props: {
    title: String
  },
  mounted() {}
}
</script>

<style>
.cataHead {
  height: 44px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  padding: 0 14px;
}

.catalogstit {
  text-align: center;
  font-size: 16px;
  line-height: 16px;
  margin: 5px;
}
.catalogstit span {
  position: relative;
  top: 3px;
}
.catatitlogs span::before {
  content: '';
  display: block;
  position: absolute;
  left: -5px;
  top: 10%;
  height: 80%;
  background-color: #000;
  width: 4px;
  border-radius: 4px;
}
.panlright {
  display: inline-block;
  max-width: 66px;
  font-size: 13px;
  color: #9e9e9e;
}
</style>
