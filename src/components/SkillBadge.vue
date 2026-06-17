<template>
  <span class="skill-badge" :class="variant === 'gold' ? 'skill-badge-gold' : ''">{{ label }}</span>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  variant: { type: String, default: 'default' },
})
</script>
