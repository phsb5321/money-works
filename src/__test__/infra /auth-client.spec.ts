import { randEmail, randPassword } from '@ngneat/falso';
import { describe, it, beforeEach, expect, expectTypeOf } from 'vitest'
import { PocketBaseAuthClient } from '@/infra/pocketbase'
import { AuthClient, AuthError, AuthResponse } from '@/data/protocols/auth'
describe('AuthClient', () => {
  let authClient: AuthClient

  beforeEach(() => { authClient = new PocketBaseAuthClient() })

  it('Given existing parameters should return truthy', async () => {
    const sut = new PocketBaseAuthClient()
    const response = await sut.signIn({
      email: 'teste@email.com',
      password: '123!@#qweQWE'
    })
    expect(response).toBeTruthy()
  })

  it('Given existing parameters should return AuthResponse', async () => {
    const sut = new PocketBaseAuthClient()
    const response = await sut.signIn({
      email: 'teste@email.com',
      password: '123!@#qweQWE'
    })
    expectTypeOf(response).toEqualTypeOf<AuthResponse>
  })

  it('Given non-existing parameters should return some error', async () => {
    const sut = new PocketBaseAuthClient()
    const fakeUser = {
      email: randEmail(),
      password: randPassword()
    }
    try { await sut.signIn(fakeUser) }
    catch (error) { expect(error).toBeTruthy() }
  })

  it('Given non-existing parameters should return AuthError', async () => {
    const sut = new PocketBaseAuthClient()
    const fakeUser = {
      email: randEmail(),
      password: randPassword()
    }
    try { await sut.signIn(fakeUser) }
    catch (error) { expectTypeOf(error).toEqualTypeOf<AuthError> }
  })

})