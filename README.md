<img width="100" alt="logo" src="./public/taskly.svg" />

# Taskly

Тестовый проект для того что бы показать как можно создать проект на [FSD](https://feature-sliced.design/) технологии

#### Стек технологии:

- [React](https://react.dev/learn) + [Typescript](https://www.typescriptlang.org/docs/)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) - a small, fast, and scalable bearbones state management solution
- [Ant.design](https://ant.design/) - как готовые UI компоненты
- [React Hook Form](https://react-hook-form.com/) - performant, flexible and extensible forms with easy-to-use validation.
- [Zod](https://zod.dev/) - Проверка схемы на основе TypeScript-first со статическим выводом типа
- [Vite](https://vitejs.dev/guide/) - быстрый сборщих

## Основные требования к проекту

> [!NOTE]
> Версия Node v20\*

## For Developers

```shell
npm i && npm run dev
```

запустить проект по адресу [localhost:4000](http://localhost:4000)

> [!CAUTION]
> Обязательно запустить команду
>
> ```shell
> npm run prepare
> ```

[env.example](env.example) переименовать на .env посли если параметр VITE_USE_MSW=true,
тогда можно будет тестировать локально.

для локально тестирование логин и пароль

```aiignore
email: admin@gmail.com
password: admin
```

## For DevOps

Сборщик [ViteJS](https://vitejs.dev/). По развертки на проде можно почитать тут [Deploying ViteJS](https://vitejs.dev/guide/static-deploy.html#building-the-app)

### Для запуска проекта в production окружение запускаем команду:

```shell
npm i && npm run build
```

> [!NOTE]
> В корне проекта создается папка dist это и есть исходник фронта, надо что бы запускался index.html
