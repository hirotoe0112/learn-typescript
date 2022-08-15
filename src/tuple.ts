//number | boolean | string
let tapuru = [1, 2, true, 'aa']
//constアサーションで型に制約をかける
let tapuru2 = [1, 2, true, 'aa'] as const
//constやreadonlyを避けたいという場合
function tuple<
  T extends unknown[]
>(
  ...ts: T
): T {
  return ts
}
//配列ではなく、number, number, stringで型が固定される
let tapuru3 = tuple(1, 2, 'a')