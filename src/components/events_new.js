import React , {Component} from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm} from 'redux-form'
import {postEvent} from '../actions';
import { Link } from 'react-router-dom';

//Componentを継承したクラスはコンポーネントとして何度も利用出でき、タグとして使うことができる
class EventsNew extends Component{
  //以下のconstructorでonsubmitメソッドが使えるようになる
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  //入力される値がわたってくる
  renderField(field){
    //input入力値,touched一回でもフォームに触ったらtouchedになる
     const {input, label, type, meta: {touched, error}} = field
     {touched && error && <span>{error}</span>}
     return(
       <div>
        <input {...input} placeholder={label} type={type} />
       </div>
     )
  }

  async onSubmit(values){
    await this.props.postEvent(values)
    this.props.history.push('/')
  }
  render(){
    //handleSubmitはrenderが実行されたときの関数
    //pristineは何もないときに非活性にするボタン
    //submitting submit押されたらtrue
    const {handleSubmit,pristine,submitting} = this.props
    return (
      //svbmitボタンが押されたら下のメソッド実行
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>
        <div>
          <input type="submit" value="Submit" disabled={pristine || submitting} />
          <Link to="/">Cancel</Link>
        </div>
      </form>
    )
  }
}
const validate = values =>{
  const errors = {}
  if(!values.title) errors.title = "Enter a title please"
  if(!values.body) errors.body = "Enter a body please"
  return errors
}
const mapDispatchToProps = ({postEvent})
//formを使うためにReduxformでdecorateしなければいけない
export default connect(null,mapDispatchToProps)(
  reduxForm({validate, form: 'eventNewForm'})(EventsNew)
)
