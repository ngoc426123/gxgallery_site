<template>
  <div>
    <AlbumsInfo />
    <ListImages />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import AlbumsInfo from '../modules/AlbumsInfo'
import ListImages from '../modules/ListImages'

export default {
  name: 'Detail',

  components: {
    AlbumsInfo,
    ListImages
  },

  methods: {
    ...mapActions('images', [
      'getAlbumsDetail',
    ]),
  },

  created () {
    const slug = this.$route.params.slug;

    this.getAlbumsDetail({slug});
  }
}
</script>