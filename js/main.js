 const frmInput = document.querySelector('.input-value')
 const frmBtn = document.querySelector('.input-button')

 const errorText = document.querySelector('.error-text')
 const successText = document.querySelector('.success')
 

 const FormSec = document.querySelector('.form form');

 FormSec.addEventListener('submit', (e)=>{
    e.preventDefault();

    if(frmInput.value === ''){
        errorText.classList.add('show');
        errorText.style.transition = 'all .5s ease';
        setTimeout(() => {
            errorText.classList.remove('show');
        },3000)
    }else{
        successText.textContent = frmInput.value;

        frmInput.value= '';
        successText.classList.add('show');
        errorText.classList.remove('show');
        setTimeout(() => {
            successText.classList.remove('show');
        },3000)
    }
 })