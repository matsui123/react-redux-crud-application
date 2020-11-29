import React,{Component} from 'react';



/*class App extends Component {
  render (){
  return <button type="button" onClick={() => {window.alert("hi")}} />;
  }
}*/
const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return (<div>Meow!</div>)
}
export default App;
