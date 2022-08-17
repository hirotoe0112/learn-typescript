type Exclusive<T, U> = Exclude<T, U> | Exclude<U, T>

type R = Exclusive<1 | 2 | 3, 2 | 3 | 4>

function fetchUser(){
  return globalCache.get('userid')
}

let globalCache = {
  get(value: string) {
    return 'user'
  }
}
let userId: string
userId = fetchUser()
userId.toUpperCase()