import vitest, { describe, it, beforeEach, expect } from 'vitest'
import { PocketBaseQueryClient } from '@/infra/pocketbase'
import { QueryClient } from '@/data/protocols/query'


describe('QueryClient', () => {
  let queryClient: QueryClient

  beforeEach(() => {
    queryClient = new PocketBaseQueryClient()
  })

  it('should return statusCode 200 and a body', async () => {
    const response = await queryClient.listPaginated({
      collection: 'users'
    })
    console.log("🚀 ~ file: query-client.spec.ts:15 ~ it ~ response", response)

    expect(response.statusCode).toBe(200)
    expect(response.body).toBeTruthy()
  })
})