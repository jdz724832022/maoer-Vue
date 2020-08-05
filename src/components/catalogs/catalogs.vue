<template>
  <div class="tab-content">
    <div class="catalogs">
      <div class="catalog" v-for="item in cataloglist" :key="item.id" @click="tocatalogs(item.id)">
        <span class="catalog-icon" :style="{'background-image': 'url('+item.pic+')'}"></span>
        <span class="catalog-title">{{item.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      cataloglist: []
    }
  },
  methods: {
    tocatalogs(cataId) {
      this.$router.push({ path: '/catalogs/' + cataId, query: { id: cataId } })
    }
  },
  mounted() {
    axios({
      url: '/mobileWeb/catalogroot'
    }).then((res) => {
      this.cataloglist = res.data.info
    })
  }
}
</script>

<style>
.tab-content {
  position: relative;
  left: 6px;
}

.catalogs {
  display: block;
  padding: 14px;
}

.catalog {
  display: inline-block;
  position: relative;
  width: 87px;
  height: 104px;
  margin: 0 10px 14px 0;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
}

.catalog-icon {
  display: block;
  height: 50px;
  width: 50px;
  margin: 15px auto 8px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 100%;
}

.catalog-title {
  font-size: 14px;
}
</style>
