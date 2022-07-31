//type（型エイリアス）
type Sushi_T = {
  calories: number
  salty: boolean
  tasty: boolean
}

//インタフェース
interface Sushi_I{
  calories: number
  salty: boolean
  tasty: boolean
}

//型エイリアスとインタフェースは互いに割り当て可能
let susi1: Sushi_T = {
  calories: 100,
  salty: true,
  tasty: true
}
let susi2: Sushi_I = susi1

type Food_T = {
  calories: number
  tasty: boolean
}
type Sushi_EX_T = Food_T & {
  salty: boolean
}
type Cake_EX_T = Food_T & {
  sweet: boolean
}

interface Food_I {
  calories: number
  tasty: boolean
}
interface Sushi_EX_I extends Food_I{
  salty: boolean
}
interface Cake_EX_I extends Food_I{
  sweet: boolean
}

//型エイリアスとインタフェースの違い１
//型は右辺に柔軟な指定ができる
//これはインタフェースではできない
type A = number | string
type B = 1 & number

//型エイリアスとインタフェースの違い２
//インタフェースは拡張元を正しく拡張しているかチェックしている
interface A1 {
  good(x: number): string
  bad(x: number): string
}
interface B1 extends A1{
  good(x:string | number): string
  bad(x: number | boolean): 'a'
  //↑これが正しく拡張できているから大丈夫だが
  //↓これだけだとNG
  //※拡張の意味がよく理解できていない
  bad(x: boolean): string | boolean
  //なぜこれもダメなのか？
  bad(x: number): string | boolean
}

//型エイリアスとインタフェースの違い３
//インタフェースは同じ名前が存在すると自動的にマージされる
interface A1{
  neutral(x: number): string
  readonly name: string
}
let A1instance:A1 = {
  good(x:number): string{
    return ''
  },
  bad(x: number): string{
    return ''
  },
  neutral(x: number): string{
    return ''
  },
  name: 'aaa'
}
//A1instance.name = 'bbb'

//でも矛盾してはいけない
interface B1{
  age: number
}
interface B1{
  //age: string
}
interface B1{
  age: number
}

//インタフェースの実装
class A1Class implements A1{
  good(x:number): string{
    return ''
  }
  bad(x: number): string{
    return ''
  }
  neutral(x: number): string{
    return ''
  }
  name = 'ccc'
}

class WariateA{
  private x = 1
}
class WariateB extends WariateA{

}
function wariateF(a: WariateA){}
wariateF(new WariateA)
wariateF(new WariateB)
//1という文字列リテラルのxというプロパティを持っているという意味でWariateAと同じ構造だが
//WariateAはプライベートでこれはパブリックなので、これはエラーとなる
//wariateF({x: 1})