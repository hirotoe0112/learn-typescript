//map型でイベントの定義をする
//イベント名：引数の型
type Events = {
  ready: void
  error: Error
  reconnectiong: {attempt: number, delay: number}
}

//emitの第二引数を省略できないことが軽微な欠陥
type RedisClient = {
  on<E extends keyof Events>(
    event: E,
    f: (arg: Events[E]) => void
  ): void
  emit<E extends keyof Events>(
    event: E,
    arg: Events[E]
  ): void
}

let client: RedisClient = {
  on<E extends keyof Events>(
    event: E,
    f: (arg: Events[E]) => void
  ){

  },
  emit<E extends keyof Events>(
    event: E,
    arg: Events[E]
  ){

  }
}
client.emit('ready', undefined)
client.emit('error', new RangeError)
//これはエラー
//client.emit('a', new RangeError)
let params = {
  attempt:1,
  delay:2
}
let err = new RangeError
client.on('reconnectiong', params => console.log(params.attempt))
client.on('error', err => console.log(err.message))
client.on('ready', () => console.log('A'))