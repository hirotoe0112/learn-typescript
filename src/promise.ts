import {readFile} from 'fs'
import { resolve } from 'path'

/*
function appendAndReadPromise(path: string, data: string): Promise1<string> {
  return appendPromise(path, data)
    .then(() => readPromise(path))
    .catch(error => console.error(error))
}

type Executor<T> = (
  resolve: (result: T) => void, //成功
  reject: (error: unknown) => void //失敗
) => void

class Promise1<T> {
  constructor(f: Executor<T>){}
  then<U>(g: (result: T) => Promise1<U> | U): Promise1<U>{
  }
  catch<U>(g: (error: unknown) => Promise1<U> | U): Promise1<U>{

  }
}
*/