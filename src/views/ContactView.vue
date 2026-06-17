<template>
  <main>
    <header class="page-header" aria-label="Contact page header">
      <div class="container">
        <h1>Contact</h1>
        <div class="page-header-accent"></div>
        <p class="lead mt-2">Get in touch for education, research, software, or program enquiries.</p>
      </div>
    </header>

    <section class="section-padding" aria-labelledby="contact-section-title">
      <div class="container">
        <div class="row g-5">
          <!-- Contact Info -->
          <div class="col-lg-4">
            <SectionTitle id="contact-section-title" title="Get in Touch" />
            <p class="text-muted mb-4">
              I welcome enquiries related to ICT education, research collaboration, software development, and program facilitation.
            </p>

            <div class="d-flex flex-column gap-3 mb-4">
              <a :href="`mailto:${profile.email}`" class="d-flex align-items-center gap-3 p-3 card-custom text-decoration-none">
                <div class="card-icon card-icon-gold flex-shrink-0" style="width:40px;height:40px;font-size:1.1rem;">
                  <i class="bi bi-envelope"></i>
                </div>
                <div>
                  <div style="font-size:0.75rem; font-weight:600; text-transform:uppercase; color:var(--color-text-muted); letter-spacing:0.5px;">Email</div>
                  <div style="font-size:0.88rem; color:var(--color-navy)">{{ profile.email }}</div>
                </div>
              </a>
            </div>

            <!-- Social / Profile Links -->
            <h6 class="fw-bold mb-3" style="font-size:0.8rem; text-transform:uppercase; letter-spacing:1px; color:var(--color-text-muted)">Profiles</h6>
            <div class="d-flex flex-column gap-2">
              <a :href="profile.social.linkedin" target="_blank" rel="noopener noreferrer" class="d-flex align-items-center gap-2 p-2 rounded" style="color:var(--color-navy); border:1px solid var(--color-border); font-size:0.88rem;">
                <i class="bi bi-linkedin text-gold"></i> LinkedIn
              </a>
              <a :href="profile.social.github" target="_blank" rel="noopener noreferrer" class="d-flex align-items-center gap-2 p-2 rounded" style="color:var(--color-navy); border:1px solid var(--color-border); font-size:0.88rem;">
                <i class="bi bi-github text-gold"></i> GitHub
              </a>
              <a :href="profile.social.googleScholar" target="_blank" rel="noopener noreferrer" class="d-flex align-items-center gap-2 p-2 rounded" style="color:var(--color-navy); border:1px solid var(--color-border); font-size:0.88rem;">
                <i class="bi bi-mortarboard text-gold"></i> Google Scholar
              </a>
              <a :href="profile.social.orcid" target="_blank" rel="noopener noreferrer" class="d-flex align-items-center gap-2 p-2 rounded" style="color:var(--color-navy); border:1px solid var(--color-border); font-size:0.88rem;">
                <i class="bi bi-person-badge text-gold"></i> ORCID
              </a>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="col-lg-8">
            <div class="card-custom p-4 p-md-5">
              <h3 class="fw-bold mb-1" style="font-size:1.2rem;">Send a Message</h3>
              <p class="text-muted mb-4" style="font-size:0.88rem;">
                Fill in the form below. This form opens your email client with your message pre-filled.
                <!-- To use Formspree: replace action="#" with action="https://formspree.io/f/YOUR_FORM_ID"
                     and set method="POST". Remove the @submit.prevent handler. -->
              </p>

              <form @submit.prevent="handleSubmit" novalidate aria-label="Contact form">
                <div class="row g-3">
                  <div class="col-md-6">
                    <label for="contact-name" class="form-label fw-semibold" style="font-size:0.88rem;">Full Name <span aria-hidden="true" style="color:red">*</span></label>
                    <input
                      id="contact-name"
                      v-model="form.name"
                      type="text"
                      class="form-control form-control-custom"
                      placeholder="Your full name"
                      required
                      autocomplete="name"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="contact-email" class="form-label fw-semibold" style="font-size:0.88rem;">Email Address <span aria-hidden="true" style="color:red">*</span></label>
                    <input
                      id="contact-email"
                      v-model="form.email"
                      type="email"
                      class="form-control form-control-custom"
                      placeholder="your@email.com"
                      required
                      autocomplete="email"
                    />
                  </div>
                  <div class="col-12">
                    <label for="contact-type" class="form-label fw-semibold" style="font-size:0.88rem;">Enquiry Type <span aria-hidden="true" style="color:red">*</span></label>
                    <select id="contact-type" v-model="form.type" class="form-select contact-select" required>
                      <option value="" disabled>Select enquiry type</option>
                      <option v-for="opt in enquiryTypes" :key="opt" :value="opt">{{ opt }}</option>
                    </select>
                  </div>
                  <div class="col-12">
                    <label for="contact-message" class="form-label fw-semibold" style="font-size:0.88rem;">Message <span aria-hidden="true" style="color:red">*</span></label>
                    <textarea
                      id="contact-message"
                      v-model="form.message"
                      class="form-control form-control-custom"
                      rows="5"
                      placeholder="Your message..."
                      required
                    ></textarea>
                  </div>
                  <div class="col-12">
                    <button type="submit" class="btn btn-primary-custom w-100">
                      <i class="bi bi-send me-2"></i>Send Message
                    </button>
                  </div>
                </div>

                <p v-if="submitted" class="mt-3 text-success" role="alert">
                  <i class="bi bi-check-circle me-1"></i>Your email client should have opened. Thank you for reaching out!
                </p>
                <p v-if="validationError" class="mt-3 text-danger" role="alert">
                  <i class="bi bi-exclamation-circle me-1"></i>{{ validationError }}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { reactive, ref } from 'vue'
import SectionTitle from '../components/SectionTitle.vue'
import { profile } from '../data/profile.js'

const form = reactive({ name: '', email: '', type: '', message: '' })
const submitted = ref(false)
const validationError = ref('')

const enquiryTypes = [
  'Website development',
  'Web application',
  'AI agent',
  'School digital system',
  'ICT training',
  'Program / Event invitation',
  'ICT workshop',
  'Cybersecurity awareness session',
  'AI in education training',
  'Research collaboration',
  'Other',
]

function handleSubmit() {
  validationError.value = ''
  submitted.value = false

  if (!form.name.trim() || !form.email.trim() || !form.type || !form.message.trim()) {
    validationError.value = 'Please fill in all required fields before sending.'
    return
  }

  // Basic email format check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(form.email)) {
    validationError.value = 'Please enter a valid email address.'
    return
  }

  // Mailto fallback – opens user's email client
  const subject = encodeURIComponent(`[${form.type}] Enquiry from ${form.name}`)
  const body = encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\nEnquiry Type: ${form.type}\n\nMessage:\n${form.message}`
  )
  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  submitted.value = true
}
</script>
