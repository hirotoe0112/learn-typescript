//Arrayのプロトタイプを拡張する
//インタフェースのマージを利用する
interface Array<T> {
  zip<U>(list: U[]): [T, U][]
}

Array.prototype.zip = function(list){
  return this.map((v, k) => [v, list[k]])
}

//このArrayの拡張を使うために、ユーザに読み込ませることを強制するには、
//tsconfig.jsonでzip.tsをプロジェクトから除外すれば良い