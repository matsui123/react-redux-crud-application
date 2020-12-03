//reducerを統合する関数
import { combineReducers } from 'redux'
import count from './count'

//combineReducersに結合したい関数があれば、引数に何個も加えることで結合できる
export default combineReducers({ count })
