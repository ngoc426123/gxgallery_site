<template>
  <div class="lightbox" :class="{'active': isShow}">
    <div class="lightbox__outer" :class="{'active': isLoad}">
      <div class="lightbox__inner"><img class="lightbox__img" :src="src" alt=""/></div>
      <div class="lightbox__close" @click="eventClickOutSide"></div>
    </div>
    <div class="lightbox__loading" :class="{'active': !isLoad}">
      <img src="../assets/images/loading.svg" alt="">
    </div>
    <div class="lightbox__overlay" @click="eventClickOutSide"></div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'LightBox',

  computed: {
    ...mapState('lightbox', [
      'src',
      'isShow',
      'isLoad'
    ]),
  },

  watch: {
    src: function () {
      const image = document.querySelector('.lightbox__img');
      const isLoaded = image.complete && image.naturalHeight !== 0;

      console.log(isLoaded);
    }
  },

  methods: {
    ...mapActions('lightbox', [
      'setIsShow'
    ]),

    eventClickOutSide: function () {
      this.setIsShow(false);
    }
  }
}
</script>