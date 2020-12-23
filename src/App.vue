<template>
  <div id="app">
    <Header />
    <div class="constrain">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './modules/Header'

export default {
  name: 'App',

  components: {
    Header
  }
}
</script>
