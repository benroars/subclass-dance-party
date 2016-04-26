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
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );



    $('body').append(dancer.$node);

    window.dancers.push(dancer);
  });

  $('.alignLeft').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].alignLeft();
    }
  });

});

