<template>
  <nav class="navbar navbar-expand-md navbar-dark-custom sticky-top" aria-label="Main navigation">
    <div class="container">
      <RouterLink class="navbar-brand d-flex align-items-center gap-2" to="/" aria-label="Home – Bright Osei Amankwatia">
        <span class="navbar-brand-text">BOA</span>
      </RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
        aria-controls="mainNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="mainNavbar">
        <ul class="navbar-nav ms-auto align-items-md-center gap-md-1">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/" exact-active-class="router-link-active">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/teaching">Teaching</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/research">Research</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/projects">Projects</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/software-solutions">Software Solutions</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/programs-events">Programs &amp; Events</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { onMounted } from 'vue'

onMounted(() => {
  // Collapse mobile navbar after clicking a nav link
  const navLinks = document.querySelectorAll('#mainNavbar .nav-link')
  const navbarCollapse = document.getElementById('mainNavbar')
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        // Instantiate (or reuse) Bootstrap Collapse and hide it
        const bsCollapse =
          window.bootstrap?.Collapse?.getInstance(navbarCollapse) ||
          new window.bootstrap.Collapse(navbarCollapse, { toggle: false })
        bsCollapse.hide()
      }
    })
  })
})
</script>
