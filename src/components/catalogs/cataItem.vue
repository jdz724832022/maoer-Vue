<template>
  <div>
    <div class="cataItems" v-for="item in sonlist" :key="item.id">
      <cataHead :title="item.catalog_name"></cataHead>
      <cataList :id="item.id"></cataList>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import cataHead from './cataHead'
import cataList from './cataList'
export default {
  data() {
    return {
      sonlist: []
    }
  },
  components: {
    cataHead,
    cataList
  },
  mounted() {
    axios({
      url: '/mobileWeb/catalogs',
      method: 'get'
    }).then((res) => {
      let arary = res.data.info
      this.sonlist = arary[this.$route.query.id].son
    })
  }
}
</script>

<style>
/* .tabs {
  position: relative;
  top: -40px;
  z-index: -1;
} */
.cataItems {
  height: 237px;
}
</style>
