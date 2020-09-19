<template>
  <div id="app">
    <off-canvas/>
    <ur-header/>
    <router-view/>
    <ur-footer/>
  </div>
</template>

<script>
import OffCanvas from '@/components/layout/Offcanvas.vue' 
import UrHeader from '@/components/layout/Header.vue'
import UrFooter from '@/components/layout/Footer.vue'

export default {
  name: 'app',

  components: {OffCanvas, UrHeader, UrFooter}
}
</script>

<style>
  @import './assets/css/style.css';
</style>
