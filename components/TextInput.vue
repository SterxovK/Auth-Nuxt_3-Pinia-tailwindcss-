<template>
    <span class="absolute">
       <div v-if="isEmail"
            class="bg-[url('/assets/icon/email.svg')]"
            v-bind:class="styleImgSpan">
       </div>
      <div v-else-if="isPass"
           class="bg-no-repeat bg-[url('/assets/icon/password.svg')]"
           v-bind:class="styleImgSpan">
       </div>
      <div v-else-if="isPers"
           class="bg-no-repeat bg-[url('/assets/icon/person.svg')]"
           v-bind:class="styleImgSpan">
       </div>
    </span>

  <input
      :id="placeholder"
      :placeholder="placeholder"
      :maxlength="String(max)"
      v-bind:class="styleInput"
      @focus="isFocused = true"
      @blur="isFocused = false"
      :class="isFocused ? 'border-gray-900' : ''"
      :type="passW && isPass ? 'password' : inputType"
      v-model="inputComputed"
      autocomplete="off"
  >
  <span v-if="isPass" class="absolute right-[20px]">
         <div
             class="bg-[url('/assets/icon/eye-slash.svg')] hover:cursor-pointer"
             v-bind:class="styleImgSpan"
             @click="passW = !passW">
         </div>
  </span>
  <span v-if="error" class="text-red-500 text-[14px] font-semibold absolute right-[5rem]">
            {{ error }}
  </span>
</template>

<script setup>
const emit = defineEmits(['update:input'])
const props = defineProps(['input', 'placeholder', 'max', 'inputType', 'error'])
const {input, placeholder, max, inputType, error} = toRefs(props)

let isFocused = ref(false)
const isPass = computed(() => props.placeholder === 'Password' || props.placeholder === 'Confirm Password'),
    isEmail = computed(() => props.placeholder === 'Email'),
    isPers = computed(() => props.placeholder === 'Username'),
    passW = ref(true)

const inputComputed = computed({
  get: () => input.value,
  set: (val) => emit('update:input', val)
})

const styleInput = [
  'block',
  'w-full',
  'py-[20px]',
  'text-lg',
  'text-gray-700',
  'bg-[#8098F9]/10',
  'border',
  'border-[#8098F9]/50',
  'rounded-lg',
  'px-12',
  'focus:border-blue-400',
  'focus:ring-blue-300',
  'focus:outline-none',
  'focus:ring',
  'focus:ring-opacity-40',
  'placeholder:text-[`18px`, `24px`]',
  'placeholder:font-normal',
  'placeholder:px-3',
  'placeholder:text-[#2D31A6]/20'
]
const styleImgSpan = [
  'w-8',
  'h-8',
  'mx-3',
  'bg-center',
  'bg-no-repeat'
]
</script>