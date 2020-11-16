export type ArrayOrType<T> = T | T[];
export type hashType = ArrayOrType<hashCode>;

export interface hashCode {
  code: string | null;
}

