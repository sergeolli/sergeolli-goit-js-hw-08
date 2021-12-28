import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    formTextarea: document.querySelector('.feedback-form textarea'),
    formInput: document.querySelector('.feedback-form input'), 
};

const formData = {};

const STOREG_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);

popularTextarea();

refs.form.addEventListener('input', throttle(e => {
    
    formData[e.target.name] = e.target.value; 
    localStorage.setItem(STOREG_KEY, JSON.stringify(formData)) 
 
},500));

function onFormSubmit(e) {
    e.preventDefault()  
    localStorage.removeItem(STOREG_KEY) 
    if (refs.formTextarea.value === '' || refs.formInput.value === '' ) {
        alert('All fields must be completed!');   
    } else {
        formData.email = refs.formTextarea.value
        formData.message = refs.formInput.value
        e.currentTarget.reset();
        console.log(formData)
         formData.message = ''
       formData.email =''
    }    
};

function popularTextarea() {
    const saveValueInput = JSON.parse(localStorage.getItem(STOREG_KEY));
    if (saveValueInput) {
        refs.formTextarea.value = saveValueInput.message || ''
        refs.formInput.value = saveValueInput.email || ''
    } 
};
   
 

