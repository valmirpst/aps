export type ReturnDataType<T> = {
  ok: boolean;
  error: string | null;
  data: T | null;
};
