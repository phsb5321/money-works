export type AuthRequest = {
  email: string
  password: string
}

export interface AuthClient {
  signIn: (params: AuthRequest) => Promise<AuthResponse>
  signUp: (params: AuthRequest) => Promise<AuthResponse>
}


// TODO: Find a way to import this type from supabase-js
export type AuthResponse = any

export enum AuthStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500
}
