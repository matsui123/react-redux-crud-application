import React,{Component} from 'react';



class App extends Component {
  render (){
  return <button type="button" onClick={() => {window.alert("hi")}} />;
  }
}

export default App;
