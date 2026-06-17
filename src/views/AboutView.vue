<template>
  <main>
    <!-- Page Header -->
    <header class="page-header" aria-label="About page header">
      <div class="container">
        <h1>About</h1>
        <div class="page-header-accent"></div>
        <p class="lead mt-2">Educator · Researcher · Developer · Program Facilitator</p>
      </div>
    </header>

    <!-- Profile Overview -->
    <section class="section-padding" aria-labelledby="overview-title">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-4 profile-photo-wrap">
            <img
              src="../assets/images/profile-placeholder.svg"
              alt="Professional portrait of Bright Osei Amankwatia"
              class="profile-photo"
            />
          </div>
          <div class="col-lg-8">
            <SectionTitle id="overview-title" title="Professional Overview" />
            <p class="text-muted mb-3">{{ profile.longSummary }}</p>
            <p class="text-muted mb-4"><em style="color:var(--color-navy); font-style:normal; font-weight:500;">"{{ profile.philosophy }}"</em></p>
            <div class="d-flex flex-wrap gap-2">
              <a :href="`mailto:${profile.email}`" class="btn btn-primary-custom">
                <i class="bi bi-envelope me-1"></i>{{ profile.email }}
              </a>
              <a :href="profile.social.linkedin" target="_blank" rel="noopener noreferrer" class="btn btn-outline-custom">
                <i class="bi bi-linkedin me-1"></i>LinkedIn
              </a>
              <a :href="profile.social.googleScholar" target="_blank" rel="noopener noreferrer" class="btn btn-outline-custom">
                <i class="bi bi-mortarboard me-1"></i>Google Scholar
              </a>
              <a :href="profile.social.orcid" target="_blank" rel="noopener noreferrer" class="btn btn-outline-custom">
                <i class="bi bi-person-badge me-1"></i>ORCID
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What I Do -->
    <section class="section-padding section-alt" aria-labelledby="what-i-do-title">
      <div class="container">
        <SectionTitle id="what-i-do-title" title="What I Do" />
        <div class="row g-4">
          <div class="col-md-6 col-lg-4" v-for="item in whatIDo" :key="item.title">
            <ServiceCard :icon="item.icon" :title="item.title" :description="item.description" icon-class="card-icon-gold" />
          </div>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section class="section-padding" aria-labelledby="education-title">
      <div class="container">
        <SectionTitle id="education-title" title="Education" />
        <div class="row g-4">
          <div class="col-md-6 col-lg-4" v-for="edu in profile.education" :key="edu.degree">
            <div class="card-custom p-4">
              <div class="card-icon mb-3">
                <i class="bi bi-mortarboard"></i>
              </div>
              <h6 class="fw-bold mb-1" style="color:var(--color-navy)">{{ edu.degree }}</h6>
              <p class="text-muted mb-1" style="font-size:0.88rem;">{{ edu.institution }}</p>
              <p class="text-gold mb-0" style="font-size:0.82rem; font-weight:600;">{{ edu.period }}</p>
              <p v-if="edu.note" class="mt-1 mb-0">
                <span class="badge bg-success text-white" style="font-size:0.72rem;">{{ edu.note }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Professional Development -->
    <section class="section-padding section-alt" aria-labelledby="prof-dev-title">
      <div class="container">
        <SectionTitle id="prof-dev-title" title="Professional Development" subtitle="Selected certifications and professional training." />
        <div class="row g-4">
          <div class="col-md-4" v-for="cert in profile.professionalDevelopment" :key="cert.title">
            <div class="card-custom p-4 d-flex align-items-start gap-3">
              <div class="card-icon card-icon-gold flex-shrink-0">
                <i class="bi bi-patch-check"></i>
              </div>
              <div>
                <h6 class="fw-bold mb-1" style="font-size:0.95rem;">{{ cert.title }}</h6>
                <p class="text-muted mb-0" style="font-size:0.85rem;">{{ cert.issuer }} · {{ cert.year }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section class="section-padding" aria-labelledby="skills-title">
      <div class="container">
        <SectionTitle id="skills-title" title="Skills & Competencies" subtitle="Grouped across education, research, technology, and digital solutions." />
        <div class="row g-4">
          <div class="col-md-6 col-lg-4" v-for="group in skillGroups" :key="group.group">
            <div class="card-custom p-4">
              <div class="d-flex align-items-center gap-2 mb-3">
                <div class="card-icon card-icon-gold" style="width:36px;height:36px;font-size:1rem;">
                  <i :class="`bi ${group.icon}`"></i>
                </div>
                <h6 class="fw-bold mb-0" style="font-size:0.9rem; color:var(--color-navy)">{{ group.group }}</h6>
              </div>
              <div>
                <SkillBadge v-for="skill in group.skills" :key="skill" :label="skill" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Philosophy -->
    <section class="section-padding section-alt" aria-labelledby="philosophy-title">
      <div class="container text-center">
        <div style="max-width:680px; margin-inline:auto;">
          <i class="bi bi-quote text-gold" style="font-size:3rem;"></i>
          <blockquote class="mb-4" style="font-size:1.15rem; font-style:italic; color:var(--color-navy); font-family:var(--font-heading); line-height:1.8;">
            "{{ profile.philosophy }}"
          </blockquote>
          <p class="text-muted" style="font-size:0.9rem;">— Bright Osei Amankwatia, Working Philosophy</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CTASection
      title="Interested in Working Together?"
      subtitle="Get in touch for ICT education, research collaboration, software solutions, or program facilitation."
      button-label="Contact Me"
      button-to="/contact"
      button-icon="bi-envelope"
    />
  </main>
</template>

<script setup>
import SectionTitle from '../components/SectionTitle.vue'
import ServiceCard from '../components/ServiceCard.vue'
import SkillBadge from '../components/SkillBadge.vue'
import CTASection from '../components/CTASection.vue'
import { profile } from '../data/profile.js'
import { skillGroups } from '../data/skills.js'

const whatIDo = [
  { icon: 'bi-mortarboard', title: 'Teach ICT and Computing', description: 'Classroom instruction in ICT, computing, programming basics, and digital citizenship at senior high school level.' },
  { icon: 'bi-laptop', title: 'Support Educational Technology', description: 'Helping schools and educators adopt practical digital tools, LMS platforms, and technology-integrated teaching approaches.' },
  { icon: 'bi-journal-text', title: 'Conduct Research and Publish', description: 'Publishing peer-reviewed research in educational technology, cybersecurity, AI, and digital skills journals.' },
  { icon: 'bi-robot', title: 'Develop AI and Web Solutions', description: 'Building AI agents, professional websites, and database-backed web applications for organisations and schools.' },
  { icon: 'bi-calendar-event', title: 'Facilitate Digital Skills Programs', description: 'Organising and supporting ICT training, cybersecurity awareness sessions, and digital literacy programs.' },
]
</script>
