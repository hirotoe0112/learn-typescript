class UserNotLoggedInError extends Error {}
class UserNotExistsError extends Error{}

type UserID = number

let isLoggedIn = true
let userName = ''

class API {
  getLoggedInUserID(): UserID | UserNotLoggedInError {
    if(isLoggedIn){
      return 1
    }
    return new UserNotLoggedInError
  }
  getFriendIDs(userID: UserID): UserID[] | UserNotLoggedInError | UserNotExistsError {
    if(!isLoggedIn){
      return new UserNotLoggedInError
    } else if(userName == ''){
      return new UserNotExistsError
    }
    return [2, 3]
  }
  getUserName(userID: UserID): string | UserNotExistsError {
    if(userName == ''){
      return new UserNotExistsError
    }
    return 'Anna'
  }
}

let api = new API()
let resultName: string
let loginUserID = api.getLoggedInUserID()
if(loginUserID instanceof UserNotLoggedInError){
  console.log('error')
}else{
  let friends = api.getFriendIDs(loginUserID)
  if(friends instanceof Error){
    console.log('error')
  }else{
    let name = api.getUserName(friends[0])
    if(name instanceof UserNotExistsError){
      console.log('error')
    }else{
      resultName = name
    }
  }
}