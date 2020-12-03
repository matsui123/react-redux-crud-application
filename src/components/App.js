import React , {Component} from 'react';
import {connect} from 'react-redux';
import {increment,decliment} from '../actions';

//Componentを継承したクラスはコンポーネントとして何度も利用出でき、タグとして使うことができる
class Counter extends Component{

  render(){
    const props = this.props;
    console.log(this.state)
    return (
      <React.Fragment>
      <div>value:{props.value}</div>
      <button onClick={props.increment}>+1</button>
      <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}
const mapState = state => ({ value: state.count.value})
const mapDispatch = dispatch =>({
  increment:() => dispatch(increment()),
  decrement:() => dispatch(decrement())
})

export default connect(mapState,mapDispatch)(App)
