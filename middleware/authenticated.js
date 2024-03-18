import {useAuthStore} from "~/stores/auth";
export default defineNuxtRouteMiddleware((to, from) => {
    const store = useAuthStore()
    if (!store.authenticated) {
        return navigateTo('/login')
    }
})