import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    formTextarea: document.querySelector('.feedback-form textarea'),
    formInput:document.querySelector('.feedback-form input'), 
};

const formData = {};

const STOREG_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.formTextarea.addEventListener('input', throttle(onFormInput, 500));

refs.form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value; 
    localStorage.setItem(STOREG_KEY, JSON.stringify(formData))
    console.log(formData)   
});


popularTextarea();

function onFormSubmit (e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STOREG_KEY);
}

function onFormInput(e) {
    const valueInput = e.target.value;
    localStorage.setItem(STOREG_KEY, valueInput);
  
}  

function popularTextarea() {
    const saveValueInput = localStorage.getItem(STOREG_KEY);
    if (saveValueInput) {
        const toData = JSON.parse(localStorage.getItem(STOREG_KEY));
        refs.formTextarea.value = toData.message;
        refs.formInput.value = toData.email;
        console.log(saveValueInput);
    };
    
};