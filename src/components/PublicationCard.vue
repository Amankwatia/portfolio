<template>
  <div class="publication-card">
    <p class="publication-journal mb-1">
      <i class="bi bi-journal-text me-1"></i>{{ pub.journal }}, {{ pub.volume }}, pp. {{ pub.pages }}
    </p>
    <p class="mb-1" style="font-size:0.88rem; color:#495057;">{{ pub.authors }} ({{ pub.year }})</p>
    <p class="fw-semibold mb-2" style="font-size:0.95rem; color:var(--color-navy)">{{ pub.title }}</p>
    <a :href="pub.doi" target="_blank" rel="noopener noreferrer" class="d-inline-flex align-items-center gap-1 text-gold" style="font-size:0.82rem; font-weight:600;">
      <i class="bi bi-link-45deg"></i>{{ pub.doi }}
    </a>
  </div>
</template>

<script setup>
defineProps({
  pub: { type: Object, required: true },
})
</script>
