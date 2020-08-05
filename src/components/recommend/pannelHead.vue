<template>
  <div class="pannelHead">
    <div class="panltit">
      <i></i>
      <span>{{ title }}</span>
    </div>
    <div class="panlright"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style>
.pannel {
  height: 237px;
}
.pannelHead {
  height: 44px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  padding: 0 14px;
}

.panltit {
  text-align: center;
  font-size: 16px;
  line-height: 16px;
}
.panltit span {
  position: relative;
  top: -3px;
}
.panltit i {
  width: 30px;
  height: 23px;
  line-height: 23px;
  display: inline-block;
  background: url('../../assets/icon.png');
  background-size: 166px 166px;
  background-position: -28px 0;
}
.panlright {
  display: inline-block;
  max-width: 66px;
  text-align: center;
  font-size: 13px;
  color: #9e9e9e;
}
</style>
