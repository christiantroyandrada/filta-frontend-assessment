<template>
  <nav>
    <router-link to="/">Exercise 1</router-link> |
    <router-link to="/exercise-two">Exercise 2</router-link>
  </nav>
  <router-view/>
</template>

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

@media screen and (max-width:299px) {
  nav {
    display: block;
    text-align: center;
  }
}
</style>
