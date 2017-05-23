var makeTeam2 = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeTeam2.prototype = Object.create(makeDancer.prototype);
makeTeam2.prototype.constructor = makeTeam2;

makeTeam2.prototype.oldStep = makeTeam2.prototype.step;
// makeTeam2.prototype.step = function() {
//   //$(".dancer").addClass("team2Dancer");
//   console.log(this.$node);
//   // this.$node.toggle();
// };

makeTeam2.prototype.step = function() {
  this.oldStep();
  this.$node.addClass('team2Dancer');
};