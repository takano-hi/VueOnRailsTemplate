<template>
  <div id="app">
    <header-component />
    <router-view />
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from './components/shared/header';
import FooterComponent from './components/shared/footer';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
}
</script>

<style scoped>
</style>
