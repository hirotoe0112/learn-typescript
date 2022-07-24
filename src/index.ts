/*
console.log('Hello Typescript!!2');

let a = 1 + 2
let b = a + 3
let c = {
  apple: a,
  banana: b
}
let d = c.apple * 4
*/
const a = "test"
const b = "test2"
const c = "test3"

let abc: {
  aaa:string,
  bbb:string,
}

abc = {
  aaa:'a',
  bbb:'b',
}

let arr = [1, 'aaa']
arr.push(2)
arr.push('aaaa')

let a1 = 1042 //number
let b1 = 'apples and oranges' //string
const c1 = 'pineapples' //pineapples
let d1 = [true, true, false] //boolean[]
let e1 = {type: 'ficus'} //type:string
let f1 = [1, false] // (number|boolean)[]
const g1 = [3] //number[]
let h1 = null //any

let i:3 = 3
let j = [1, 2, 3]
j.push(4)
let k:never
let l:unknown = 4;
if(typeof l === 'number'){
  let m = l * 2
}else{
}

//エラーになる
let func1 = function(num:number){
  const aaa: string[] = []
  //return num * aaa
}

//エラーにならず危険
let greet5 = new Function('num', 'const aaa = []; return num * aaa')
console.log(greet5('aaaa'));

const aaabbb: string[] = []
//console.log(1 * aaabbb)

console.log('aaaaa', 'bbbbb', 12343)

function fancyDate(this: Date){
  return this.getMonth();
}

console.log(fancyDate.apply(new Date))

//ジェネレータ
function* createLoopMonth(){
  let month = 1
  while(true){
    yield month + '月'
    if(month <= 11){
      month += 1
    }else{
      month = 1
    }
  }
}

let monthGenerator = createLoopMonth()
console.log(monthGenerator.next())
console.log(monthGenerator.next())
console.log(monthGenerator.next())
console.log(monthGenerator.next())
console.log(monthGenerator.next())
console.log(monthGenerator.next())
console.log(monthGenerator.next())
console.log(monthGenerator.next())
console.log(monthGenerator.next())
console.log(monthGenerator.next())
console.log(monthGenerator.next())
console.log(monthGenerator.next())
console.log(monthGenerator.next())
console.log(monthGenerator.next().value)
console.log(monthGenerator.next().value)
console.log(monthGenerator.next().value)
console.log(monthGenerator.next().value)
console.log(monthGenerator.next().value)
console.log(monthGenerator.next().value)
console.log(monthGenerator.next().value)
console.log(monthGenerator.next().value)
console.log(monthGenerator.next().value)
console.log(monthGenerator.next().value)
console.log(monthGenerator.next().value)
console.log(monthGenerator.next().value)
console.log(monthGenerator.next().value)
console.log(monthGenerator.next().value)
console.log(monthGenerator.next().value)
console.log(monthGenerator.next().value)
console.log(monthGenerator.next().value)
console.log(monthGenerator.next().value)
console.log(monthGenerator.next().value)
console.log(monthGenerator.next().value)

//イテレータ
let numbers = {
  *[Symbol.iterator](){
    for(let n = 1; n <= 10; n++){
      yield n
    }
  }
}

for(let a of numbers){
  console.log(a)
}

let allNumbers = [...numbers]
console.log(allNumbers);

let [one, two, three, four, ...rest] = numbers
console.log(one);
console.log(four);

const strarray = ['a', 'b', 'c', 'd']
let [iti, ni, ...resta] = strarray

//ジェネリックの宣言(1)
type Filter = {
  <T>(array: T[], f:(item: T) => boolean):T[]
}
let filter: Filter = (array, f) => {
  let result: typeof array = []
  array.forEach((value)=>{
    if(f(value)){
      result.push(value)
    }
  })
  return result
}
//メソッド宣言の時点で型を指定していないためどっちでもOK
//メソッドを呼び出すときに型がバインドされる
const filterResult = filter([1, 2, 3], (item) => item > 3)
const filterResult2 = filter(['a', 'b', 'c'], (item) => item == 'a')

//ジェネリックの宣言(2)
type Filter2<T> = {
  (array: T[], f:(item: T) => boolean): T[]
}
let filter2: Filter2<number> = (array, f) => {
  let result: typeof array = []
  array.forEach((value)=>{
    if(f(value)){
      result.push(value)
    }
  })
  return result
}
//メソッドを宣言するときに型がバインドされる
const filter2Result = filter2([1, 2, 3], (item) => item > 3)
//↓これはダメ
//const filter2Result2 = filter2(['a', 'b', 'c'], (item) => item == 'a')

//ジェネリックの宣言(3)
function filter3<T>(array: T[], f: (item:T) => boolean): T[]{
  let result: typeof array = []
  array.forEach((value)=>{
    if(f(value)){
      result.push(value)
    }
  })
  return result
}
//メソッドを呼び出すたびに型がバインドされる
const filter3Result = filter3([1, 2, 3, -1, 4, -9, 5], (item) => item > 0)
const filter3Result2 = filter3<number>([1, 2, 3, -1, 4, -9, 5], (item) => item > 0)

//型エイリアスのジェネリック型
type Sample<T, U> = {
  prop1: T
  prop2: U
  prop3: string
}

//型エイリアスはジェネリック型の引数が必要
let sample:Sample<number, boolean> = {
  prop1: 1,
  prop2: true,
  prop3: 'aaa'
}