//メッセージパッシングAPI
let worker = new Worker('WorkerScript.js')
worker.onmessage = e => {
  console.log(e.data)
}
worker.postMessage('some data')

//チャットクライアント
type Message = string
type ThreadID = number
type UserIDChat = number
type Participants = UserID[]

type Commands = {
  sendMessageToThread: [ThreadID, Message]
  createThread: [Participants]
  addUserToThread: [ThreadID, UserIDChat]
  removeUserFromThread: [ThreadID, UserIDChat]
}

type ChatEvents = {
  receivedMessage: [ThreadID, UserIDChat, Message]
  createThread: [ThreadID, Participants]
  addedUserToThread: [ThreadID, UserIDChat]
  removedUserFromThread: [ThreadID, UserIDChat]
}