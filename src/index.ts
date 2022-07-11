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