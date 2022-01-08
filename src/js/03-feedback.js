import throttle from 'lodash.throttle';

const refs = {
form: document.querySelector('.feedback-form'),
formTextarea: document.querySelector('.feedback-form textarea'),
formInput: document.querySelector('.feedback-form input'),  
};

const STOREG_KEY = 'feedback-form-state';

saveСheckValues();

refs.form.addEventListener('submit', onFormSabmit);
refs.form.addEventListener('input', throttle(onFormInput,500));

function onFormInput() {
    const email = refs.formInput.value 
    const message = refs.formTextarea.value
    const formDataSave = {
        email, message
    };
    localStorage.setItem(STOREG_KEY, JSON.stringify(formDataSave));
    //const formData = JSON.parse(localStorage.getItem(STOREG_KEY)); 
    //refs.formTextarea.value = formData.message
    //refs.formInput.value = formData.email
}

function onFormSabmit(e) {
    e.preventDefault();
    
    const allValues = {
        email: refs.formInput.value,
        message: refs.formTextarea.value
    };
    if (refs.formTextarea.value === '' || refs.formInput.value === '' ) {
     alert('All fields must be completed!');   
    } else {
        localStorage.removeItem(STOREG_KEY)
        console.log(allValues)
        e.currentTarget.reset();
     }   
}

function saveСheckValues() {
   const saveValueInput = JSON.parse(localStorage.getItem(STOREG_KEY));
   if (saveValueInput) {
       refs.formTextarea.value = saveValueInput.message 
       refs.formInput.value = saveValueInput.email 
   }    
};
    













//const refs = {
  //  form: document.querySelector('.feedback-form'),
   // formTextarea: document.querySelector('.feedback-form textarea'),
   // formInput: document.querySelector('.feedback-form input'), 
//};

//const formData = {} 
 
//const STOREG_KEY = 'feedback-form-state';
//popularTextarea();


//refs.form.addEventListener('submit', onFormSubmit);

//refs.form.addEventListener('input', throttle(e  =>  {
  //  formData[e.target.name] = e.target.value; 
  //  localStorage.setItem(STOREG_KEY, JSON.stringify(formData))
 //console.log(formData)
//}, 500));


//function onFormSubmit(e) {
  //  e.preventDefault()
   //     formData.email = refs.formInput.value || '' 
   //     formData.message = refs.formTextarea.value || ''
          
    //if (refs.formTextarea.value === '' || refs.formInput.value === '' ) {
    //    alert('All fields must be completed!');   
    //} else {
    //   localStorage.removeItem(STOREG_KEY)
     //   e.currentTarget.reset();
     //   console.log(formData)
      //  formData.message =  ''
      //  formData.email = '' 
 //   }   
      
//};

//function popularTextarea() {
  //  const saveValueInput = JSON.parse(localStorage.getItem(STOREG_KEY));
  //  if (saveValueInput) {
    //      refs.formTextarea.value = saveValueInput.message || ''
    //    refs.formInput.value = saveValueInput.email || ''
   // } 
    
//};
  
 

