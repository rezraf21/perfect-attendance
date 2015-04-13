(function () {
  'use strict';

  // expose the controller to the global scope
  PA.roomsCtrl = function () {
    // imports
    var PA = window.PA;

<<<<<<< HEAD
    var myParagraph = document.createElement('p');
    myParagraph.innerHTML = 'This is a paragraph that is generated from the roomsCtrl!';
    this.mainView.appendChild(myParagraph);
    var select = document.querySelector('forms > .pa-rooms-select');

    PA.getJSON('json/rooms.json', function (data) {
      var rooms = data.rooms;
      for (var i = 0; i < rooms.length; i++) {
        var option = document.createElement('option');
        option.innerHTML = rooms[i].roomNo;
        select.appendChild(option);
        
      }
    });
=======
    var module = this;
    var select = document.querySelector('.pa-rooms-select');
    PA.createRoomSelect(select);
<<<<<<< HEAD
>>>>>>> 081ed8de3fe7e44dad81e35670d431cf7c51aac4
=======
>>>>>>> 0ed1e1613840c219c5bfc9f2ff36b083ca58a3ad
>>>>>>> e67883aafadc51c5d507500948c81482005f6e36
  };
})();
