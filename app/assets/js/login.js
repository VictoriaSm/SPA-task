function formLogin() {
    var login = document.querySelector('.login');
    var password = document.querySelector('.password');
    var status = false;

    var hash = md5(password.value);

    var user = JSON.parse(localStorage.getItem('user'));

    if ( login.value !== user.login ) {
        login.classList.add('error');
        login.nextElementSibling.innerHTML = 'Incorrect login.';
        status = false;
    } else {
        login.classList.remove('error');
        status = true;
    }

    if ( hash !== user.password ) {
        password.classList.add('error');
        password.nextElementSibling.innerHTML = 'Incorrect password.';
        status = false;
    } else {
        password.classList.remove('error');
        user.password = password.value;
        status = true;
    }

    return status;
}