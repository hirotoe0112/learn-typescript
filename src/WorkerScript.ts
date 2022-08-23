//メインスレッドから送られてきたイベントをリッスン
onmessage = e => {
  console.log(e.data)
  postMessage(`Ack: "${e.data}"`)
}

//チャットクライアント
import {EventEmitter} from 'events'

interface SafeEmitter<
  EventsChat extends Record<PropertyKey, unknown[]>
> {
  emit<K extends keyof EventsChat>(
    channel: K,
    ...data: EventsChat[K]
  ): boolean
  on<K extends keyof EventsChat>(
    channel: K,
    listener: (...data: EventsChat[K]) => void
  ): this
  on(
    channel: never,
    listener: (...data: unknown[]) => void
  ): this
}

type Commands = {
  sendMessageToThread: [ThreadID, Message]
  createThread: [Participants]
  addUserToThread: [ThreadID, UserIDChat]
  removeUserFromThread: [ThreadID, UserIDChat]
}

type EventsChat = {
  receivedMessage: [ThreadID, UserIDChat, Message]
  createThread: [ThreadID, Participants]
  addedUserToThread: [ThreadID, UserIDChat]
  removedUserFromThread: [ThreadID, UserIDChat]
}

let commandEmitter: SafeEmitter<Commands> = new EventEmitter()
let eventEmitter: SafeEmitter<EventsChat> = new EventEmitter()
onmessage = command => {
  commandEmitter.emit(
    command.data.type,
    ...command.data.data
  )
}

eventEmitter.on('receivedMessage', data => {
  postMessage({type: 'receivedMessage', data})
})
eventEmitter.on('createThread', data => {
  postMessage({type: 'createThread', data})
})
commandEmitter.on('sendMessageToThread', (threadID, message) => {
  console.log('OK')
})
eventEmitter.emit('createThread', 123, [456, 789])