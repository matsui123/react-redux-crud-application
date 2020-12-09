import {READ_EVENTS} from '../actions'
import _ from 'lodash'

//stateは値を持っていないので初期値を代入
//最初に作ったinitialstateを代入
//Reducer すべての分岐処理が書かれている関数
export default (events = {} ,action) => {
  switch(action.type){
    case READ_EVENTS:
    //lodashとmapKeysを使って配列をオブジェクトに変換している
      return _.mapKeys(action.responce.data,'id')
    default:
      return events
  }
}
