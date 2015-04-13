(function () {
  'use strict';

  // expose the controller to the global scope
  PA.instructorsCtrl = function () {
    // imports
    var PA = window.PA;

    var module = this;
<<<<<<< HEAD
    var select = document.querySelector('form > .pa-instructors-select');
<<<<<<< HEAD

    PA.getJSON('json/instructor.json', function (data) {
      var instructors = data.instructors;
      for (var i = 0; i < instructors.length(); i++) {
        var option = document.createElement('option');
        option.innerHTML = instructors[i].instructorName;
        select.appendChild(option);
      }
    });
=======
=======
    var select = document.querySelector('.pa-instructors-select');
<<<<<<< HEAD
>>>>>>> 081ed8de3fe7e44dad81e35670d431cf7c51aac4
=======
>>>>>>> 0ed1e1613840c219c5bfc9f2ff36b083ca58a3ad
>>>>>>> e67883aafadc51c5d507500948c81482005f6e36
    PA.createInstructorSelect(select);
>>>>>>> 93c7e588f2431e694e17b68020e4bdd62b2496fd
  };
})();
