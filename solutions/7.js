//Finn summen av alle positive heltall mellom 0 og 1000 som er har 7 som en
//primtallsfaktor, der det reverserte tallet også har 7 som en primtallsfaktor.
//For eksempel teller 259 da en får 952 om en reverserer sifrene og begge disse
//tallene har 7 som en primtallsfaktor.

console.time('Ran for');

let result = 0;

for (var i = 0; i <= 1000; i++) {
  if(i % 7 == 0) {
    let reversed = parseInt(i.toString().split('').reverse().join().replace(/,/g, ''));
    if(reversed > 0 && 0 <= 1000 && reversed % 7 == 0) {
        result += i;
    }
  }
}

console.log(`Answer: ${result}`);
console.timeEnd('Ran for');
