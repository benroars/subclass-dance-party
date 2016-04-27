$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    window.dancers.push(dancer);
  });


  $('.addColorButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name2');

    var dancerMakerFunction = window[dancerMakerFunctionName];
    //console.log(dancerMakerFunction);
    // make a dancer with a random position
    
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    window.dancers.push(dancer);
  });

  $('.addMovingDancer').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name3');

    var dancerMakerFunction = window[dancerMakerFunctionName];
    //console.log(dancerMakerFunction);
    // make a dancer with a random position
    
    var dancer = new dancerMakerFunction(
  //    $('body').height() * Math.random(),
  //    $('body').width() * Math.random(),
     Math.floor(Math.random() * (580 - 100 + 1)) + 100,
     Math.floor(Math.random() * (680 - 100 + 1)) + 100,
      Math.random() * 1000
    );



    $('body').append(dancer.$node);

    window.dancers.push(dancer);
  });

  $('.alignLeft').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      //debugger;
      window.dancers[i].alignLeft();
    }
  });

  
  $('.addNyan').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name4');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    
    // make a dancer with a random position
    
    var dancer = new dancerMakerFunction(
  //    $('body').height() * Math.random(),
  //    $('body').width() * Math.random(),
     Math.floor(Math.random() * (650 - 100 + 1)) + 100,
     Math.floor(Math.random() * (750 - 100 + 1)) + 100,
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    window.dancers.push(dancer);
  });
Math.floor(Math.random() * (640 - 100 + 1)) + 100


  $('.alignLeft').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].alignLeft();
    }
  });


  $('.calculate').on('click', function(event) {
    window.dancers[0].calculate(window.dancers);
  });



});

