export interface StorageRequest {
  key: string
  value: any
}

export interface StorageClient {
  set: (params: StorageRequest) => void
  get: (key: string) => any // TODO: find a way to type this
  remove: (key: string) => void
}
