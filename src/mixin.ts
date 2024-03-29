//役割指向プログラミング
//これはShapeである、ではなく、これは4つの辺をもつ、など役割について記述する
type ClassConstructor<T> = new(...args: any[]) => T
function withEZDebug<C extends ClassConstructor<{
  getDebugValue(): object
}>>(Class: C){
  return class extends Class{
    //追加ロジックをもたないためこれは省略可能
    constructor(...args: any[]) {
      super(...args)
    }
    debug() {
      let Name = this.constructor.name
      let value = this.getDebugValue()
      return Name + '(' + JSON.stringify(value) + ')'
    }
  }
}
class HardToDebugUser {
  constructor(
    private id: number,
    private firstName: string,
    private lastName: string
  ){}
  getDebugValue(){
    return {
      id: this.id,
      name: this.firstName + ' ' + this.lastName
    }
  }
}
let User = withEZDebug(HardToDebugUser)
let user = new User(3, 'Emma', 'Gluzman')
console.log(user.debug())