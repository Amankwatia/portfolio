<template>
  <!-- inheritAttrs:false lets us place the id on the <h2>, not the wrapper div,
       so aria-labelledby correctly points to the heading element. -->
  <div class="mb-4">
    <h2 class="section-title" v-bind="$attrs">{{ title }}</h2>
    <div class="section-title-accent"></div>
    <p v-if="subtitle" class="section-subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineOptions({ inheritAttrs: false })
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})
</script>

