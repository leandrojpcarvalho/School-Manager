export type AsyncResponse<T> = Promise<T>;

export type ErrorType = {
  message: string
}

export type ServiceType<T> = {
  status: number;
  payload: T;
};

export type PayloadType<T> = T | ErrorType;
