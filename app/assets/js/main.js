const r = new Router(
    {
        login: new Layout(new Page('login.html')),
        '#default': new Page('register.html'),
    },
    document.querySelector('main')
);
