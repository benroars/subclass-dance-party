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