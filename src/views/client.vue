<template>
  <div class="home">
    <List />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import List from "@/components/clients/clientList.vue";
@Component({
  components: {
    List,
  },
})
export default class ListView extends Vue {}
</script>
