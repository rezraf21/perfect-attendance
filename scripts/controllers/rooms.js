(function () {
  'use strict';

  // expose the controller to the global scope
  PA.roomsCtrl = function () {
    // imports
    var PA = window.PA;

    var myParagraph = document.createElement('p');
    myParagraph.innerHTML = 'This is a paragraph that is generated from the roomsCtrl!';
    this.mainView.appendChild(myParagraph);
    var select = document.querySelector('form > .pa-instructors-select');

    PA.getJSON('json/rooms.json', function (data) {
      var rooms = data.rooms;
      for (var i = 0; i < rooms.length; i++) {
        var option = document.createElement('option');
        option.innerHTML = rooms[i].roomNo;
        select.appendChild(option);
      }
    });
  };
})();
