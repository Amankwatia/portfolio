<template>
  <div class="card-custom p-4">
    <div class="card-icon" :class="iconClass">
      <i :class="`bi ${icon}`"></i>
    </div>
    <h5 class="fw-bold mb-2" style="font-size:1rem;">{{ title }}</h5>
    <p class="text-muted mb-0" style="font-size:0.9rem;">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  iconClass: { type: String, default: '' },
})
</script>
