var user = {
    'login': '',
    'email': '',
    'password': '',
    'name': '',
    'age': ''
};

function formValidation() {
    // var login = document.querySelector('.login');
    // var email = document.querySelector('.email');
    // var password = document.querySelector('.password');
    // var confirmPassword = document.querySelector('.confirmPassword');
    var isValid = false;
    var hash;
    var userInfo = {
        login: document.querySelector('.login'),
        email: document.querySelector('.email'),
        password: document.querySelector('.password'),
        confirmPassword: document.querySelector('.confirmPassword')
    };

    // var validationConfig = {
    //     login: {
    //         required: true,
    //         whiteSpace: false,
    //         minLength: 6
    //     }
    // };

    isRequired(['login', 'email', 'password', 'confirmPassword']);

    function isRequired(keys) {
        // VT.obj_forEach( validationConfig, function (item, key){
        //     if(item.required) {
        //         userInfo[key].classList.add('error');
        //         userInfo[key].nextElementSibling.innerHTML = 'Required field';
        //         isValid = false;
        //     }
        // });

        keys.forEach(function(key){
            if ( userInfo[key].value === '' || userInfo[key].value.replace(/\s/g,'') === '' ) {
                userInfo[key].classList.add('error');
                userInfo[key].nextElementSibling.innerHTML = 'Required field';
                isValid = false;
            } else {
                userInfo[key].classList.remove('error');
                user.login = userInfo[key].value;
                isValid = true;
            }
        });
    }

    minLength(['login', 'password'], 6);

    function minLength(keys, length) {
        keys.forEach( function (key) {
            if ( userInfo[key].value.length < length ) {
                userInfo[key].classList.add('error');
                userInfo[key].nextElementSibling.innerHTML = 'Value is too short';
                isValid = false;
            }
        });
    }

    // if ( login.value === '' || login.value.replace(/\s/g,'') === '' ) {
    //     login.classList.add('error');
    //     login.nextElementSibling.innerHTML = 'Login is required.';
    //     status = false;
    // } else if ( login.value.length < 5 ) {
    //     login.classList.add('error');
    //     login.nextElementSibling.innerHTML = 'Login is too short.';
    //     status = false;
    // } else {
    //     login.classList.remove('error');
    //     user.login = login.value;
    //     status = true;
    // }
    //
    // if ( email.value === '' || email.value.replace(/\s/g,'') === '' ) {
    //     email.classList.add('error');
    //     email.nextElementSibling.innerHTML = 'Email is required.';
    //     status = false;
    // } else {
    //     email.classList.remove('error');
    //     user.email = email.value;
    //     status = true;
    // }
    //
    // if ( password.value === '' || password.value.replace(/\s/g,'') === '' || password.value.length < 5 ) {
    //     password.classList.add('error');
    //     password.nextElementSibling.innerHTML = 'Password is too short.';
    //     status = false;
    // } else {
    //     password.classList.remove('error');
    //     hash = md5(password.value);
    //     user.password = hash;
    //     status = true;
    // }
    //
    // if ( confirmPassword.value === '' || confirmPassword.value.replace(/\s/g,'') === '' || confirmPassword.value.length < 5 ) {
    //     confirmPassword.classList.add('error');
    //     confirmPassword.nextElementSibling.innerHTML = 'Required field.';
    //     status = false;
    // } else {
    //     confirmPassword.classList.remove('error');
    //     status = true;
    // }
    //
    // if ( confirmPassword.value !== password.value ) {
    //     confirmPassword.classList.add('error');
    //     confirmPassword.nextElementSibling.innerHTML = 'Password does not match.';
    //     status = false;
    // } else status = true;
    //
    // if ( status === true ) {
    //     user.name = document.querySelector('.name');
    //     user.age = document.querySelector('.age');
    //     localStorage.setItem('user', JSON.stringify(user));
    // }

    return isValid;

    // window.location = ''
}