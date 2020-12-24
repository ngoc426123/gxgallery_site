<template>
  <div id="app">
    <Header />
    <div class="constrain">
      <router-view/>
    </div>
    <LightBox />
  </div>
</template>

<script>
import Header from './modules/Header'
import LightBox from './modules/LightBox'

export default {
  name: 'App',

  components: {
    Header,
    LightBox
  }
}
</script>
