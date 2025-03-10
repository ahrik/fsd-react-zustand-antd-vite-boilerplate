# FSD (Feature-Sliced Design)

Архитектурная методология для организации фронтенд-проектов.

[![FSD Link](https://img.shields.io/badge/Link-FSD-2b74d4)](https://feature-sliced.design/ru/)

Что такое FSD?

FSD (Feature-Sliced Design) — это методология для структурирования фронтенд-приложений, которая акцентирует внимание на делении приложения на независимые слои и модули. Она помогает организовать код так, чтобы упростить разработку, тестирование и сопровождение проекта.

Основная цель FSD — обеспечить четкую изоляцию бизнес-логики, компонентов, страниц и других сущностей. Это позволяет улучшить масштабируемость и снизить связанность между модулями.

Перед изучением FSD рекомендуется освежить основные архитектурные принципы и подходы:

> - [DRY (Don't Repeat Yourself)](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) — не дублируйте код, стремитесь к переиспользованию.
> - [KISS (Keep It Simple, Stupid)](https://en.wikipedia.org/wiki/KISS_principle) — делайте простые и понятные решения.
> - [SOLID](https://en.wikipedia.org/wiki/SOLID) — набор принципов для проектирования архитектуры.
>   - S — Single Responsibility Principle
>   - O — Open/Closed Principle - используем в основном в Shared layer
>   - L — Liskov Substitution Principle
>   - I — Interface Segregation Principle
>   - D — [Dependency Inversion Principle](https://medium.com/@ruben.alapont/solid-principles-series-the-dependency-inversion-principle-dip-in-typescript-424a9cb0820e) - это в FSD используется хорошо и надо понять как с этим работать в коде
> - [DDD (Domain-Driven Design)](https://en.wikipedia.org/wiki/Domain-driven_design) — концепция проектирования на основе бизнес-доменов, активно применяется в feature-слоях.
> - [YAGNI (You Aren’t Gonna Need It)](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it) — избегайте избыточных функций, которые сейчас не нужны.
> - [GRASP (General Responsibility Assignment Software Patterns)](<https://en.wikipedia.org/wiki/GRASP_(object-oriented_design)>) — придерживайтесь низкой связанности между модулями (Low Coupling).
> - [CQS (Command Query Separation)](https://en.wikipedia.org/wiki/Command%E2%80%93query_separation) — разделяйте команды и запросы.
> - [OOP (Объектно-ориентированное программирование)](https://www.typescriptlang.org/docs/handbook/classes.html) — понимание объектно-ориентированного подхода важно для работы с TypeScript.

## Основные слои методологии

### Shared

- Стабильные модули, которые редко меняются.
- Можно использовать кросс-импорты.
- Не должны содержать бизнес-логику.
- Содержат интерфейсы и контексты, реализуемые в верхних слоях.
- Следует избегать инверсии зависимости.

### Entities

- Представляют абстрактный слой бизнес-логики.
- Кросс-импорты на этом уровне запрещены.
- Связь между модулями осуществляется на верхнем уровне.
- Хранят состояния (store).
- Лучше использовать фабрики (Factory), избегая Singleton.
- Рекомендуется активно применять [слоты](https://habr.com/ru/articles/518500/) и [render props](https://react.dev/reference/react/Children#calling-a-render-prop-to-customize-rendering).

### Features

- Реализуют конкретные бизнес-фичи, сохраняя высокий уровень связности [high cohesion](<https://en.wikipedia.org/wiki/GRASP_(object-oriented_design)#High_cohesion>)
- Нельзя импортировать фичи друг в друга.
- Ориентированы на реализацию сценариев использования (use cases).
- Определяют действия приложения в терминах бизнеса (например, user, employee, student).
- Структурируются с использованием ["Кричащая архитектура"](https://habr.com/ru/articles/747210/)
- Отображения (формы, кнопки, модалки) реализуются внутри конкретных сценариев.
- Группируются в папки по схожим фичам, например: auth/sign-in, auth/sign-out.

### Widgets / Pages

- Widgets и Pages схожи, но widgets должны быть переиспользуемыми.
- Это слой отображения, который объединяет логику и интерфейс из нижних слоев.
- Имеет плоскую структуру.
- Кросс-импорты на этом уровне запрещены.
- Может содержать логику отображения, но не бизнес-логику.
- Часто меняются, поэтому бизнес-логику нужно исключить.

### App

- Содержит глобальную композицию и логику приложения.
- Не импортируется из других слоев.
- Часто изменяемый слой.
- Глобальные данные описываются и компонуются здесь, а дальше передаются в нижние слои.
