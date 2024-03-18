<template>
  <button
      :disabled="disabled"
      class="
      mt-5
      tracking-wide
      font-semibold
      bg-[#8098F9]
      text-gray-100
      w-full py-5
      rounded-lg
      disabled:hover:bg-[#8098F9]/50
      hover:bg-indigo-700
      transition-all
      duration-300
      ease-in-out
      flex
      tems-center
      justify-center
      focus:shadow-outline
      focus:outline-none">
    <span class="ml-3 text-[20px]/[24px]">{{text}}</span>
  </button>
</template>
<script setup>
const props = defineProps(['text', 'disabled'])
const {text, disabled} = toRefs(props)
</script>