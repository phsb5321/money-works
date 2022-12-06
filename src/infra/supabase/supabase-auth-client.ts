import { AuthClient, AuthRequest } from '@/data/protocols/auth'
import { EmailInUseError } from '@/domain/errors';
import { AuthResponse, createClient } from '@supabase/supabase-js'


export class SupabaseAuthClient implements AuthClient {
  private readonly supabase

  constructor() {
    this.supabase = createClient(
      import.meta.env.VITE_BASE_URL,
      import.meta.env.VITE_SUPABASE_SERVICE_KEY
    )
  }


  async signIn(params: AuthRequest): Promise<AuthResponse> {
    const { email, password } = params;

    const token = await this.supabase
      .auth.signInWithPassword({
        email,
        password
      })


    if (token.error) {
      throw new EmailInUseError()
    }

    return token
  }

  async signUp(params: AuthRequest): Promise<AuthResponse> {
    const { email, password } = params;
    const token = await this.supabase.auth.signUp({
      email,
      password,
    })

    if (token.error) {
      throw new Error(token.error.message)
    }

    return token
  }

  async signOut() {
    const { error } = await this.supabase.auth.signOut()

    if (error) {
      throw new Error(error.message)
    }
  }

}