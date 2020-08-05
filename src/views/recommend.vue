<template>
  <!-- <rotation></rotation> -->
  <div>
    <pannelItem
      v-for="item in panlist"
      :key="item.id"
      :title="item.title"
      :panlist="item.objects_point"
    ></pannelItem>
  </div>
</template>

<script>
// import rotation from '../components/rotation'
import axios from 'axios'
import pannelItem from '../components/recommend/pannelItem'
export default {
  name: 'recommend',
  data() {
    return {
      panlist: []
    }
  },
  components: {
    pannelItem
  },
  mounted() {
    axios({
      url: '/sound/newhomepagedata',
      method: 'get'
    }).then((res) => {
      this.panlist = res.data.info.music
    })
  }
}
</script>

<style></style>
