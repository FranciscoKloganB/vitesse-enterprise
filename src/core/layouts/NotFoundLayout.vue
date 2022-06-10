<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <main px-4 py-10 text-center text-teal-700 dark:text-gray-200>
    <div text-4xl>
      <div i-carbon-warning inline-block />
    </div>
    <RouterView />
    <div>
      <button btn m="3 t8" text-sm @click="router.back()">
        {{ t('button.back') }}
      </button>
    </div>
  </main>
</template>
