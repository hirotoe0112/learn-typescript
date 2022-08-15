type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
type Day = Weekday | 'Sat' | 'Sun'
let nextDay: Record<Weekday, Day> = {
  Mon: 'Tue',
  Tue: 'Wed',
  Wed: 'Thu',
  Thu: 'Fri',
  Fri: 'Sat'
}

//Keyの型をRecordの第一引数の型に、Valueの型をRecordの第二引数の型に制約する
let aaa: Record<'a', 'b'> = {
  'a': 'b'
}