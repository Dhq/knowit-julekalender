//Gitt at vi har n par parenteser, hvor mange kombinasjoner av balanserte parenteser (dvs alle åpne parenteser er lukket) kan en lage?
//Eksempel: Gitt n=3, har vi følgende kombinasjoner som gir balanserte parenteser:
//"((()))", "(()())", "(())()", "()(())", "()()()" Altså fem ulike måter.
//Hvor mange velformede kombinasjoner finnes det for n = 13?
console.time('Ran for');
let combinations = 0;
let max = 3;

for (var i = 1; i <= max; i++) {
  combinations += max * i;
}

console.log(`Possible combinations with ${max} paranthesis is ${combinations}`);







console.timeEnd('Ran for');
