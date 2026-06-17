<template>
  <main>
    <header class="page-header" aria-label="Research page header">
      <div class="container">
        <h1>Research &amp; Publications</h1>
        <div class="page-header-accent"></div>
        <p class="lead mt-2">Peer-reviewed research in educational technology, cybersecurity, AI, and digital skills.</p>
      </div>
    </header>

    <!-- Research Interests -->
    <section class="section-padding" aria-labelledby="research-interests-title">
      <div class="container">
        <SectionTitle id="research-interests-title" title="Research Interests" subtitle="Areas of active inquiry and growing scholarly engagement." />
        <div class="row g-4">
          <div class="col-sm-6 col-lg-3" v-for="interest in researchInterests" :key="interest.title">
            <div class="card-custom p-4 text-center">
              <div class="card-icon card-icon-gold mx-auto mb-3">
                <i :class="`bi ${interest.icon}`"></i>
              </div>
              <h6 class="fw-bold mb-0" style="font-size:0.9rem;">{{ interest.title }}</h6>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Academic Direction -->
    <section class="section-padding section-alt" aria-labelledby="direction-title">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <i class="bi bi-mortarboard text-gold" style="font-size:2.5rem;"></i>
            <h2 class="section-title mt-2" id="direction-title">Current Academic Direction</h2>
            <div class="section-title-accent mx-auto"></div>
            <p class="text-muted mt-3" style="font-size:1.05rem; line-height:1.8;">
              Currently pursuing an MPhil in Computer Science with growing research interests in artificial intelligence, cybersecurity, educational technology, and practical digital systems.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Publications -->
    <section class="section-padding" aria-labelledby="publications-title">
      <div class="container">
        <SectionTitle id="publications-title" title="Peer-Reviewed Publications" :subtitle="`${publications.length} publications in the International Journal of Computer Applications`" />
        <div>
          <PublicationCard v-for="pub in publications" :key="pub.id" :pub="pub" />
        </div>
        <div class="mt-4 d-flex flex-wrap gap-3">
          <a :href="profile.social.googleScholar" target="_blank" rel="noopener noreferrer" class="btn btn-primary-custom">
            <i class="bi bi-mortarboard me-1"></i>Google Scholar Profile
          </a>
          <a :href="profile.social.orcid" target="_blank" rel="noopener noreferrer" class="btn btn-outline-custom">
            <i class="bi bi-person-badge me-1"></i>ORCID Profile
          </a>
        </div>
      </div>
    </section>

    <CTASection
      title="Interested in Research Collaboration?"
      subtitle="I am open to research partnerships in educational technology, cybersecurity, AI in education, and digital skills."
      button-label="Start a Conversation"
      button-to="/contact"
      button-icon="bi-chat-dots"
    />
  </main>
</template>

<script setup>
import SectionTitle from '../components/SectionTitle.vue'
import PublicationCard from '../components/PublicationCard.vue'
import CTASection from '../components/CTASection.vue'
import { publications } from '../data/publications.js'
import { profile } from '../data/profile.js'

const researchInterests = [
  { icon: 'bi-laptop', title: 'Educational Technology' },
  { icon: 'bi-shield-lock', title: 'Cybersecurity' },
  { icon: 'bi-robot', title: 'Artificial Intelligence in Education' },
  { icon: 'bi-hdd-stack', title: 'Learning Management Systems' },
  { icon: 'bi-people', title: 'Digital Skills & Youth Empowerment' },
  { icon: 'bi-building', title: 'Digital Transformation in Schools' },
  { icon: 'bi-cpu', title: 'AI and Multimodal Systems' },
]
</script>
