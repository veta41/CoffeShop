
const validation = (values) => {

  let errors = {};
  
  if(!values.name){
    errors.name = "Имя обязательно"
  }
  
  
  if(!values.phone){
    errors.phone = "Требуется ввести номер телефона "
  }  else if(!/^\+380\d{3}\d{2}\d{2}\d{2}$/.test(values.phone)){
    errors.phone= "Проверьте правильность ввода телефонного номера "
  }
  
    return errors;
  };
  
  export default validation