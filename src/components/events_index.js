import React , {Component} from 'react';
import {connect} from 'react-redux';
import {readEvents} from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';

//Componentを継承したクラスはコンポーネントとして何度も利用出でき、タグとして使うことができる
class EventsIndex extends Component{
//コンストラクタの次に呼び出される関数
  componentDidMount(){
    //readEventsという関数が外部のAPIに接続する
    this.props.readEvents()
  }

  renderEvents(){
    return _.map(this.props.events, event =>(
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }
  render(){
    return (
      <React.Fragment>
          <table>
              <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                  </tr>
              </thead>

              <tbody>
              {this.renderEvents()}
              </tbody>
          </table>

          <Link to= "/events/new">New Event</Link>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => ({ events: state.events})
const mapDispatch  = ({ readEvents})

export default connect(mapStateToProps,mapDispatch)(EventsIndex)
