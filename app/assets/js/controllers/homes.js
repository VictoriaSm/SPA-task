homesList();

function homesList() {

    var homes = getHomeNames( homesObj );

    function getHomeNames( arrHome ) {
        return arrHome.map(function(item){
            return item.homeName;
        });
    }

// function getRoomNames( arrRoom ) {
//     var arr = arrRoom.map(function(item){
//         return item.rooms;
//     });
//
//     // var m = [];
//
//     return arr.forEach(function (item) {
//         var m = item.forEach(function (t) {
//             return t.roomName;
//         });
//         console.log(m);
//     });
// }

    var select = document.querySelector('#count');

    homes.forEach(function (item) {
        var option = document.createElement('option');

        option.value = item;
        option.innerHTML = item;
        select.appendChild(option);
    });

    var inputEdit = document.getElementById('editHomeName');

    select.addEventListener("click", function ( event ) {
        var index = event.target.selectedIndex;

        inputEdit.value = event.target[index].innerHTML;

    });

    var btnAdd = document.querySelector('.btn-add');
    var inputAdd = document.getElementById('addHomeName');

    btnAdd.addEventListener('click', function () {
        var option = document.createElement('option');

        if ( inputAdd.value === '' || inputAdd.value.replace(/\s/g,'') === '' || inputAdd.value.length < 3 ) {
            inputAdd.classList.add('error');
            btnAdd.classList.add('error');
        }
        else {
            option.text = inputAdd.value;
            select.appendChild(option);

            inputAdd.value = '';
        }
    });

    var btnEdit = document.querySelector('.btn-edit');

    btnEdit.addEventListener( 'click', function() {
        var textOption = select.options[select.selectedIndex];

        if ( inputEdit.value === '' || inputEdit.value.replace(/\s/g,'') === '' || inputEdit.value.length < 3 ) {
            inputEdit.classList.add('error');
            btnEdit.classList.add('error');
        }
        else {
            textOption.innerHTML = inputEdit.value.trim();
            inputEdit.value = textOption.innerHTML;
        }
    });

    inputEdit.onkeypress = function () {
        inputEdit.classList.remove('error');
        btnEdit.classList.remove('error');
    };

    inputAdd.onkeypress = function () {
        inputAdd.classList.remove('error');
        btnAdd.classList.remove('error');
    };

// var rooms =
//     getRoomNames( homesObj );

// rooms.forEach(function (t) {
//     console.log(t);
// });
}
