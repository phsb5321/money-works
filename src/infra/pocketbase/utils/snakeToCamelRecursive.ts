export const snakeToCamelRecursive: <T>(obj: T) => T = <T>(obj: T): T => {
  if (Array.isArray(obj)) {
    return obj.map(snakeToCamelRecursive) as unknown as T
  }

  if (obj && typeof obj === 'object') {
    return Object.keys(obj)
      .reduce((acc, key) => {
        const camelKey = key.replace(
          /([-_][a-z])/gi,
          ($1) => {
            return $1
              .toUpperCase()
              .replace('-', '')
              .replace('_', '')
          }
        )
        acc[camelKey as keyof T] = snakeToCamelRecursive(obj[key as keyof T])
        return acc
      }, {} as T)
  }

  return obj
}
