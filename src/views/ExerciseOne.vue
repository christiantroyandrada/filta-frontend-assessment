<template>
  <div class="home">
    <div class="container">
      <div class="banner">
        <img v-if="windowWidth > 600" alt="Banner" src="../assets/banner.png">
        <img v-else alt="Banner" src="../assets/mobile-banner.png">
        <div class="text-container">
          <h1 class="heading">Hello Developer!</h1>
          <h5 class="sub-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
        </div>
      </div>
    </div>
    <Cards/>
  </div>
</template>

<script>
import Cards from '@/components/CardsContainer.vue'
import { debounce } from 'lodash'

export default {
  name: 'HomeView',
  components: {
    Cards
  },
  data () {
    return {
      windowWidth: window.innerWidth
    }
  },
  mounted () {
    // Update windowWidth on initial load
    this.updateWindowWidth()
    // Debounce the resize event
    window.addEventListener('resize', this.debouncedUpdateWidth)
  },
  beforeUnmount () {
    window.removeEventListener('resize', this.debouncedUpdateWidth)
  },
  methods: {
    updateWindowWidth () {
      this.windowWidth = window.innerWidth
    }
  },
  computed: {
    debouncedUpdateWidth () {
      return debounce(this.updateWindowWidth, 100) // Adjust debounce time as needed
    }
  }
}
</script>

<style scoped>
h1,h5{
  color: #fff;
}
.banner {
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner img {
  width: 100%;
}

.text-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
}

.heading {
  font-size: 2.7rem;
  margin-bottom: 0;
}

.sub-heading {
  width: 100vw;
  font-size: 1.2rem;
  font-weight: 100 !important;
  margin-top: 0.4rem;
  letter-spacing: 2.5px;
}

.container {
  position: relative;
}

@media screen and (min-width: 601px) and (max-width: 800px) {
  .sub-heading{
    width: 90vw;
  }
}
</style>
