import axios from 'axios'
export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENT = 'CREATE_EVENT'
const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'
//actioncreater actionを作業する関数
//actionが関数の起点になる
export const readEvents = () => async (dispatch) => {
  const responce = await axios.get('https://udemy-utils.herokuapp.com/api/v1/events?token=token123')
  //console.log(responce);
  //actionをreducerに渡すためdispatchメソッドを使用
  dispatch({type: READ_EVENTS, responce})
}
export const postEvent = (values) => async (dispatch) => {
  const responce = await axios.post('https://udemy-utils.herokuapp.com/api/v1/events?token=token123',values);
  //console.log(responce);
  //actionをreducerに渡すためdispatchメソッドを使用
  dispatch({type: CREATE_EVENT, responce})
}
