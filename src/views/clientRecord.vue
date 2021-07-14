<template>
  <div class="home">
    <Record />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Record from "@/components/clients/clientDetails.vue";
@Component({
  components: {
    Record,
  },
})
export default class RecordView extends Vue {}
</script>
