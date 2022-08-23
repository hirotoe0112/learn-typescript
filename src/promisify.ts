export default null

function promisify<T, A>(
  f: (arg: A, f: (error: unknown, data: T | null) => void) => void
): (arg: A) => Promise<T> {
  return (arg: A) => new Promise((resolve, reject) => {
    f(arg, (error, result) => {
      if(error) {
        return reject(error)
      }
      if(result === null) {
        return reject(null)
      }
      return resolve(result)
    })
  })
}

//使用例
import {readFile} from 'fs'
let readFilePromise = promisify(readFile)
readFilePromise('.myfile.ts')
  .then(data => console.log(data))
  .catch(data => console.log('error'))