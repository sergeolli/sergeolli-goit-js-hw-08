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

function onFormSubmit (e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STOREG_KEY);
    if (formData) {
       console.log(formData) 
    }; 
};


function popularTextarea() {
    const saveValueInput = JSON.parse(localStorage.getItem(STOREG_KEY));
    if (saveValueInput) {
        refs.formTextarea.value = saveValueInput.message || ''
        refs.formInput.value = saveValueInput.email || '' 
    };
};
   
 

