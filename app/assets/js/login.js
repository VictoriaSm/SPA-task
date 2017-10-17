function formLogin() {
    var userInfoLog = {
        login: document.querySelector('.login'),
        password: document.querySelector('.password')
    };
    var isValue = true;

    var hash = md5(userInfoLog.password.value);
    var userLog = JSON.parse(localStorage.getItem('user'));

    isCoincidence();
    
    function isCoincidence() {
        if (userInfoLog.login.value !== userLog.login) {
            userInfoLog.login.classList.add('error');
            userInfoLog.login.nextElementSibling.innerHTML = 'Incorrect login.';
            isValue = false;
        } else {
            userInfoLog.login.classList.remove('error');
            userInfoLog.login.nextElementSibling.innerHTML = '';
        }

        if (hash !== userLog.password) {
            userInfoLog.password.classList.add('error');
            userInfoLog.password.nextElementSibling.innerHTML = 'Incorrect password.';
            isValue = false;
        } else {
            userInfoLog.password.classList.remove('error');
            userInfoLog.password.nextElementSibling.innerHTML = '';
        }
    }

    return isValue;
}