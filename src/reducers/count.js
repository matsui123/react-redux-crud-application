import {INCLEMENT, DECLEMENT} from '../actions'

const initialState = {value : 0}

//stateは値を持っていないので初期値を代入
//最初に作ったinitialstateを代入
//Reducer すべての分岐処理が書かれている関数
export default (state = initialState ,action) => {
  switch(action.type){
    case INCLEMENT:
      return {state.value+1}
    case DECLEMENT:
      return {state.value-1}
  }
}
