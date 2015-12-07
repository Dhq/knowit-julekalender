//Finn summen av alle positive heltall mellom 0 og 1000 som er har 7 som en
//primtallsfaktor, der det reverserte tallet også har 7 som en primtallsfaktor.
//For eksempel teller 259 da en får 952 om en reverserer sifrene og begge disse
//tallene har 7 som en primtallsfaktor.

let result = 0;
let found = [];

for (var i = 0; i <= 1000; i++) {
  let has7 = primeFactorization(i).find((x) => { return x === 7 });
  if(has7) {
    let reversed = parseInt(i.toString().split('').reverse().join().replace(/,/g, ''));
    let reversedHas7 = primeFactorization(reversed).find((x) => { return x === 7 });
    if(reversed > 0 && 0 <= 1000 && reversedHas7) {
      console.log(i);
        result += i;
    }
  }
}

console.log(`Resultat: ${result}`);

function primeFactorization(num){
  var root = Math.sqrt(num),
  result = arguments[1] || [],  //get unnamed paremeter from recursive calls
  x = 2;

  if(num % x){//if not divisible by 2
   x = 3;//assign first odd
   while((num % x) && ((x = x + 2) < root)){}//iterate odds
  }
  //if no factor found then num is prime
  x = (x <= root) ? x : num;
  result.push(x);//push latest prime factor

  //if num isn't prime factor make recursive call
  return (x === num) ? result : primeFactorization(num/x, result) ;
}
