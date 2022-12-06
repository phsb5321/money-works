import { QueryClient, QueryResponse } from "@/data/protocols/query"
import { createClient } from "@supabase/supabase-js"

export class SupabaseQueryClient implements QueryClient {
  private readonly supabase

  constructor() {
    this.supabase = createClient(
      import.meta.env.VITE_BASE_URL,
      import.meta.env.VITE_SUPABASE_ANON_KEY
    )
  }

  async request(): Promise<QueryResponse> {

    const { data: body, error } = await this.supabase
      .from('Transactions')
      .select(`*`)

    if (error) {
      return {
        statusCode: +error.code,
        body: error.message
      }
    }

    return { statusCode: 200, body }
  }
}