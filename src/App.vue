<script setup lang="ts">
import { isDark, preferredDark } from '~/core/hooks/dark'

/**
 * https://github.com/vueuse/head
 * Allows you to manipulate the document head in any components they will be
 * rendered correctly in the html results with vite-ssg
 */
useHead({
  title: 'Vitesse Enterprise Starter',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
    {
      name: 'theme-color',
      content: computed(() => (isDark.value ? '#00aba9' : '#ffffff')),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() =>
        preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'
      ),
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
