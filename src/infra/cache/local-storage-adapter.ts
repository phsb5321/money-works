import { StorageClient, StorageRequest } from '@/data/protocols/cache'

export class LocalStorageClient implements StorageClient {
  set(params: StorageRequest): void {
    const { key, value } = params
    if (value) {
      localStorage.setItem(key, JSON.stringify(value))
    } else {
      localStorage.removeItem(key)
    }
  }

  get(key: string): any {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  }

  remove(key: string): void {
    localStorage.removeItem(key)
  }
}
