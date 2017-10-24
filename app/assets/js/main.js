var r = new Router(
    {
        login: {
            template: new Page('login.html'),
            controller: 'login.js'
        },
        register: {
            template: new Page('register.html'),
            controller: 'register.js'
        },
        edit: {
            template: new Page('editProfile.html'),
            controller: 'edit.js'
        },
        homes: {
            template: new Page('homes.html'),
            controller: 'homes.js',
            execFunc: 'homesList'
        }
    }
);
