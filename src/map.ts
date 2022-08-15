//Record型はマップ型を使って実装されている
let nextDay2: {[K in Weekday]: Day} = {
  Mon: 'Tue',
  Tue: 'Wed',
  Wed: 'Thu',
  Thu: 'Fri',
  Fri: 'Sat'
}

//マップ型はRecord型よりも強力
type Account = {
  id: number
  isEmployee: boolean
  notes: string[]
}
//省略可能な新しいAccount型を作成
type OptionalAccount = {
  [K in keyof Account]?: Account[K]
}
//null許容にする
type NullableAccount = {
  [K in keyof Account]: Account[K] | null
}
//読み取り専用な新しいAccount型を作成
type ReadonlyAccount = {
  readonly [K in keyof Account]: Account[K]
}
//書き込み可能にする
//マイナス演算子はマップ型でのみ使用可能な特別な演算子
//readonlyは+readonlyということだが普通はreadonlyとだけ書く
type Account2 = {
  -readonly [K in keyof ReadonlyAccount]: Account[K]
}
//必須にする
type Account3 = {
  [K in keyof OptionalAccount]-?: Account[K]
}

//組み込みマップ型
type map1 = Record<Weekday, Day>
type map2 = Partial<Account>
type map3 = Required<OptionalAccount>
type map4 = Readonly<Account>
type map5 = Pick<Account, 'id' | 'isEmployee'>