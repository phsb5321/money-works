import {
  AuthClient,
  AuthError,
  AuthRequest,
  AuthResponse,
  SignUpRequest
} from '@/data/protocols/auth';
import { EmailInUseError } from '@/domain/errors';

import PocketBase, {
  Record,
  RecordAuthResponse
} from 'pocketbase';

export class PocketBaseAuthClient implements AuthClient {
  private readonly pocketBase: PocketBase
  constructor() {
    this.pocketBase = new PocketBase(
      import.meta.env.VITE_POCKETBASE_API_KEY,
    )
  }

  async signIn(params: AuthRequest): Promise<AuthResponse | AuthError> {
    const { email, password } = params;

    const response: RecordAuthResponse<Record> = await this.pocketBase
      .collection('users')
      .authWithPassword(
        email,
        password
      )

    return response
  }

  async signUp(params: SignUpRequest): Promise<any> {
    const { email, password, passwordConfirm } = params;

    const response = await this.pocketBase
      .collection('users')
      .create({
        email,
        password,
        passwordConfirm
      })

    return response
  }


  async signOut(): Promise<void> {
    return this.pocketBase.authStore.clear()
  }

}
