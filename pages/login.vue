<template>
  <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
    <div
        class="max-w-[1440px] m-0 sm:m-10 bg-[#F5F8FF] shadow rounded-[50px] overflow-hidden flex justify-center flex-1">
      <div class="lg:w-1/2 px-32 m-auto">
        <div class="flex flex-col items-center">
          <h1 class="text-[40px]/[24px] font-bold font-montserrat text-nowrap">
            Login to your Account
          </h1>
          <div class="w-full flex-1 mt-8">
            <div class="h-4 mx-3 bg-center bg-[url('/assets/images/wEmail-line.svg')] bg-no-repeat"></div>

            <div class="mx-auto">
              <form @submit.prevent="login()">
                <div class="w-full relative flex items-center mt-6">
                  <TextInput
                      placeholder="Email"
                      v-model:input="user.email"
                      inputType="email"
                      :error="errors && errors.email ? errors.email[0] : ''"/>
                </div>
                <div class="w-full relative flex items-center mt-2.5">
                  <TextInput
                      placeholder="Password"
                      v-model:input="user.password"
                      :error="errors && errors.password ? errors.password[0] : ''"/>
                </div>
                <div v-if="noValid" class="text-[red]">Неправильный логин или пароль</div>
                <SubmitBtn :text="'LOG IN'" :disabled="!user.email || !user.password"/>
              </form>
              <p class="mt-6 text-[#71717A] text-center text-[16px]/[24px] ">
                Don’t have account?
                <NuxtLink to="/signUp" class="text-[#8098F9] font-bold">Create an account</NuxtLink>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 text-center hidden lg:flex">
        <div class="w-full bg-cover bg-center bg-no-repeat bg-[url('/assets/images/right-side-login.svg')]">
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {storeToRefs} from 'pinia'; // import storeToRefs helper hook from pinia
import {useAuthStore} from '../stores/auth.ts';
import SubmitBtn from "~/components/SubmitBtn.vue"; // import the auth store we just created

const {authenticateUser} = useAuthStore(); // use authenticateUser action from  auth store
const {authenticated} = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs
const store = useAuthStore()
const user = ref({
  email: '',
  password: '',
});
let errors = ref(null),
    noValid = ref(false)

const router = useRouter();
const login = async () => {
// TODO Для обработки валидного и не валидного логирования
  if (user.value.email == 'valid@mail.ru' && user.value.password == 'valid') {
      user.value = {
        username: 'kminchelle',
        password: '0lelplR',
      }
    try {
      await authenticateUser(user.value);
      if (authenticated) {
//TODO PATH && authenticated?
        router.push('/');
      }
    } catch (error) {
      console.log(error)
      errors.value = error.response.data.errors
    }
  } else {
    noValid.value = true
  }

}
</script>