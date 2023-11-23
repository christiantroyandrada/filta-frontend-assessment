<template>
  <div id="app">
    <!-- Tabs for Desktop -->
    <div class="d-none d-lg-block" role="navigation">
      <ul class="nav nav-tabs justify-content-center" role="tablist">
        <li v-for="(section, index) in backendData" :key="section.id" :class="{ 'active': index === 0 }">
          <a :id="'tab-' + index" :href="'#content-' + index" class="nav-link" data-toggle="tab" :aria-controls="'content-' + index" :aria-selected="index === 0">{{ section.title }}</a>
        </li>
      </ul>
      <div class="tab-content">
        <div
          v-for="(section, index) in backendData"
          :key="section.id"
          :id="'content-' + index"
          class="tab-pane fade"
          :class="{ 'show active': index === 0 }"
        >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="card shadow-sm mb-4">
                  <div class="card-body p-4">
                    <div class="content-text" v-html="section.content"></div> <!-- Render HTML content -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Accordion for Mobile -->
    <div class="d-lg-none mt-3">
      <div id="accordion">
        <div v-for="(section, index) in backendData" :key="section.id" class="card">
          <div class="card-header" :id="'heading-' + index">
            <h5 class="mb-0">
              <button class="btn btn-link" :data-toggle="'collapse'" :data-target="'#collapse-' + index" :aria-expanded="index === 0 ? 'true' : 'false'" :aria-controls="'collapse-' + index">
                {{ section.title }}
              </button>
            </h5>
          </div>
          <div :id="'collapse-' + index" class="collapse" :class="{ 'show': index === 0 }" :aria-labelledby="'heading-' + index" data-parent="#accordion">
            <div class="card-body p-3">
              <div v-html="section.content"></div> <!-- Render HTML content -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      backendData: (state) => state.backendData
    })
  },
  created () {
    this.$store.dispatch('loadData')
  }
}
</script>
<style scoped>
 .content-text {
  line-height: 1.6; /* Adjust line height for readability */
  color: #333; /* Define text color */
}
.content-text ul {
  margin-top: 0.5em; /* Adjust the margin between the text and the list */
  padding-left: 1.5em; /* Adjust the padding for list indentation */
}

.content-text ul li {
  list-style: disc; /* Change the list item marker style to a disc */
  margin-bottom: 0.5em; /* Adjust the margin between list items */
}

.card-body {
  border-radius: 10px; /* Add border radius to the card body */
  background-color: #f8f9fa; /* Set background color */
}

.btn-link, .nav-link {
  text-decoration: none;
  color: #42b580;
  font-weight: bold;
}
.btn-link:focus {
  border-color: #3ab37c;
  box-shadow: inset 0 1px 1px rgba(224, 84, 84, 0.075), 0 0 8px rgba(4, 56, 30, 0.6);
}
</style>
