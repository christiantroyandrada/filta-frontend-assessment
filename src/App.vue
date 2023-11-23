<template>
  <nav>
    <router-link to="/">Exercise 1</router-link> |
    <router-link to="/exercise-two">Exercise 2</router-link>
  </nav>
  <router-view v-slot="{ Component, route }">
    <transition name="fade">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
</template>
<script>
export default {
  computed: {
    transitionName () {
      return this.$route.meta.transition || 'fade' // Define transition name in route meta if needed
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  margin: 0 0;
  background-color: black;

  a {
    font-weight: bold;
    color: #fff;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
    &:hover {
      color: grey;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width:299px) {
  nav {
    display: block;
    text-align: center;
  }
}
</style>
