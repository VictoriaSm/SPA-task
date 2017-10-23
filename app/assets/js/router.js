function Router(routes) {
    this.routes = routes;
    window.onhashchange = this.hashChanged.bind(this);
    this.hashChanged();
}

Router.prototype.hashChanged = function () {
    if (window.location.hash.length > 0) {
        var pageName = window.location.hash.substr(1);
        var page = this.routes[pageName];
        if ( pageContent[pageName] === undefined ) {
            page.load(pageName);
        } else page.show(pageName);
    }
};
