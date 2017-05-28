function addScore(scoreNum) {
  this.scores.push(scoreNum);
}

function averageScore() {
  var total = this.scores.reduce(function(base, next){
    return base + next;
  },0);
  return (total / this.scores.length).toFixed();
}

var ScoreInfo = function () {
  this.scores = [];
  this.addScore = addScore;
  this.averageScore = averageScore;
};

var myscore = new ScoreInfo();
myscore.addScore(79);
myscore.addScore(79);
myscore.addScore(75);
myscore.addScore(79);
myscore.addScore(79);
myscore.addScore(79);

console.log(myscore.averageScore());