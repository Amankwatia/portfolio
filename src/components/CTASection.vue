<template>
  <section class="cta-section" aria-label="Call to action">
    <div class="container text-center">
      <h2 class="mb-3">{{ title }}</h2>
      <p class="mb-4" style="color:rgba(255,255,255,0.75); max-width:600px; margin-inline:auto;">{{ subtitle }}</p>
      <RouterLink :to="buttonTo" class="btn btn-primary-custom btn-lg">
        <i :class="`bi ${buttonIcon} me-2`"></i>{{ buttonLabel }}
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  buttonLabel: { type: String, required: true },
  buttonTo: { type: String, default: '/contact' },
  buttonIcon: { type: String, default: 'bi-envelope' },
})
</script>
