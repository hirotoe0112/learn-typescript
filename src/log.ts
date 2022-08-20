import * as fs from 'fs'

fs.readFile(
  './data/access_log',
  {encoding: 'utf8'},
  (error, data) => {
    if(error){
      console.error('error reading!', error)
      return
    }
    console.info('success reading!', data)
  }
)

fs.appendFile(
  './data/access_log',
  'New access log entry',
  error => {
    if(error){
      console.error('error writing!', error)
    }
  }
)