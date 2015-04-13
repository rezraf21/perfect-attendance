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
<<<<<<< HEAD
>>>>>>> 081ed8de3fe7e44dad81e35670d431cf7c51aac4
=======
>>>>>>> 0ed1e1613840c219c5bfc9f2ff36b083ca58a3ad
>>>>>>> e67883aafadc51c5d507500948c81482005f6e36
=======
    var table = document.querySelector('.pa-instructors table');

    PA.createScheduleTable(table);
>>>>>>> ace77f5b49b5eea7982a5ce9586a222a60f025f5
    PA.createInstructorSelect(select);
<<<<<<< HEAD
>>>>>>> 93c7e588f2431e694e17b68020e4bdd62b2496fd
=======

    var findSchedule = function (instructorId) {
      var instructorSchedule = [];
      PA.schedule.forEach(function (schedule) {
        if (schedule.instructorId == instructorId) {
          instructorSchedule.push(schedule);
        }
      });
      return instructorSchedule;
    };

    var scheduleForDay = function (schedule, day) {
      switch (day) {
      case 'M':
      case 'W':
      case 'Th':
      case 'F':
      case 'S':
        return schedule.filter(function (sched) {
          return sched.day.indexOf(day) > -1;
        });
      case 'T':
        return schedule.filter(function (sched) {
          if (sched.day.indexOf('Th') > -1) {
            var noTh = sched.day.substring(sched.day.indexOf('Th'), -1);
            return noTh.indexOf(day) > -1;
          } else {
            return sched.day.indexOf(day) > -1;
          }
        });
      default:
        return [];
      }
    };

    select.addEventListener('change', function () {
      var instructorId = select.value;
      var instructorSchedule = findSchedule(instructorId);
      var days = ['M', 'T', 'W', 'Th', 'F', 'S'];
      days.forEach(function (day) {
        var daySched = scheduleForDay(instructorSchedule, day);
        if (!daySched.length) {
          return;
        }
        PA.getTimeSlots().forEach(function (time) {
          var sched = daySched.filter(function (sched) {
            return sched.timeFrom == time;
          })[0];
          console.log(sched);
        });
      });
    });
>>>>>>> 748cf4f7c1b7cefc1e46908b23e1c39d17fbf227
  };
})();
