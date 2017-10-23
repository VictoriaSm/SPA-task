function Page( url ) {
    this.url = '/spa/app/views/' + url;
}

var el = document.querySelector('main');
var pageContent = {};

Page.prototype.load = function (path) {
    if(!path){
        return console.error(404);
    }
    VT.send( "GET", this.url, {}, errorHandler, render );

    function render(res){
        el.innerHTML = res;
        pageContent[path] = res;
    }

    function errorHandler(code, error) {
        console.error(code.error, error);
    }
};

Page.prototype.show = function (path) {
    el.innerHTML = pageContent[path];
};