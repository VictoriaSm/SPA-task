var el = document.querySelector('main');

var pageContent = {};
var scriptFlag = {};

function addScript( path ) {
    var script = document.createElement('script');
    script.src = 'assets/js/controllers/' + path;
    document.body.appendChild(script);
}

function Page( url ) {
    this.url = '/spa/app/views/' + url;
}

Page.prototype.load = function (path, pathScript) {
    if(!path){
        return console.error(404);
    }
    VT.send( "GET", this.url, {}, errorHandler, render );

    function render(res){
        el.innerHTML = res;
        addScript(pathScript);
        scriptFlag[path] = true;
        pageContent[path] = res;
    }

    function errorHandler(code, error) {
        console.error(code.error, error);
    }
};

Page.prototype.show = function (path, func) {
    el.innerHTML = pageContent[path];
    if ( scriptFlag[path] === true ) {
        window[func]();
    }
};