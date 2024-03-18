<template xmlns="http://www.w3.org/1999/html">
  <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
    <div
        class="max-w-[1440px] m-0 sm:m-10 bg-[#F5F8FF] shadow rounded-[50px] overflow-hidden flex justify-center flex-1">
      <div class="lg:w-1/2 px-32 m-auto">
        <div class="flex flex-col items-center">
          <h1 class="text-[40px]/[24px] font-bold font-montserrat text-nowrap">
            Create your account
          </h1>
          <div class="w-full flex-1 mt-8 text-[#71717A]">
            <p>Unlock all Features!</p>

            <div class="mx-auto">
              <form @submit.prevent="register()">
                <div class="relative flex items-center mt-6">
                  <TextInput placeholder="Username" v-model:input="user.username" inputType="text"
                             :error="errors && errors.name ? errors.name[0] : ''"/>
                </div>
                <div class="relative flex items-center mt-2.5">
                  <TextInput placeholder="Email" v-model:input="user.email" inputType="email"
                             :error="errors && errors.email ? errors.email[0] : ''"/>
                </div>
                <div class="relative flex items-center mt-2.5">
                  <TextInput placeholder="Password" v-model:input="user.password"
                             :error="errors && errors.password ? errors.password[0] : ''"/>
                </div>
                <div class="relative flex items-center mt-2.5">
                  <TextInput placeholder="Confirm Password" v-model:input="user.confirmPassword"
                             :error="!isConfirmed ? 'Должен совпадать с password' : ''"/>
                </div>
                <span class="relative flex items-center mt-6">
                  <input type="checkbox" v-model="user.termsAndConditions"
                         class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#8098F9]/50 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#8098F9] hover:before:opacity-10 checked:bg-[#8098F9]">
                  <p class="text-[#71717A] text-center text-[16px]/[24px] pl-1 font-[400]">
                    Accept
                    <NuxtLink to="#" class="text-[#8098F9] font-[500]"> terms and conditions</NuxtLink>
                  </p>
                </span>
                <SubmitBtn type='submit' :text="'SIGN UP'"
                           :disabled="(!user.username || !user.email || !user.password || !user.confirmPassword || !user.termsAndConditions)"/>
              </form>
              <p class="mt-6 text-[#71717A] text-center text-[16px]/[24px] ">
                You have account?
                <button class="text-[#8098F9] font-bold" @click="loginNow"> Login now</button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 text-center hidden lg:flex">
        <div class="w-full bg-cover bg-center bg-no-repeat bg-[url('/assets/images/right-side-signup.svg')]">
        </div>
      </div>
    </div>
  </div>
  <popup-modal
      v-if="showModal"
      @closeModal="showModal = false"
  ></popup-modal>
</template>
<script setup>
import PopupModal from "~/components/PopupModal.vue";
import {useAuthStore} from '../stores/auth.ts';
import SubmitBtn from "~/components/SubmitBtn.vue";

const {registerUser} = useAuthStore();
const store = useAuthStore();
const router = useRouter()

let showModal = ref(false),
    errors = ref(null),
    isConfirmed = ref(true)

const user = ref({
  username: '' || store?.$state.username,
  email: '' || store?.$state.email,
  password: '',
  confirmPassword: '',
  termsAndConditions: false
});
const loginNow = () => {
  if (user.value.username === '' &&
      user.value.email === '' &&
      user.value.password === '' &&
      user.value.confirmPassword === '' &&
      user.value.termsAndConditions === false
  ) {
    router.push('/login');
  }
  showModal.value = true
}

const register = async () => {
  if (user.value.password !== user.value.confirmPassword) {
    isConfirmed.value = false
  } else {
    isConfirmed.value = true
    errors.value = null
    try {
      await registerUser(user.value);
      router.push('/otp');
    } catch (error) {
      console.log(error)
      errors.value = error.response.data.errors
    }
  }
}

</script>