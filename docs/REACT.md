### Что такое React Slots?

**React Slots** — это концепция, используемая для создания гибких компонентов с "слотами" (местами), в которые можно передавать произвольный JSX-контент. Аналог этой концепции можно найти в веб-компонентах (Web Components), где используются `<slot>` для вставки произвольного контента.

Идея заключается в том, что компонент предоставляет место для вставки контента, а разработчик, используя этот компонент, может вставить в это место произвольный JSX.

---

### Варианты реализации React Slots

1. **Простое использование `children`**
   Это самый базовый способ. Вы просто передаете дочерний контент через проп `children`.

```tsx
type CardProps = {
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="card">{children}</div>;
};

const App = () => (
  <Card>
    <h1>Заголовок</h1>
    <p>Описание</p>
  </Card>
);
```

2. **Именованные слоты через `props`**
   Если нужно иметь несколько именованных слотов, это можно сделать через передачу отдельных пропов.

```tsx
type CardProps = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ header, footer, children }) => {
  return (
    <div className="card">
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

const App = () => (
  <Card header={<h1>Заголовок</h1>} footer={<button>Кнопка</button>}>
    <p>Описание</p>
  </Card>
);
```

3. **Использование объекта для передачи слотов**
   Это позволяет передавать все слоты через объект, улучшая читаемость кода.

   ```tsx
   type CardProps = {
     slots: {
       header?: React.ReactNode;
       body?: React.ReactNode;
       footer?: React.ReactNode;
     };
   };

   const Card: React.FC<CardProps> = ({ slots }) => {
     return (
       <div className="card">
         {slots.header && <div className="card-header">{slots.header}</div>}
         {slots.body && <div className="card-body">{slots.body}</div>}
         {slots.footer && <div className="card-footer">{slots.footer}</div>}
       </div>
     );
   };

   const App = () => (
     <Card
       slots={{
         header: <h1>Заголовок</h1>,
         body: <p>Описание</p>,
         footer: <button>Кнопка</button>,
       }}
     />
   );
   ```

4. **Рендер-функции (Render Props)**
   Используются, если требуется передать логику вместе с контентом.

```tsx
type CardProps = {
  renderHeader?: () => React.ReactNode;
  renderFooter?: () => React.ReactNode;
};

const Card: React.FC<CardProps> = ({ renderHeader, renderFooter }) => {
  return (
    <div className="card">
      {renderHeader && <div className="card-header">{renderHeader()}</div>}
      <div className="card-body">Тело карточки</div>
      {renderFooter && <div className="card-footer">{renderFooter()}</div>}
    </div>
  );
};

const App = () => <Card renderHeader={() => <h1>Заголовок</h1>} renderFooter={() => <button>Кнопка</button>} />;
```

5. **Контекст для гибкости**
   Контекст позволяет компонентам взаимодействовать друг с другом, не передавая пропсы явно.

```tsx
const CardContext = React.createContext({});

const CardHeader = () => {
  const { header } = React.useContext(CardContext);
  return <div className="card-header">{header}</div>;
};

const CardBody = () => {
  const { body } = React.useContext(CardContext);
  return <div className="card-body">{body}</div>;
};

const CardFooter = () => {
  const { footer } = React.useContext(CardContext);
  return <div className="card-footer">{footer}</div>;
};

const Card = ({ children, slots }: { children: React.ReactNode; slots: any }) => (
  <CardContext.Provider value={slots}>
    <div className="card">{children}</div>
  </CardContext.Provider>
);

const App = () => (
  <Card
    slots={{
      header: <h1>Заголовок</h1>,
      body: <p>Описание</p>,
      footer: <button>Кнопка</button>,
    }}
  >
    <CardHeader />
    <CardBody />
    <CardFooter />
  </Card>
);
```
