import { HttpRequest, HttpResponse, HttpClient } from '@/data/protocols/http/http-client'

import axios, { AxiosResponse } from 'axios'

export class AxiosHttpClient implements HttpClient {
  async request(params: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse

    axiosResponse = await axios.request({
      url: params.url,
      method: params.method,
      data: params.body,
      headers: params.headers
    })

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}
