export const camelToSnakeRecursive: <T>(obj: T) => T = <T>(obj: T): T => {
  if (Array.isArray(obj)) {
    return obj.map(camelToSnakeRecursive) as unknown as T
  }

  if (obj && typeof obj === 'object') {
    return Object.keys(obj)
      .reduce((acc, key) => {
        const snakeKey = key.replace(
          /[A-Z]/g,
          (letter) => {
            return `_${letter.toLowerCase()}`
          })
        acc[snakeKey as keyof T] = camelToSnakeRecursive(obj[key as keyof T])
        return acc
      }, {} as T)
  }

  return obj
}