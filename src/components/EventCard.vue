<template>
  <div class="card-custom p-4 d-flex flex-column">
    <div class="d-flex justify-content-between align-items-start mb-2">
      <span class="event-status" :class="event.statusClass">{{ event.status }}</span>
      <span class="text-muted" style="font-size:0.78rem;">{{ event.type }}</span>
    </div>
    <h5 class="fw-bold mb-2" style="font-size:0.95rem; color:var(--color-navy)">{{ event.title }}</h5>
    <p class="text-muted mb-3" style="font-size:0.88rem; flex:1;">{{ event.description }}</p>
    <div class="border-top pt-2 mt-auto" style="border-color:var(--color-border)!important">
      <div class="d-flex gap-3 flex-wrap">
        <span style="font-size:0.8rem;"><strong>Role:</strong> {{ event.role }}</span>
        <span style="font-size:0.8rem;"><strong>Audience:</strong> {{ event.audience }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  event: { type: Object, required: true },
})
</script>
