'use strict';
void function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const object = {
            email: 'email',
            firstName: 'firstName',
            lastName: 'lastName',
            nickname: 'nickname',
            password: 'password',
            option: 'option',
            message: 'message',
            file: 'file',
            terms: 'terms'
        }
        console.log(object);
    })
}()
