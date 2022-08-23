import {fork} from 'child_process'

function createProtocolCP<P extends Protocol>(script: string){
  return <K extends keyof P>(command: K) =>
    (...args: P[K]['in']) =>
      new Promise<P[K]['out']>((resolve, reject) => {
        let child = fork(script)
        child.on('error', reject)
        child.on('message', resolve)
        child.send({command, args})
      })
}

let runWithMatrixProtocolCP = createProtocolCP<MatrixProtocol>(
  'ChildThread.js'
)

let parallelDeterminantCP = runWithMatrixProtocolCP('determinant')
parallelDeterminantCP([[1, 2], [3, 4]])
  .then(determinant => {
    console.log(determinant)
  })
