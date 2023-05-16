'use strict';
const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const object = {
        email: formData.get('email'),
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        nickname: formData.get('nickname'),
        password: formData.get('password'),
        option: formData.get('option'),
        message: formData.get('message'),
        file: formData.get('file'),
        terms: formData.get('terms')
    }
    console.log(object);
})