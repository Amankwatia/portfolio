<template>
  <div class="card-custom p-4 d-flex flex-column">
    <div class="d-flex justify-content-between align-items-start mb-2">
      <span class="badge project-status-badge" :class="project.statusClass">{{ project.status }}</span>
      <span class="text-muted" style="font-size:0.78rem;">{{ project.type }}</span>
    </div>
    <h5 class="fw-bold mb-2" style="font-size:0.98rem;">{{ project.title }}</h5>
    <p class="text-muted mb-3" style="font-size:0.88rem; flex:1;">{{ project.description }}</p>

    <div class="mb-3">
      <span v-for="tech in project.technologies" :key="tech" class="project-tech-tag">{{ tech }}</span>
    </div>

    <p class="mb-3" style="font-size:0.82rem; color:#495057;">
      <i class="bi bi-arrow-right-circle text-gold me-1"></i>{{ project.impact }}
    </p>

    <div class="mt-auto">
      <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary-custom">
        <i class="bi bi-box-arrow-up-right me-1"></i>View Project
      </a>
      <span v-else class="btn btn-sm btn-outline-secondary disabled" aria-disabled="true">Coming Soon</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: { type: Object, required: true },
})
</script>
