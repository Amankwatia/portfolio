<template>
  <main>
    <header class="page-header" aria-label="Projects page header">
      <div class="container">
        <h1>Projects &amp; Portfolio</h1>
        <div class="page-header-accent"></div>
        <p class="lead mt-2">Academic projects, web applications, and digital solutions in development.</p>
      </div>
    </header>

    <section class="section-padding" aria-labelledby="projects-title">
      <div class="container">
        <SectionTitle id="projects-title" title="Project Portfolio" subtitle="A mix of academic, concept, and in-development software projects." />
        <div class="row g-4">
          <div class="col-md-6 col-lg-4" v-for="project in projects" :key="project.id">
            <ProjectCard :project="project" />
          </div>
        </div>
      </div>
    </section>

    <!-- More coming note -->
    <section class="section-padding section-alt" aria-label="More projects">
      <div class="container text-center">
        <i class="bi bi-tools text-gold" style="font-size:2.5rem;"></i>
        <h3 class="mt-3 mb-2">More Projects in Development</h3>
        <p class="text-muted mb-4" style="max-width:560px; margin-inline:auto;">
          Additional AI agents, web applications, and school digital systems are actively being explored and built. Check back regularly for updates.
        </p>
        <RouterLink to="/software-solutions" class="btn btn-primary-custom">
          <i class="bi bi-robot me-1"></i>Explore Software Solutions
        </RouterLink>
      </div>
    </section>

    <CTASection
      title="Have a Project in Mind?"
      subtitle="I am available for website development, web applications, AI agents, and school digital systems."
      button-label="Request a Consultation"
      button-to="/contact"
      button-icon="bi-calendar-check"
    />
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import SectionTitle from '../components/SectionTitle.vue'
import ProjectCard from '../components/ProjectCard.vue'
import CTASection from '../components/CTASection.vue'
import { projects } from '../data/projects.js'
</script>
