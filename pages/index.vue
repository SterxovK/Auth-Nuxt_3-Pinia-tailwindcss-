<template>
  <div class="min-h-screen p-14 m-auto text-center flex flex-col justify-between">
    <h1 class="text-7xl text-[#71717A]" >Welcome <span class="text-[#8098F9] font-bold">{{ store.username }}</span></h1>
    <NuxtLink to="/signup" class="
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
      focus:outline-none">Create an account</NuxtLink>
  </div>



</template>
<script setup>
import {useAuthStore} from "~/stores/auth";
//import {onBeforeMount} from "vue";


const store = useAuthStore()

definePageMeta({
  middleware: ["authenticated"]
})

// let username = ref()
//
// onBeforeMount(() => {
//   username.value = computed(() => store.$state.username)
// })


</script>