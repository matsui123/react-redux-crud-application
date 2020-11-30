import React,{Component} from 'react';



/*class App extends Component {
  render (){
  return <button type="button" onClick={() => {window.alert("hi")}} />;
  }
}*/
const App = () => {
  const profiles = [
    {name:"hanako",age:11},
    {name:"takashi",age:20}
  ]

  return (
    <div>
    profiles.map((profile) => {
      return <User name={profile.name} age={profile.age}/>
    })
  }
    </div>
  )
}

const User = (props) => {
  return (<div>I am {props.name} ,and {props.age}years old</div>)
}
export default App;
