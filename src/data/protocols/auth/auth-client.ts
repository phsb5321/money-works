export type AuthRequest = {
  email: string
  password: string
}

export type SignUpRequest = {
  email: string
  password: string
  passwordConfirm: string
}

export interface AuthClient {
  signIn: (params: AuthRequest) => Promise<AuthResponse | AuthError>
  signUp: (params: SignUpRequest) => Promise<AuthResponse>
}

// TODO: FIND A BETTER SOLUTION FOR { [key: string]: any }
export type AuthResponse = {
  token: string,
  record: {
    [key: string]: any
  }
}

// TODO: FIND A BETTER SOLUTION FOR { [key: string]: any }
export type AuthError = {
  data: {
    code: number,
    data: {
      [key: string]: any
    },
    message: string,
  },
  isAbort: boolean,
  originalError: string,
  status: number,
  toJSON: string,
  url: string,
}


export enum AuthStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500
}
