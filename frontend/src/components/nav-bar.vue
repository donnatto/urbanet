<script>
import { authComputed } from '@state/helpers'
import NavBarRoutes from './nav-bar-routes.vue'

export default {
  components: { NavBarRoutes },
  data() {
    return {
      persistentNavRoutes: [
        {
          name: 'home',
          title: 'Inicio',
        },
      ],
      loggedInNavRoutes: [
        {
          name: 'profile',
          title: () => 'Logeado como ' + this.currentUser.user.username,
        },
        {
          name: 'logout',
          title: 'Salir',
        },
      ],
      loggedOutNavRoutes: [
        {
          name: 'login',
          title: 'Ingresar',
        },
      ],
    }
  },
  computed: {
    ...authComputed,
  },
}
</script>

<template>
  <ul :class="$style.container">
    <NavBarRoutes :routes="persistentNavRoutes" />
    <NavBarRoutes v-if="loggedIn" :routes="loggedInNavRoutes" />
    <NavBarRoutes v-else :routes="loggedOutNavRoutes" />
  </ul>
</template>

<style lang="scss" module>
@import '@design';

.container {
  padding: 0;
  margin: 0 0 $size-grid-padding;
  text-align: center;
  list-style-type: none;

  > li {
    display: inline-block;
    margin-right: $size-grid-padding;
  }
}
</style>
