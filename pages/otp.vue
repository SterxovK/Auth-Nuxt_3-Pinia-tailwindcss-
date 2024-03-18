<template>
  <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
    <div
        class="max-w-[1440px] m-0 sm:m-10 bg-[#F5F8FF] shadow rounded-[50px] overflow-hidden flex justify-center flex-1">
      <div class="lg:w-1/2 px-28 m-auto">
        <div class="flex flex-col">
          <h1 class="text-[40px]/[24px] font-bold font-montserrat text-nowrap">
            Enter OTP
          </h1>
          <p class="mt-3 text-[#71717A]  text-[20px]/[24px] font-normal">
            Sent OTP on
            <span class="text-[#8098F9] font-semibold">{{ email }}</span>
          </p>
          <NuxtLink to="/signUp" class="text-[#8098F9] text-[16px]/[24px] font-bold mt-2">Change email</NuxtLink>
          <div class="w-full flex-1 mt-6">
            <div class="mx-auto">
              <form @submit.prevent="sub()">
                <div class="flex justify-between gap-2 mb-6">
                  <input
                      v-for="i in 6"
                      v-model="inputs[i-1]"
                      :key="i"
                      :class="styleOtpInput"
                      type="text"
                      maxlength="1"
                      pattern="[0-9]"
                      inputmode="numeric"
                      autocomplete="one-time-code"
                      required placeholder="-"
                  >
                </div>
                <div class="px-3">
                  <SubmitBtn :text="'SUBMIT'"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 text-center hidden lg:flex">
        <div class="w-full bg-cover bg-center bg-no-repeat bg-[url('/assets/images/right-side-otp.svg')]">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SubmitBtn from "~/components/SubmitBtn.vue";
import {useAuthStore} from "~/stores/auth";

const store = useAuthStore()
const router = useRouter()
const {otpSubmit} = useAuthStore();

let email = computed(() => store.$state.email)
let inputs = ref([])
let errors = ref(null)

const sub = async () => {
//todo type data?
  let data = Object.values(inputs.value).join('')
  try {
    await otpSubmit(data);
//todo
    router.push('/');
  } catch (error) {
    console.log(error)
    errors.value = error.response.data.errors
  }
}

let styleOtpInput = [
  'w-16',
  'h-16',
  'text-center',
  'border',
  'rounded-[10px]',
  'hadow-sm',
  'focus:border-[#8098F9]',
  'focus:ring-[#8098F9]',
  'bg-[#8098F9]/10',
  'border-[#8098F9]/50',
  'placeholder:text-[#2D31A6]/20',
  'placeholder:text-[20px]',
  'placeholder:font-bold'
]
</script>