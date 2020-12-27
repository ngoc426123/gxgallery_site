<template>
  <div>
    <div class="list-album">
      <div
        class="list-album__col"
        v-for="item in listAlbums"
        :key="item.id">
        <div class="list-album__item">
          <div class="list-album__image-wrap">
            <div
              class="list-album__image" 
              :style="{'background-image': `url(${item.thumb})`}"
              :title="item.name">
            </div>
          </div>
          <div class="list-album__info">
            <div class="list-album__name">
            <h3>{{item.name}}</h3>
            </div>
            <div class="list-album__attr">
              <ul>
                <li>{{item.sl}}</li>
                <li>{{item.date}}</li>
              </ul>
            </div>
          </div>
          <router-link :to="`/albumhinh/${item.slug}`"></router-link>
        </div>
      </div>
    </div>
    <Loading />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Loading from '../components/Loading'

export default {
  name: 'ListAlbums',

  components: {
    Loading,
  },

  computed: {
    ...mapState('albums', [
      'page',
      'listAlbums',
      'isLoading',
      'isMore'
    ]),
  },

  methods: {
    ...mapActions('albums', [
      'getListAlbums',
      'incrPage'
    ]),
  },

  created () {
    this.getListAlbums();
  },

  mounted () {
    const self = this;
    window.addEventListener('scroll', function () {
      const winScrollTop = window.scrollY;
      const winHeight = window.innerHeight;
      const winOffsetBottom = winScrollTop + winHeight;

      const dom = document.querySelector('.list-album');
      const domBottom = dom.getBoundingClientRect()['top'] + window.scrollY;
      const domHeight = dom.clientHeight;
      const domOffsetBottom = domBottom + domHeight;
      
      if ( winOffsetBottom >= domOffsetBottom && self.isMore && !self.isLoading ) {
        const nextPage = self.page + 1;
        self.incrPage(nextPage);
        self.getListAlbums();
      }
    });
  },
}
</script>