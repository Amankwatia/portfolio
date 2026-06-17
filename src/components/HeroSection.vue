<template>
  <section class="hero-section" aria-label="Hero introduction">
    <!-- Floating glass orbs (decorative) -->
    <div class="hero-orb hero-orb-1" aria-hidden="true"></div>
    <div class="hero-orb hero-orb-2" aria-hidden="true"></div>
    <div class="hero-orb hero-orb-3" aria-hidden="true"></div>

    <div class="container" style="position:relative; z-index:1;">
      <div class="row align-items-center g-5">
        <!-- Text content -->
        <div class="col-md-7 order-2 order-md-1">
          <p class="hero-subtitle mb-2">
            <i class="bi bi-mortarboard me-2"></i>ICT &amp; Computing Educator &nbsp;|&nbsp;
            <i class="bi bi-search me-2"></i>CS Researcher &nbsp;|&nbsp;
            <i class="bi bi-robot me-2"></i>AI &amp; Web Developer
          </p>
          <h1 class="hero-title">{{ profile.name }}</h1>
          <p class="hero-summary">{{ profile.shortSummary }}</p>
          <div class="d-flex flex-wrap gap-2">
            <RouterLink to="/projects" class="btn btn-primary-custom">
              <i class="bi bi-folder2-open me-1"></i>View My Work
            </RouterLink>
            <RouterLink to="/software-solutions" class="btn btn-outline-custom">
              <i class="bi bi-robot me-1"></i>Software Solutions
            </RouterLink>
            <RouterLink to="/programs-events" class="btn btn-outline-white">
              <i class="bi bi-calendar-event me-1"></i>Programs &amp; Events
            </RouterLink>
            <RouterLink to="/contact" class="btn btn-outline-white">
              <i class="bi bi-envelope me-1"></i>Contact Me
            </RouterLink>
          </div>
        </div>

        <!-- Photo -->
        <div class="col-md-5 order-1 order-md-2 hero-photo-wrap">
          <img
            src="../assets/images/profile-placeholder.svg"
            alt="Portrait of Bright Osei Amankwatia"
            class="hero-photo"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { profile } from '../data/profile.js'
</script>
