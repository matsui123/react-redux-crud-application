import axios from 'axios'
export const READ_EVENTS = 'READ_EVENTS'
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
