<template>
  <div class="list-album">
    <div
      class="list-album__col"
      v-for="item in listAlbums"
      :key="item.id">
      <div class="list-album__item">
        <div class="list-album__name">
          <h3>{{item.name}}</h3>
        </div>
        <div class="list-album__image" >
          <img
            data-loading="images/temp/image-400x300.jpg"
            :src="item.thumb"
            :alt="item.name">
        </div>
        <div class="list-album__info">
          <div class="list-album__attr">
            <ul>
              <li>số lượng: {{item.sl}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ListAlbums',

  computed: {
    ...mapState('albums', [
      'listAlbums'
    ]),
  },

  methods: {
    ...mapActions('albums', [
      'getListAlbums'
    ]),
  },

  created () {
    this.getListAlbums();
  },
}
</script>