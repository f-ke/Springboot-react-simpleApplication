import React, { Component } from 'react';
import{Formik, fieldset, Form, Field, ErrorMessage} from 'formik'
import moment from 'moment'
import TodoService from '../../api/todo/TodoService.js'
import AuthenticationService from './AuthenticationService.js'
class TodoComponent  extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            id : this.props.match.params.id,
            descrption:"ee",
            targetDate : moment(new Date()).format('YYYY-MM-DD')
            
            
        }
    }
    onSubmit=(value)=>{
       // console.log(value);
       let username = AuthenticationService.getUserLogin
       TodoService.updateTodo(username, this.state.id, {
           id:this.state.id,
           action:value.descrption,
           targetDate:value.targetDate

       }).then(()=>this.props.history.push('/todo'))
    }
    componentDidMount(){
        let username = AuthenticationService.getUserLogin
        TodoService.retriveTodo(username, this.state.id)
        .then(response =>{
            this.setState({
                descrption:response.data.action,
                targetDate:moment(response.data.targetDate).format('YYYY-MM-DD')
            })
        })
        .catch(error=>console.log(error))
        
    }
    validate =(value)=>{
        let error = {}
        if(!value.descrption){
            error.descrption = "please enter a description"
        }else if(value.descrption.length < 5){
            error.descrption= "decription should larger than 5 characters"
        }
        if(!moment(value.targetDate).isValid()){
            error.targetDate = "please enter a valid date"
        }
        return error
    }
    render() { 
        let {descrption,targetDate} = this.state
        
    return (<div>
         <h1> Todo Component {this.props.match.params.id}</h1>
        <div className= "container">
          
          <Formik initialValues={{descrption, targetDate}}
          onSubmit={this.onSubmit}
          validate={this.validate}
          validateOnChange={false}
          validateOnBlur={false}
          enableReinitialize={true}
          >
              {
                  (props)=>(
                      <Form >
                          <ErrorMessage component="div" name="descrption" className="alert alert-warning"></ErrorMessage>
                          <ErrorMessage component="div" name="targetDate" className="alert alert-warning"></ErrorMessage>
                          
                         <fieldset className="form-group">
                              <label>description</label>
                              <Field className="form-control" name = "descrption" type="text"></Field>
                          </fieldset> 
                          <fieldset className="form-group" >
                              <label>TargetDate</label>
                              <Field className="form-control" name = "targetDate" type="date"></Field>
                          </fieldset> 
                           
                          <button className="btn btn-primary" type = "submit">save</button>
                      </Form>
                   

                  )
              }
          </Formik>
        

    </div>
    </div>
         );
    }
}
 
export default TodoComponent ;