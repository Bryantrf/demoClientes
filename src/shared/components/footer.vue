<template>
  <footer class="footer fixed-bottom mt-auto py-3 b-0">
    <div class="container d-flex flex-column">
      <small class="text-white"> Address management </small>
      <small class="text-white"> Bryant Rijo {{ currentYear }} </small>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  currentYear = new Date().getFullYear();
}
</script>

<style scoped>
.footer {
  text-align: center;
  background-color: #1d80cd;
  padding: 40px 0;
  width: 100%;
  margin-top: auto;
}
</style>
