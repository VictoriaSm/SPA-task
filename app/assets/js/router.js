function Router(routes) {
    this.routes = routes;
    window.onhashchange = this.hashChanged.bind(this);
    this.hashChanged();
}

Router.prototype.hashChanged = function () {
    if (window.location.hash.length > 0) {
        // if ( localStorage.getItem('authorized') === null || localStorage.getItem('authorized') === 0 ) {
        //     alert('You are not authorized');
        //     document.location.hash = "login";
        // }
        var pageName = window.location.hash.substr(1);
        var page = this.routes[pageName].template;
        if ( pageContent[pageName] === undefined ) {
            page.load(pageName, this.routes[pageName].controller);
        } else if ( this.routes[pageName].execFunc ) {
            page.show(pageName, this.routes[pageName].execFunc);
        } else page.show(pageName);
    }
};
