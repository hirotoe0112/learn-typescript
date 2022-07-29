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
