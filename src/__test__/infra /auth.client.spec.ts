import { randEmail, randPassword } from '@ngneat/falso';
import { describe, it, beforeEach, expect, expectTypeOf } from 'vitest'
import { PocketBaseAuthClient } from '@/infra/pocketbase'
import { AuthClient, AuthError, AuthResponse } from '@/data/protocols/auth'
describe('AuthClient', () => {
  let authClient: AuthClient

  beforeEach(() => {
    authClient = new PocketBaseAuthClient()
  })

  it('Given existing parameters should return truthy', async () => {
    const sut = authClient
    const response = await sut.signIn({
      email: 'teste@email.com',
      password: '12345678'
    })
    expect(response).toBeTruthy()
  })

  it('Given existing parameters should return AuthResponse', async () => {
    const sut = authClient
    const response = await sut.signIn({
      email: 'teste@email.com',
      password: '12345678'
    })
    expectTypeOf(response).toEqualTypeOf<AuthResponse>
  })

  it('Given non-existing parameters should return some error', async () => {
    const sut = authClient
    const fakeUser = {
      email: randEmail(),
      password: randPassword()
    }
    try { await sut.signIn(fakeUser) }
    catch (error) { expect(error).toBeTruthy() }
  })

  it('Given non-existing parameters should return AuthError', async () => {
    const sut = authClient
    const fakeUser = {
      email: randEmail(),
      password: randPassword()
    }
    try { await sut.signIn(fakeUser) }
    catch (error) { expectTypeOf(error).toEqualTypeOf<AuthError> }
  })

  it('Given non-existing parameters should return AuthError with message', async () => {
    const sut = authClient
    const fakeUser = {
      email: randEmail(),
      password: randPassword()
    }
    try { await sut.signIn(fakeUser) }
    // @ts-ignore
    catch (error) { expect(error.message).toBeTruthy() }
  })

  it('Given non-existing parameters should return AuthError with code', async () => {
    const sut = authClient
    const fakeUser = {
      email: randEmail(),
      password: randPassword()
    }
    try { await sut.signIn(fakeUser) }
    catch (error) {
      console.log("🚀 ~ file: auth.client.spec.ts:68 ~ it ~ error", error)
      // @ts-ignore
      expect(error.code).toBeTruthy()
    }
  })

})