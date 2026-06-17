<template>
  <footer class="footer-dark" role="contentinfo">
    <div class="container">
      <div class="row g-4">
        <!-- Brand -->
        <div class="col-lg-4">
          <div class="footer-brand">Bright Osei Amankwatia</div>
          <p class="footer-tagline mt-1">ICT Educator · Researcher · AI &amp; Web Developer</p>
          <p class="mt-3" style="font-size:0.85rem; color:rgba(255,255,255,0.5)">
            Built with Vue, Bootstrap, and a passion for practical digital transformation.
          </p>
          <!-- Social links -->
          <div class="mt-3">
            <a :href="profile.social.linkedin" class="social-icon-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i class="bi bi-linkedin"></i>
            </a>
            <a :href="profile.social.github" class="social-icon-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i class="bi bi-github"></i>
            </a>
            <a :href="profile.social.googleScholar" class="social-icon-link" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
              <i class="bi bi-mortarboard"></i>
            </a>
            <a :href="profile.social.orcid" class="social-icon-link" target="_blank" rel="noopener noreferrer" aria-label="ORCID">
              <i class="bi bi-person-badge"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="col-6 col-lg-2">
          <h6>Quick Links</h6>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/teaching">Teaching</RouterLink>
          <RouterLink to="/research">Research</RouterLink>
          <RouterLink to="/projects">Projects</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </div>

        <!-- Services -->
        <div class="col-6 col-lg-3">
          <h6>Services</h6>
          <RouterLink to="/software-solutions">AI Agent Development</RouterLink>
          <RouterLink to="/software-solutions">Website Development</RouterLink>
          <RouterLink to="/software-solutions">Web Applications</RouterLink>
          <RouterLink to="/software-solutions">EdTech Support</RouterLink>
          <RouterLink to="/programs-events">Programs &amp; Events</RouterLink>
        </div>

        <!-- Contact -->
        <div class="col-lg-3">
          <h6>Contact</h6>
          <a :href="`mailto:${profile.email}`" class="d-flex align-items-center gap-2">
            <i class="bi bi-envelope"></i>{{ profile.email }}
          </a>
          <div class="mt-3">
            <RouterLink to="/contact" class="btn btn-sm btn-primary-custom">Get in Touch</RouterLink>
          </div>
        </div>
      </div>

      <hr class="footer-divider" />
      <div class="d-flex flex-wrap justify-content-between align-items-center gap-2">
        <p class="footer-bottom mb-0">&copy; {{ currentYear }} Bright Osei Amankwatia. All rights reserved.</p>
        <p class="footer-bottom mb-0">ICT Educator · Computer Science Researcher · AI &amp; Web Developer</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { computed } from 'vue'
import { profile } from '../data/profile.js'

const currentYear = computed(() => new Date().getFullYear())
</script>
