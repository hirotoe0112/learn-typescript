class Set2{
  has(value:number):boolean{
    return true
  }
  add(value:number):this{
    return this
  }
}

class MutableSet extends Set2{
  delete(value:number):boolean{
    return true
  }
}

const mut = new MutableSet()
const mut1 = mut.add(1)

const set = new Set2()
const set1 = set.add(2)

class MessageQueue{
  private constructor(private message: string[]){}
  //インスタンス化を実現するためのメソッド
  static create(message: string[]){
    return new MessageQueue(message)
  }
}

//private constructorに指定すると拡張不可
//class BadQueue extends MessageQueue{}
//newも不可
//let q = new MessageQueue([])
//代わりに、createメソッドを実装し、このようにする
let q = MessageQueue.create([])

class Rensyu5 {
  protected constructor() {}
  static create(): Rensyu5 {
    return new Rensyu5
  }
}
let re = Rensyu5.create()
class Rensyu5_1 extends Rensyu5{
}
//let re2 = new Rensyu5_1()

function function1(a: string[]): void{

}
var annnny = [1, 'a']
//function1(annnny)

//これをチェックするにはtsconfig.jsonのnoImplicitReturnsフラグをONにする
//function isBig(n: number) {
//  if(n >= 100){
//    return true
//  }
//}