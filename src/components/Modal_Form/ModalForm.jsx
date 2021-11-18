import React, {useState} from 'react';

import SignupForms from './SignupForms';
import SignupFormsSuccess from './SignupFormsSuccess';

 const ModalForm =() => {
  const [formIsSumbmitted, setFormIsSumbmitted] = useState(false)
  const submitForm = () =>
  {setFormIsSumbmitted(true);};
  return (
    <div>
      {!formIsSumbmitted ? <SignupForms submitForm ={submitForm}/> :
      <SignupFormsSuccess />}
      
    </div>

)
}
export default ModalForm