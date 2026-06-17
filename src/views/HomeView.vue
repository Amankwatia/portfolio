<template>
  <main>
    <!-- Hero -->
    <HeroSection />

    <!-- Focus Area Cards -->
    <section class="section-padding" aria-labelledby="focus-areas-title">
      <div class="container">
        <SectionTitle id="focus-areas-title" title="What I Do" subtitle="Three interconnected areas that define my professional work." />
        <div class="row g-4">
          <div class="col-md-4">
            <ServiceCard
              icon="bi-mortarboard"
              title="ICT & Computing Education"
              description="Teaching digital literacy, programming basics, computer applications, cybersecurity awareness, and responsible technology use."
              icon-class="card-icon-gold"
            />
          </div>
          <div class="col-md-4">
            <ServiceCard
              icon="bi-search"
              title="Research & Publications"
              description="Research interests in educational technology, cybersecurity, digital skills, AI, and learning management systems."
              icon-class="card-icon-gold"
            />
          </div>
          <div class="col-md-4">
            <ServiceCard
              icon="bi-robot"
              title="AI & Web Solutions"
              description="Developing AI agents, websites, web applications, school systems, and digital tools for organisations."
              icon-class="card-icon-gold"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- About Preview -->
    <section class="section-padding section-alt" aria-labelledby="about-preview-title">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <SectionTitle id="about-preview-title" title="About Bright" />
            <p class="text-muted mb-4">{{ profile.longSummary }}</p>
            <RouterLink to="/about" class="btn btn-primary-custom">
              <i class="bi bi-person-circle me-1"></i>Read Full Profile
            </RouterLink>
          </div>
          <div class="col-lg-6">
            <div class="row g-3">
              <div class="col-6" v-for="item in achievements" :key="item.label">
                <div class="card-custom p-3 text-center">
                  <i :class="`bi ${item.icon} text-gold`" style="font-size:1.6rem;"></i>
                  <span class="achievement-number mt-2">{{ item.value }}</span>
                  <span class="achievement-label">{{ item.label }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Services -->
    <section class="section-padding" aria-labelledby="services-preview-title">
      <div class="container">
        <SectionTitle id="services-preview-title" title="Software Solutions" subtitle="Emerging AI and web solutions for schools, professionals, and organisations." />
        <div class="row g-4">
          <div class="col-sm-6 col-lg-3" v-for="s in featuredServices" :key="s.title">
            <div class="card-custom p-4 text-center">
              <div class="card-icon card-icon-gold mx-auto mb-3">
                <i :class="`bi ${s.icon}`"></i>
              </div>
              <h6 class="fw-bold mb-0">{{ s.title }}</h6>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <RouterLink to="/software-solutions" class="btn btn-outline-custom">
            <i class="bi bi-arrow-right me-1"></i>Explore Solutions
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="section-padding section-alt" aria-labelledby="projects-preview-title">
      <div class="container">
        <SectionTitle id="projects-preview-title" title="Featured Projects" subtitle="A selection of academic and development projects." />
        <div class="row g-4">
          <div class="col-md-6 col-lg-4" v-for="project in featuredProjects" :key="project.id">
            <ProjectCard :project="project" />
          </div>
        </div>
        <div class="text-center mt-4">
          <RouterLink to="/projects" class="btn btn-outline-custom">
            <i class="bi bi-folder2-open me-1"></i>View All Projects
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Programs Preview -->
    <section class="section-padding" aria-labelledby="programs-preview-title">
      <div class="container">
        <div class="row align-items-center g-4">
          <div class="col-lg-8">
            <SectionTitle id="programs-preview-title" title="Programs & Events" />
            <p class="text-muted mb-4">
              I support and facilitate programs in ICT education, digital literacy, cybersecurity awareness, AI in education, and educational technology — for schools, organisations, and community institutions.
            </p>
            <RouterLink to="/programs-events" class="btn btn-primary-custom">
              <i class="bi bi-calendar-event me-1"></i>Explore Programs &amp; Events
            </RouterLink>
          </div>
          <div class="col-lg-4">
            <div class="row g-2">
              <div class="col-6" v-for="prog in programHighlights" :key="prog">
                <div class="p-3 rounded text-center" style="background:var(--color-bg-light); border:1px solid var(--color-border);">
                  <span style="font-size:0.82rem; font-weight:500; color:var(--color-navy)">{{ prog }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CTASection
      title="Ready to Collaborate?"
      subtitle="Ready to collaborate on ICT education, research, AI agents, websites, web applications, or digital skills programs?"
      button-label="Start a Conversation"
      button-to="/contact"
      button-icon="bi-chat-dots"
    />
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import HeroSection from '../components/HeroSection.vue'
import SectionTitle from '../components/SectionTitle.vue'
import ServiceCard from '../components/ServiceCard.vue'
import ProjectCard from '../components/ProjectCard.vue'
import CTASection from '../components/CTASection.vue'
import { profile } from '../data/profile.js'
import { projects } from '../data/projects.js'

const achievements = [
  { icon: 'bi-mortarboard', value: 'MPhil', label: 'Computer Science Student' },
  { icon: 'bi-award', value: '1st Class', label: 'Honours Graduate' },
  { icon: 'bi-journal-text', value: '6+', label: 'Peer-reviewed Publications' },
  { icon: 'bi-robot', value: 'Solo', label: 'AI & Web Studio Founder' },
]

const featuredServices = [
  { icon: 'bi-robot', title: 'AI Agents' },
  { icon: 'bi-globe2', title: 'Websites' },
  { icon: 'bi-window-stack', title: 'Web Applications' },
  { icon: 'bi-laptop', title: 'School Digital Systems' },
]

const featuredProjects = projects.slice(0, 3)

const programHighlights = [
  'ICT Education',
  'Digital Literacy',
  'Cybersecurity',
  'AI in Education',
]
</script>
