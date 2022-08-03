//ファクトリーパターン
type Shoe = {
  purpose: string
}

class BalletFlat implements Shoe{
  purpose = 'dancing'
}

class Boot implements Shoe{
  purpose = 'woodcutting'
}

class Sneaker implements Shoe{
  purpose = 'walking'
}

//クラスと同じ名前で宣言するのはコンパニオンオブジェクトパターン
//その型を操作するためのメソッドをその値が提供する
let Shoe = {
  create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
    switch(type) {
      case 'balletFlat': return new BalletFlat
      case 'boot': return new Boot
      case 'sneaker': return new Sneaker
    }
  }
}

let ballet = Shoe.create('balletFlat')
console.log(ballet.purpose)