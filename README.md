<img width="100" alt="logo" src="./public/logo.svg" />

# Admin

Test project to demonstrate how to create a project using [FSD](https://feature-sliced.design/) technology.

#### Technology stack:

- [React](https://react.dev/learn) + [Typescript](https://www.typescriptlang.org/docs/)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) - a small, fast, and scalable bearbones state management solution
- [Ant.design](https://ant.design/) - Help designers/developers building beautiful products more flexible and working with happiness
- [React Hook Form](https://react-hook-form.com/) - performant, flexible and extensible forms with easy-to-use validation
- [Zod](https://zod.dev/) - typeScript-first schema validation with static type inference
- [Vite](https://vitejs.dev/guide/) - Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects

## Key requirements for the project

> [!NOTE]
> Node version v21\*

## Developer Guide

```shell
npm i && npm run dev
```

Run the project at [localhost:4000](http://localhost:4000)

> [!CAUTION]
> You must run the command
>
> ```shell
> npm run prepare
> ```

[env.example](env.example) rename it to .env. If the parameter VITE_USE_MSW=true, local testing will be available.

Login and password for local testing

```aiignore
email: admin@gmail.com
password: admin
```

## DevOps Guide

[ViteJS](https://vitejs.dev/) bundler. Read more about production deployment here: [Deploying ViteJS](https://vitejs.dev/guide/static-deploy.html#building-the-app).

### To start the project in the production environment, run the command:

```shell
npm i && npm run build
```

> [!NOTE]
> A dist folder is created at the root of the project. This is the frontend build, and index.html should be launched.
