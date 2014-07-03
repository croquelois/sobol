var SobolSequenceGenerator = require('./sobol');

var sobol = new SobolSequenceGenerator(2);

var nbInSobol = 0;
var nbInRnd = 0;
var nbTot = 0;
for(var k = 0;k<100;k++){
  for(var i = 0;i<100;i++){
    var x = sobol.nextVector();
    if((x[0]*x[0] + x[1]*x[1]) < 1) nbInSobol++;
    x[0] = Math.random();
    x[1] = Math.random();
    if((x[0]*x[0] + x[1]*x[1]) < 1) nbInRnd++;
    nbTot++;
  }
  console.log(4*nbInSobol/nbTot,4*nbInRnd/nbTot);
}