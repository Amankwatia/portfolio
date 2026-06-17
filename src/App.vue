<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <a href="#main-content" class="visually-hidden-focusable p-2 m-2 bg-white rounded">Skip to main content</a>
  <Navbar />
  <div id="main-content">
    <RouterView />
  </div>
  <Footer />
</template>
