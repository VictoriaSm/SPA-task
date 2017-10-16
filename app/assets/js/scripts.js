/*Task 1.1 --> Task 4*/
function getHomeNames( arrHome ) {
    return arrHome.map(function(item){
        return item.homeName;
    });
}

/*Task 2 --> Task 5*/
var select = document.getElementById('count');
var inputEdit = document.getElementById('editHomeName');

select.addEventListener("click", function ( event ) {
    var index = event.target.selectedIndex;

    inputEdit.value = event.target[index].innerHTML;

});


/*Task 3*/
var btnAdd = document.querySelector('.btn-add');
var inputAdd = document.getElementById('addHomeName');

btnAdd.addEventListener('click', function () {
    var option = document.createElement('option');

    if ( inputAdd.value == '' || inputAdd.value.replace(/\s/g,'') == '' || inputAdd.value.length < 3 ) {
        inputAdd.classList.add('error');
        btnAdd.classList.add('error');
    }
    else {
        option.text = inputAdd.value;
        select.appendChild(option);

        inputAdd.value = '';
    }
});

/*Task 4*/
var homes = getHomeNames( home );

homes.forEach(function (item) {
    var option = document.createElement('option');

    option.value = item;
    option.innerHTML = item;
    select.appendChild(option);
});

/*Task 5 --> Task 7*/
var btnEdit = document.querySelector('.btn-edit');

btnEdit.addEventListener( 'click', function() {
    var textOption = select.options[select.selectedIndex];

    if ( inputEdit.value == '' || inputEdit.value.replace(/\s/g,'') == '' || inputEdit.value.length < 3 ) {
        inputEdit.classList.add('error');
        btnEdit.classList.add('error');
    }
    else {
        textOption.innerHTML = inputEdit.value.trim();
        inputEdit.value = textOption.innerHTML;
    }
});


/*Task 7*/
inputEdit.onkeypress = function () {
    inputEdit.classList.remove('error');
    btnEdit.classList.remove('error');
};

inputAdd.onkeypress = function () {
    inputAdd.classList.remove('error');
    btnAdd.classList.remove('error');
};







