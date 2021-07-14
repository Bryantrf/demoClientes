<template>
  <div class="h-100">
    <HeaderComponent />

    <transition name="fade" appear mode="out-in">
      <b-container fluid class="custom-h-100">
        <router-view class="mt-4"></router-view>
      </b-container>
    </transition>
  </div>
</template>

<script lang="ts">
import HeaderComponent from "@/shared/components/header.vue";
import FooterComponent from "@/shared/components/footer.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({ components: { HeaderComponent, FooterComponent } })
export default class extends Vue {}
</script>

<style scoped></style>
