import React , {Component} from 'react';
import {connect} from 'react-redux';
//import {postEvent} from '../actions';
import { Link } from 'react-router-dom';

//Componentを継承したクラスはコンポーネントとして何度も利用出でき、タグとして使うことができる
class EventsNew extends Component{
  render(){
    return (
      <React.Fragment>
      <h1>hi</h1>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => ({ events: state.events})
//const mapDispatch  = ({ readEvents})
//ここ何
export default connect(null,null)(EventsNew)
