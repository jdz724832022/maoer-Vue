<template>
  <div class="pannel">
    <pannelHead :title="title"></pannelHead>
    <pannelList :arr="arr"></pannelList>
  </div>
</template>

<script>
import pannelHead from './pannelHead'
import pannelList from './pannelList'
export default {
  data() {
    return {
      arr: []
    }
  },
  props: {
    title: String,
    panlist: Array
  },
  components: {
    pannelHead,
    pannelList
  },
  mounted() {
    this.arr = this.panlist
  }
}
</script>

<style>
.pannel {
  height: 237px;
}
</style>
