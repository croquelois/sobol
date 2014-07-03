#sobol

Sobol - Low discrepancy sequence 

##limitation

work with Node.js, but not directly from the browser

##goal

Create a low discrepancy sequence

##use:

```js
var sobol = new SobolSequenceGenerator(dim)
```
create a sobol generator of dimension 'dim'
dim: number of dimension of the serie

```js
var v = sobol.nextVector();
```
create a vector (of dimension 'dim')


##example

And now an amazing usefull example... 
how to found PI by MonteCarlo with a sobol sequence

```js
var SobolSequenceGenerator = require('sobol');
var sobol = new SobolSequenceGenerator(2);

var nbIn = 0;
var nbTot = 0;
for(var i = 0;i<1000;i++){
  var x = sobol.nextVector();
  if((x[0]*x[0] + x[1]*x[1]) < 1) nbIn++;
  nbTot++;
}
console.log(4*nbIn/nbTot);
```

it should give you 3.144
