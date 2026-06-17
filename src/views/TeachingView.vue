<template>
  <main>
    <header class="page-header" aria-label="Teaching page header">
      <div class="container">
        <h1>Teaching &amp; Leadership</h1>
        <div class="page-header-accent"></div>
        <p class="lead mt-2">Shaping learners through ICT education, computing instruction, and school leadership.</p>
      </div>
    </header>

    <!-- Teaching Profile -->
    <section class="section-padding" aria-labelledby="teaching-profile-title">
      <div class="container">
        <div class="row g-5 align-items-center">
          <div class="col-lg-7">
            <SectionTitle id="teaching-profile-title" title="Teaching Profile" />
            <p class="text-muted mb-3">
              I have experience teaching ICT, Computing, and Mathematics across basic and senior high school levels in Ghana. My teaching encompasses a broad range of digital competencies, from foundational computer use to practical programming concepts and responsible technology adoption.
            </p>
            <p class="text-muted">
              Beyond instruction, I also serve in leadership roles — as a Form Master and through previous experience as an Assistant Headteacher — supporting student welfare, school administration, and digital integration in learning environments.
            </p>
          </div>
          <div class="col-lg-5">
            <div class="card-custom p-4">
              <h6 class="fw-bold mb-3 text-navy">Teaching Areas</h6>
              <div>
                <SkillBadge v-for="area in teachingAreas" :key="area" :label="area" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Current Work -->
    <section class="section-padding section-alt" aria-labelledby="current-work-title">
      <div class="container">
        <SectionTitle id="current-work-title" title="Current Roles" subtitle="Teaching and leadership at Presbyterian Senior High School, Berekum." />
        <div class="row g-4">
          <div class="col-md-6" v-for="role in currentRoles" :key="role.title">
            <div class="card-custom p-4 d-flex align-items-start gap-3">
              <div class="card-icon card-icon-gold flex-shrink-0">
                <i :class="`bi ${role.icon}`"></i>
              </div>
              <div>
                <h5 class="fw-bold mb-1" style="font-size:1rem;">{{ role.title }}</h5>
                <p class="text-muted mb-0" style="font-size:0.88rem;">{{ role.org }}</p>
                <p class="text-gold mb-0" style="font-size:0.82rem; font-weight:600;">{{ role.period }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section class="section-padding" aria-labelledby="timeline-title">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <SectionTitle id="timeline-title" title="Professional Experience Timeline" subtitle="A record of teaching, leadership, and professional service roles." />
            <div class="timeline" role="list">
              <div class="timeline-item" v-for="item in timeline" :key="item.id" role="listitem">
                <div class="timeline-dot" aria-hidden="true"></div>
                <div class="timeline-date">{{ item.period }}</div>
                <div class="timeline-title">{{ item.role }}</div>
                <div class="timeline-org">{{ item.org }}</div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 d-none d-lg-block">
            <div class="sticky-top" style="top:90px;">
              <div class="card-custom p-4">
                <h6 class="fw-bold mb-3 text-navy">Teaching Strengths</h6>
                <ul class="list-unstyled mb-0">
                  <li v-for="strength in teachingStrengths" :key="strength" class="d-flex align-items-start gap-2 mb-2">
                    <i class="bi bi-check-circle-fill text-gold mt-1 flex-shrink-0"></i>
                    <span style="font-size:0.87rem;">{{ strength }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Teaching Strengths (mobile) -->
    <section class="section-padding section-alt d-lg-none" aria-label="Teaching strengths">
      <div class="container">
        <SectionTitle title="Teaching Strengths" />
        <div class="row g-3">
          <div class="col-6" v-for="strength in teachingStrengths" :key="strength">
            <div class="card-custom p-3 d-flex align-items-start gap-2">
              <i class="bi bi-check-circle-fill text-gold mt-1 flex-shrink-0"></i>
              <span style="font-size:0.85rem;">{{ strength }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CTASection
      title="Interested in an ICT Training or Workshop?"
      subtitle="I am available to facilitate ICT, digital literacy, and educational technology sessions for schools and organisations."
      button-label="Get in Touch"
      button-to="/contact"
      button-icon="bi-envelope"
    />
  </main>
</template>

<script setup>
import SectionTitle from '../components/SectionTitle.vue'
import SkillBadge from '../components/SkillBadge.vue'
import CTASection from '../components/CTASection.vue'
import { timeline } from '../data/timeline.js'

const teachingAreas = [
  'ICT', 'Computing', 'Mathematics', 'Digital Literacy', 'Programming Basics',
  'MS Office', 'Internet Safety', 'Responsible Technology Use', 'Student Mentoring', 'Computer Laboratory Support',
]

const currentRoles = [
  { icon: 'bi-pc-display', title: 'ICT / Computing Teacher', org: 'Presbyterian Senior High School, Berekum', period: 'January 2023 – Present' },
  { icon: 'bi-person-badge', title: 'Form Master', org: 'Presbyterian Senior High School, Berekum', period: 'January 2023 – Present' },
]

const teachingStrengths = [
  'Curriculum-based ICT instruction',
  'Practical digital skills',
  'Programming education',
  'Student welfare and mentoring',
  'Computer laboratory management',
  'Cybersecurity and digital citizenship',
  'Technology integration in teaching',
  'School administration support',
]
</script>
