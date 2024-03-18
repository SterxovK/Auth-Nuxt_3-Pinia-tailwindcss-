import {defineStore} from 'pinia';

interface UserPayloadInterface {
    username: string;
    password: string;
    email: string;
}

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authenticated: false,
        loading: false,
        username: '',
        email: '',
        password: '',
    }),

    actions: {
        async authenticateUser({username, password}: UserPayloadInterface) {
            const {data, pending}: any = await useFetch('https://dummyjson.com/auth/login', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: {
                    username: username,
                    password: password,
                },
            });
            this.loading = pending;
            this.username = data?.value?.username;
            this.email = data?.value?.email;

            if (data.value) {
                const token = useCookie('token');
                token.value = data?.value?.token;
                this.authenticated = true;
            }
        },

        async registerUser({email, username, password}) {
            const {data}: any = await useFetch("https://dummyjson.com/user/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: {
                    email: email,
                    password: password,
                    username: username
                },
            });
            this.username = data?.value?.username;
            this.email = data?.value?.email;
            this.password = data?.value?.password;
        },

        async otpSubmit(data) {
            const {res}: any = await useFetch('https://dummyjson.com/auth/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: {
                    data: data
                },
            })
        }
    },
});