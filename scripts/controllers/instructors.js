(function () {
  'use strict';

  // expose the controller to the global scope
  PA.instructorsCtrl = function () {
    // imports
    var PA = window.PA;

    var module = this;
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
    PA.createInstructorSelect(select);
>>>>>>> 93c7e588f2431e694e17b68020e4bdd62b2496fd
  };
})();
