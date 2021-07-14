<template>
  <b-navbar>
    <b-navbar-brand :to="{ name: 'ClientList' }"> </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav> </b-navbar-nav>
      <b-navbar-nav class="ml-auto d-flex flex-wrap align-content-center">
        <b-nav-item class="user-image">
          <!-- <b-navbar-brand href="#" class="mr-1"> -->
          <b-img
            class="shadow-sm"
            width="40"
            height="40"
            src="avatarimage.png"
            rounded="circle"
          ></b-img>
          <!-- </b-navbar-brand> -->
        </b-nav-item>

        <b-nav-item class="username">Admin</b-nav-item>
        <b-nav-item href="#" class="username">|</b-nav-item>

        <b-nav-item class="float-right username" right @click="logout()"
          >Cerrar Sesión</b-nav-item
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class HeaderComponent extends Vue {}
</script>
<style lang="scss">
.user-image {
  a {
    padding: 0;
  }
}
.username > a {
  color: white !important;
}
li.nav-item.username {
  display: flex;
  justify-content: center;
  align-items: center;
}
.sub-menu {
  position: absolute;
  bottom: -79px;
  background: white;
  z-index: 99999;
  li.menu-item {
    padding: 10px;
    &:hover {
      color: white;
    }
    a {
      width: 100%;
      text-decoration: none;
      padding: 0 10px;
      &:hover {
        background: #1d80cd;
        color: white !important;
      }
      color: black !important;
    }
  }
}
nav.navbar {
  &.navbar-light {
    background-color: #1d80cd;
    a {
      color: white;
    }
  }
}
.navbar-nav {
  li.nav-item {
    a.nav-link {
      color: white;
    }
  }
}
</style>
