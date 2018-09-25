

export interface ServerResponseSuccess {
  data?: any,
  summary?: any,
  challenges?: any,
  message?: string
}



export interface ServerResponseError {
  error: string,
  detail: any
}

export interface ServerResponse {
  statusCode: number,
  payload: ServerResponseSuccess|ServerResponseError
}
