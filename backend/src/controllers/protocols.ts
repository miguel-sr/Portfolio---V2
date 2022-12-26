export interface IHttpResponse<T> {
  statusCode: HttpStatusCode;
  body: T;
}

// ==> B: Body
export interface IHttpRequest<B> {
  params?: { id?: string };
  headers?: any;
  body?: B;
}

export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  SERVER_ERROR = 500,
}

export interface IController {
  handle(httpRequest: IHttpRequest<unknown>): Promise<IHttpResponse<unknown>>;
}
