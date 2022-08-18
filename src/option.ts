interface Option<T> {
  flatMap<U>(f: (value: T) => None): None
  flatMap<U>(f: (value: T) => Option<U>): Option<U>
  getOrElse(value: T): T
}
//成功した操作
class Some<T> implements Option<T> {
  constructor(private value: T) {}
  flatMap<U>(f: (value: T) => None): None
  flatMap<U>(f: (value: T) => Some<U>): Some<U>
  flatMap<U>(f: (value: T) => Option<U>): Option<U> {
    return f(this.value)
  }
  getOrElse(value: T): T {
    return this.value
  }
}
//失敗した操作
class None implements Option<never> {
  flatMap(): None {
    return this
  }
  getOrElse(value: never): never {
    return value
  }
}

function Option<T>(value: null | undefined): None
function Option<T>(value: T): Some<T>
function Option<T>(value: T): Option<T> {
  if(value == null){
    return new None
  }
  return new Some(value)
}

let result = Option(6)
  .flatMap(n => Option(n * 3))
  .getOrElse(7)