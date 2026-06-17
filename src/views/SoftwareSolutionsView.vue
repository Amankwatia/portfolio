<template>
  <main>
    <header class="page-header" aria-label="Software Solutions page header">
      <div class="container">
        <h1>AI &amp; Web Solutions Studio</h1>
        <div class="page-header-accent"></div>
        <p class="lead mt-2">Practical AI agents, websites, and web applications for schools, businesses, and organisations.</p>
      </div>
    </header>

    <!-- Intro -->
    <section class="section-padding" aria-labelledby="studio-intro-title">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-7">
            <SectionTitle id="studio-intro-title" title="About the Studio" />
            <p class="text-muted mb-3">
              I am building a small, emerging software solutions studio focused on practical AI agents, professional websites, and web applications for schools, small businesses, professionals, churches, organisations, and community institutions.
            </p>
            <p class="text-muted mb-4">
              This is an honest solo studio — not a large company. The focus is on delivering simple, effective, and affordable digital solutions that solve real problems. Mobile app development for Android and iOS is part of the future growth plan.
            </p>
            <RouterLink to="/contact" class="btn btn-primary-custom">
              <i class="bi bi-calendar-check me-1"></i>Request a Consultation
            </RouterLink>
          </div>
          <div class="col-lg-5">
            <div class="row g-3">
              <div class="col-6" v-for="val in studioValues" :key="val.label">
                <div class="card-custom p-3 text-center">
                  <i :class="`bi ${val.icon} text-gold`" style="font-size:1.5rem;"></i>
                  <p class="mb-0 mt-2 fw-semibold" style="font-size:0.82rem; color:var(--color-navy)">{{ val.label }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="section-padding section-alt" aria-labelledby="services-title">
      <div class="container">
        <SectionTitle id="services-title" title="Services Offered" subtitle="Practical solutions tailored to your specific needs." />
        <div class="row g-4">
          <div class="col-lg-6" v-for="service in services" :key="service.id">
            <div class="card-custom p-4 d-flex flex-column h-100">
              <div class="d-flex align-items-start gap-3 mb-3">
                <div class="card-icon card-icon-gold flex-shrink-0">
                  <i :class="`bi ${service.icon}`"></i>
                </div>
                <div>
                  <h5 class="fw-bold mb-1" style="font-size:1rem;">
                    {{ service.title }}
                    <span v-if="service.future" class="badge bg-secondary ms-2" style="font-size:0.68rem;">Future</span>
                  </h5>
                  <p class="text-muted mb-0" style="font-size:0.88rem;">{{ service.description }}</p>
                </div>
              </div>
              <ul class="mb-0 ps-3" style="font-size:0.85rem;">
                <li v-for="example in service.examples" :key="example" class="mb-1 text-muted">{{ example }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CTASection
      title="Need a Website, AI Agent, or Web App?"
      subtitle="Get in touch to discuss your project. I offer practical, affordable digital solutions for schools, businesses, and organisations."
      button-label="Request a Consultation"
      button-to="/contact"
      button-icon="bi-calendar-check"
    />
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import SectionTitle from '../components/SectionTitle.vue'
import CTASection from '../components/CTASection.vue'
import { services } from '../data/services.js'

const studioValues = [
  { icon: 'bi-check-circle', label: 'Practical Solutions' },
  { icon: 'bi-lock', label: 'Secure by Design' },
  { icon: 'bi-phone', label: 'Mobile-Friendly' },
  { icon: 'bi-people', label: 'Client-Focused' },
]
</script>
