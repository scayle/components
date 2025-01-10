type ConvertUnionToArray<T> = T extends infer b ? b[] : never;

export type BaseValueType = string | object | number;
export type ValueType = BaseValueType | null;
export type MultiSelectValueType = ConvertUnionToArray<BaseValueType>;
