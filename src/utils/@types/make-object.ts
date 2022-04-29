export type MakeObject<Keys extends string | number | symbol, Values> = { [K in Keys]: Values };
export type MakeLazyObject<Keys extends string | number | symbol, Values> = Partial<MakeObject<Keys, Values>>;
