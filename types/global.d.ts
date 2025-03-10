type Nullable<Type> = { [Key in keyof Type]: Type[Key] | null };

type ToString<TData extends object> = Record<keyof TData, string>;
