<template>
  <main>
    <header class="page-header" aria-label="Programs and Events page header">
      <div class="container">
        <h1>Programs &amp; Events</h1>
        <div class="page-header-accent"></div>
        <p class="lead mt-2">ICT education, digital literacy, cybersecurity, AI, and educational technology programs.</p>
      </div>
    </header>

    <!-- Intro -->
    <section class="section-padding" aria-labelledby="programs-intro-title">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <SectionTitle id="programs-intro-title" title="Program Facilitation" />
            <p class="text-muted" style="font-size:1.05rem; line-height:1.8;">
              I support and participate in programs that promote ICT education, digital literacy, responsible technology use, cybersecurity awareness, educational innovation, and practical digital skills for learners, educators, schools, and community institutions.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Program Areas -->
    <section class="section-padding section-alt" aria-labelledby="program-areas-title">
      <div class="container">
        <SectionTitle id="program-areas-title" title="Featured Program Areas" subtitle="Areas in which I facilitate and support programs." />
        <div class="row g-4">
          <div class="col-md-6 col-lg-4" v-for="area in programAreas" :key="area.id">
            <ServiceCard :icon="area.icon" :title="area.title" :description="area.description" icon-class="card-icon-gold" />
          </div>
        </div>
      </div>
    </section>

    <!-- Current Engagements -->
    <section class="section-padding" aria-labelledby="engagements-title">
      <div class="container">
        <SectionTitle id="engagements-title" title="Past & Current Engagements" subtitle="Programs and activities I have been involved in." />
        <div class="row g-4">
          <div class="col-md-6" v-for="event in currentEngagements" :key="event.id">
            <EventCard :event="event" />
          </div>
        </div>
      </div>
    </section>

    <!-- Future Programs -->
    <section class="section-padding section-alt" aria-labelledby="future-programs-title">
      <div class="container">
        <SectionTitle id="future-programs-title" title="Planned Future Programs" subtitle="Programs being developed and planned for delivery." />
        <div class="row g-4">
          <div class="col-md-6 col-lg-4" v-for="prog in futurePrograms" :key="prog.id">
            <div class="card-custom p-4">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <div class="card-icon card-icon-gold">
                  <i :class="`bi ${prog.icon}`"></i>
                </div>
                <span class="event-status event-status-planned">Planned</span>
              </div>
              <h5 class="fw-bold mb-2" style="font-size:0.95rem;">{{ prog.title }}</h5>
              <p class="text-muted mb-0" style="font-size:0.88rem;">{{ prog.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CTASection
      title="Invite Me for a Program or Event"
      subtitle="Interested in organising an ICT, AI, cybersecurity, or digital literacy program for your school, organisation, or community?"
      button-label="Send an Invitation"
      button-to="/contact"
      button-icon="bi-calendar-plus"
    />
  </main>
</template>

<script setup>
import SectionTitle from '../components/SectionTitle.vue'
import ServiceCard from '../components/ServiceCard.vue'
import EventCard from '../components/EventCard.vue'
import CTASection from '../components/CTASection.vue'
import { programAreas, currentEngagements, futurePrograms } from '../data/programsEvents.js'
</script>
