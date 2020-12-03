import React , {Component} from 'react';

const App = () =>  (<Counter></Counter>)

//Componentをしたクラスはコンポーネントとして何度も利用出でき、タグとして使うことができる
class Counter extends Component{
  //constructorはpropsを受け取ることができる
  constructor(props){
    super(props);
    this.state = {count:0};
  }
  handlePlusOne = () =>{
    console.log(this.state.count+1);
    //stateを変更したいときはsetStateメソッドを使う
    //setStateを使うとrenderメソッドが呼び出される
    const count1 = this.state.count;
    this.setState({count: this.state.count+1});

  }
  handleMinusOne = () =>{
    const count2 = this.state.count;
    this.setState({count: count2-1});
  }

  render(){
    console.log(this.state)
    return (
      <React.Fragment>
      <div>counter:{this.state.count}</div>
      <button onClick={this.handlePlusOne}>+1</button>
      <button onClick={this.handleMinusOne}>-1</button>
      </React.Fragment>
    )
  }
}


export default App;
