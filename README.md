# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```
User for valid test
-----------------

email: valid@mail.ru

password: valid

-----------------
## figma
https://www.figma.com/file/ztjP46f3M8byKkVdZgV0MS/Untitled?type=design&node-id=0%3A1&t=iOwDJEHmuojB1eyb-1
```bash
Требования:
1) Нужно реализовать страницы по Pixel Perfect.
2) Верстка - tailwindcss (https://tailwindcss.com/)
3) Стейт формы должен быть в Pinia
4) Используем встроенный в nuxt 3 fetch api (https://github.com/unjs/ofetch)
5) Кнопки LOG IN и SIGN UP  должны быть дезактивированы пока не введены все поля 
6) На странице Signup при введенных данных и попытке смены роута должен не пускать на страницу login’a задаем вопрос пользователю с вопросом что все данные могут быть потеряны.  Если нажимает ок то данные формы очищаются и происходит переход. Если нажимает нет то остаемся на текущей странице
7) На странице OTP Должен отображаться введенный ранее email при нажатии на change Email возвращаемся на предыдущую страницу и очищаем password и confirm password
8) При нажатии на SUBMIT или на LOG IN отправляем запрос на https://dummyjson.com/auth/login method: 'POST’, Content-Type': 'application/json' (дока https://dummyjson.com/docs/auth)
```

Login user and get token
You can use any user's credentials from dummyjson.com/users

```bash
fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: 'kminchelle',
    password: '0lelplR',
    // expiresInMins: 60, // optional
  })
})
.then(res => res.json())
.then(console.log);
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
