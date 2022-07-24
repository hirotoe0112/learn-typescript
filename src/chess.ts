type Color = 'Black' | 'White'
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

//チェスのゲーム
class Game{
  private pieces = Game.makePieces()

  private static makePieces(){
    return [
      //キング
      new King('White', 'E', 1),
      new King('Black', 'E', 8),
      //クイーン
      new Queen('White', 'D', 1),
      new Queen('Black', 'D', 8),
      //ビショップ
      new Bishop('White', 'C', 1),
      new Bishop('White', 'F', 1),
      new Bishop('Black', 'C', 8),
      new Bishop('Black', 'F', 8),
    ]
  }
}

//チェスの駒
//直接インスタンス化されないようにabstractで抽象クラスにしている
abstract class Piece{
  protected position: Position
  constructor(
    private readonly color: Color,
    file: File,
    rank: Rank
  ){
    this.position = new Position(file, rank)
  }

  //駒の移動
  moveTo(position: Position){
    this.position = position
  }

  //サブクラスに対してcanMoveToを実装することを強制
  //抽象クラスを実装するときは抽象メソッドも実装しないといけない
  abstract canMoveTo(position: Position): boolean
}

//駒の位置
class Position{
  constructor(
    private file: File,
    private rank: Rank
  ){}

  //指定の駒との位置を計算
  distanceFrom(position: Position){
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
    }
  }
}

//6種類の駒
class King extends Piece{
  canMoveTo(position: Position): boolean {
    let distance = this.position.distanceFrom(position)
    return distance.rank < 2 && distance.file < 2
  }
}
class Queen extends Piece{
  canMoveTo(position: Position): boolean {
    return true
  }
}
class Bishop extends Piece{
  canMoveTo(position: Position): boolean {
    return true
  }
}
class Knight extends Piece{
  canMoveTo(position: Position): boolean {
    return true
  }
}
class Rook extends Piece{
  canMoveTo(position: Position): boolean {
    return true
  }
}
class Pawn extends Piece{
  canMoveTo(position: Position): boolean {
    return true
  }
}