//actionとaction createrの実装
//actionとはtypeというキーを持つ属性のこと
export const INCLEMENT = 'INCLEMENT'
export const DECLEMENT = 'DECLEMENT'
//actioncreater actionを作業する関数

export const increment = () =>({
  type: INCLEMENT
})

export const decrement = () =>({
  type: DECLEMENT
})
