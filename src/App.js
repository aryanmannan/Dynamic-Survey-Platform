import formJSON from './formElement.json';
import { useState, useEffect } from 'react';
import Element from './components/Element';
import { FormContext } from './FormContext';
import './App.css'; // CSS file for styling
import Header from "./components/SurveyCreation/Header"
import Template from "../src/components/SurveyCreation/Template"
import Mainbody from "../src/components/SurveyCreation/Mainbody"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Formheader from '../src/components/SurveyCreation/Formheader'
import Centeredtabs from './components/SurveyCreation/Tabs';
import Question_form from './components/Question_form';

function App() {
  const [elements,setElements]=useState(null);  //default value is null
useEffect(()=>{       //to set the value of elements
  setElements(formJSON[0]) //accesing from formElement.json
}, []) //empty since we don't need any dependency here since we have just set the elements once

const {fields, page_label}=elements ?? {} // if there are no elements it becomes an empty object
  
const handleSubmit = (event) => {
    event.preventDefault();

    console.log(elements)
  }
  const handleChange = (id, event) => {
    const newElements = { ...elements }  //creating a copy of the elements because we don't want to change it
    newElements.fields.forEach(field => {
      const { field_type, field_id } = field; //going to check these for each fields
      if (id === field_id) {
        switch (field_type) {
          case 'checkbox':
            field['field_value'] = event.target.checked;
            break;

          default:
            field['field_value'] = event.target.value;
            break;
        }


      }
      setElements(newElements) //updating data with new elemnts
    });
    console.log(elements)
  }
  return (
    <FormContext.Provider value={{ handleChange }}>
      <Router>
        <Switch>
        <Route path="/form:id">
           <Formheader/>
           <Centeredtabs/>
           <Question_form/>
          </Route>
          <Route path="/">
          <Header/>
          <Template/>
          <Mainbody/>
          </Route>
        </Switch>
      </Router>

      <div className="App container">
        <h3>{page_label}</h3>
        <form>
          {fields ? fields.map((field, i) => <Element key={i} field={field} />) : null}
          <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>
        
      </div>
    </FormContext.Provider>
  );
}

export default App;



