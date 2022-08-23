type Matrix = number[][]

type MatrixProtocol = {
  determinant: {
    in: [Matrix]
    out: number
  }
  'dot-product': {
    in: [Matrix, Matrix]
    out: Matrix
  }
  invert: {
    in: [Matrix]
    out: [Matrix]
  }
}

type Protocol = {
  [command: string]: {
    in: unknown[]
    out: unknown
  }
}
function createProtocol<P extends Protocol>(script: string){
  return <K extends keyof P>(command: K) =>
    (...args: P[K]['in']) =>
      new Promise<P[K]['out']>((resolve, reject) => {
        let worker = new Worker(script)
        worker.onerror = reject
        worker.onmessage = event => resolve(event.data)
        worker.postMessage({command, args})
      })
}