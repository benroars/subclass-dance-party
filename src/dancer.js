// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  //console.log(this);
  //this.step = this.prototype.step;
  this.step();
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  //console.log(this);
};

//makeDancer.prototype = Object.create(makeDancer.prototype);
//makeDancer.prototype.constructor = makeDancer;

makeDancer.prototype.step = function() {
  //console.log(this);
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  
  this.$node.css(styleSettings);
};

makeDancer.prototype.alignLeft = function() {
  //console.log('asdfas');
  this.$node.css({'position': 'absolute', 'left': '0'});
};

makeDancer.prototype.alignBottom = function() {
  
};

makeDancer.prototype.calculate = function(dancerArr) {
 // var node = dancerArr[0].$node[0];
  //var node = $('.b');

 //  var collision = function ($div1, $div2) {
 //    var x1 = $div1.offset().left;
 //    var y1 = $div1.offset().top;
 //    var h1 = $div1.outerHeight(true);
 //    var w1 = $div1.outerWidth(true);
 //    var b1 = y1 + h1;
 //    var r1 = x1 + w1;
 //    var x2 = $div2.offset().left;
 //    var y2 = $div2.offset().top;
 //    var h2 = $div2.outerHeight(true);
 //    var w2 = $div2.outerWidth(true);
 //    var b2 = y2 + h2;
 //    var r2 = x2 + w2;
        
 //    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
 //      return false;
 //    }
    
 //    return true;
 //  };

 //  // window.setInterval(function() {
 //  //   if (collision($('.a'), node)) {
 //  //     console.log('collided');
 //  //     node.hide();
 //  //   }
 //  // }, 200);

 //  for (var i = 0; i < dancerArr.length; i++) {
 // //   console.log(dancerArr[i]);
 //    var node = $(dancerArr[i].$node[0]);
 //    window.setInterval(function() {
 //      if (collision($('.a'), node)) {
 //        console.log('collided');
 //        node.hide();
 //      }
 //    }, 200);
 //  }
};