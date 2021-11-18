/* eslint-disable no-unused-vars */
import React, {useState , useEffect} from 'react';
import { Button } from '..';
import validation from './validation';




const SignupForms = ({submitForm}) => {

 

  const [values, setValues] = useState({
    name: "",
    phone: ""
    
  });

  const [errors, setErrors] = useState({});

  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  
  const handleChange =(event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };


  const handleFormSubmit = (event) => {
     event.preventDefault();
     setErrors(validation(values));
     setDataIsCorrect(true);
     
  };

  useEffect(() => {
    if(Object.keys(errors).length === 0 && dataIsCorrect)
     {
      submitForm(true);
    }
  }, [dataIsCorrect, errors, submitForm]);


  

  return (
     <div className="container">
      <div className="app-wrapper">
         <div>
      <h2 className="title">Введите данные для подтверждения Вашего заказа</h2>
    </div> 



    <form className="form-wrapper">
      <div className="name">
        <label className="form_label">Имя</label>
        <input 
        className= "input" 
        type ="text" 
        name="name" 
        value ={values.name}
        onChange={handleChange}
        />
        {errors.name && <p className = 'error'>{errors.name}</p>}
      </div>
      <div className="phone">
        <label className="form_label">Телефон</label>
        <input className= "input"
         type ="phone"
          name="phone"
          value ={values.phone} 
          onChange={handleChange}
          />
          {errors.phone && <p className = 'error'>{errors.phone}</p>}
      </div>
      
      <div>
        <Button  className="submit" onClick={handleFormSubmit}>Отправить</Button>
      </div>
    </form>
      </div>
      </div>
  )
}

export default SignupForms