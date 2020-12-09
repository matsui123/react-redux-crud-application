//reducerを統合する関数
import { combineReducers } from 'redux'
import events from './events'

//combineReducersに結合したい関数があれば、引数に何個も加えることで結合できる
export default combineReducers({ events })
