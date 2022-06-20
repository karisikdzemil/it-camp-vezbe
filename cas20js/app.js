//Primitive data types:

//string:
// "a234821390sadjlsakd"
//number:
// 25
//boolean:
// true , false

// +
// -
// *
// /
// **
// %
// https://www.w3schools.com/js/js_arithmetic.asp

// console.log(true && true)
// console.log(true && false)
// console.log(false&&true)
// console.log(false && false)

// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

//https://www.w3schools.com/js/js_operators.asp

//https://www.youtube.com/watch?v=FSs_JYwnAdI&list=PL0vfts4VzfNixzfaQWwDUg3W5TRbE7CyI&index=2
//https://www.youtube.com/watch?v=DHjqpvDnNGE

// unos1 = prompt("Enter your num1: ");
// unos2 = prompt("Enter your num2: ");

// if (unos1 > unos2) {
//   console.log("Welcome!");
// }

// unos = prompt("Enter your num1: ");

// if (unos % 2 === 0) {
//   console.log("broj je paran!");
// } else {
//   console.log("broj je neparan!");
// }

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(false));
// console.log(Boolean(""));
// console.log(Boolean(null));

// unos = prompt("Enter your num1: ");

// if (unos >= 0) {
//   console.log("broj je pozitivan!");
// } else {
//   console.log("broj je negativan!");
// }

// unos = prompt("Enter your num1: ");

// if (
//   (unos % 100 === 0 && unos % 400 === 0) ||
//   (unos % 100 !== 0 && unos % 4 === 0)
// ) {
//   console.log("broj prestupan!");
// } else {
//   console.log("broj nije prestupan!");
// }

//DOmaci uneeti broj bodova ucenika i ispisati ocenu ucenika.
//0-20 bodova - 1
//21-40 bodova - 2
//41-60 bodova - 3
//61-80 bodova - 4
//81-100 bodova - 5

// unos = Number(prompt("Enter your num1: "));

// if (unos <= 20) {
//   console.log("Ocena: 1");
// }
// if (unos > 20 && unos <= 40) {
//   console.log("Ocena: 2");
// }

// if (unos > 40 && unos <= 60) {
//   console.log("Ocena: 3");
// }
// if (unos > 60 && unos <= 80) {
//   console.log("Ocena: 4");
// }

// if (unos > 80 && unos <= 100) {
//   console.log("Ocena: 5");
// }

// unos = Number(prompt("Enter your num1: "));

// if (unos > 9) {
//   console.log("unos je veci od 9");
// } else if (unos > 5) {
//   console.log("unos je veci od 5");
// } else if (unos > 1) {
//   console.log("unos je veci od 1");
// } else {
//   console.log("unos je manji od 1");
// }

// pocetna = Number(prompt("Enter your pocetna: "));
// krajnja = Number(prompt("Enter your krajnja: "));

// for (i = pocetna; i <= krajnja; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// pocetna = Number(prompt("Enter your pocetna: "));
// krajnja = Number(prompt("Enter your krajnja: "));

// for (i = pocetna; i <= krajnja; i++) {
//   console.log(i ** 2);
// }

// kolicina = Number(prompt("Enter your krajnja: "));
// sum = 0;
// for (i = 0; i < kolicina; i++) {
//   unos = Number(prompt("Enter your number: "));
//   sum += unos;
// }

// console.log(sum);

// kolicina = Number(prompt("Enter your krajnja: "));

// str = "";
// for (i = 0; i < kolicina; i++) {
//   str += "*";
//   console.log(str);
// }

// kolicina = Number(prompt("Enter your krajnja: "));

// for (i = 1; i <= kolicina; i++) {
//   str = "";
//   for (j = 1; j <= i; j++) {
//     str += i;
//   }
//   console.log(str);
// }

// a = "daris";

// console.log(a.length);
// console.log(a.toUpperCase());
// console.log(a.toLowerCase());

// "Hello World"
//  012345678910

// a = "Hello World";

// console.log(a[0]);

// console.log(a.slice(0, 5));

// text = "Please Microsoft visit Microsoft!";

// newText = text.replace("Microsoft", "W3Schools");

// console.log(text);
// console.log(newText);

// text = "Hello" + " " + "World!";

// a = "nesto";
// e = "World!";
// text = "Hello".concat(" ", e, a);
// console.log(text);

// text1 = "      Hello World!      ";
// text2 = text1.trim();

// console.log(text1);

// console.log(text2);

// kolicina = Number(prompt("Enter your krajnja: "));

// str = "";

// space = "";

// for (i = 1; i < kolicina; i++) {
//   space += " ";
// }

// for (i = 1; i <= kolicina; i++) {
//   str += "* ";
//   console.log(space + str + space);
//   space = space.slice(1);
// }

// kolicina = Number(prompt("Enter your krajnja: "));

// for (i = 1; i <= kolicina; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log(i);
//   }
// }

// kolicina = Number(prompt("Enter your krajnja: "));

// broj = "";
// sum = 0;

// for (i = 1; i <= kolicina; i++) {
//   broj += 1;
//   sum += parseInt(broj);
// }

// console.log(sum);

// sifra = "daris123";

// unos = prompt("Enter your password: ");

// while (sifra !== unos) {
//   console.log("Wrong password!");
//   unos = prompt("Wrong password,Enter your password: ");
// }

// console.log("++++++++++++++++");
// console.log("You are logged in!");

// random = Math.round(Math.random() * 100);

// unos = parseInt(prompt("Unesite broj"));

// while (unos !== random) {
//   console.log("Wrong number");

//   if (unos > random) {
//     unos = parseInt(prompt("Pokusajte opet, broj is too high"));
//   } else {
//     unos = parseInt(prompt("Pokusajte opet, broj is too low"));
//   }
// }

// console.log("Bravo");

// unos = parseInt(prompt("Unesite broj"));
// sum = 0;

// while (unos >= 0) {
//   sum += unos;
//   unos = parseInt(prompt("Unesite opet broj"));
// }

// console.log(sum);

// kod = "END";
// unos = prompt("Enter your name: ");

// while (kod !== unos) {
//   console.log(unos);
//   unos = prompt("Enter your name: ");
// }

// while (true) {
//   unos = prompt("Enter your name: ");
//   if (unos === "END") {
//     break;
//   }
//   console.log(unos);
// }

// brojac = 0;

// while (brojac < 100) {
//   console.log(brojac);
//   brojac++;
// }

// kolicina = Number(prompt("Koliko vam treba neparnih: "));
// pronadjeno = 0;
// broj = 1;

// while (pronadjeno !== kolicina) {
//   if (broj % 2 === 1) {
//     pronadjeno++;
//     console.log(broj);
//   }
//   broj++;
// }

// numbers = [3, 5, 10, 21, 42, 22, 1];
// sum = 0;

// for (i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log("Suma je: " + sum);

// numbers = [3, 5, 10, 21, 42, 22, 1];
// unos = parseInt(prompt("Unesite broj: "));
// founded = false;

// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] === unos) {
//     founded = true;
//     break;
//   }
// }

// if (founded) {
//   console.log("Broj je pronadjen");
// } else {
//   console.log("Broj nije pronadjen");
// }

// numbers = [3, 5, 10, 21, 42, 22, 1];
// maxNum = numbers[0];
// minNum = numbers[0];

// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] > maxNum) {
//     maxNum = numbers[i];
//   }
//   if (numbers[i] < minNum) {
//     minNum = numbers[i];
//   }
// }

// console.log("Najveci broj je: " + maxNum);
// console.log("Najmanji broj je: " + minNum);

// numbers = [3, 5, 10, 21, 42, 22, 1];
// first = numbers[0];
// second = numbers[0];

// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] > first) {
//     first = numbers[i];
//   }
//   if (numbers[i] > second && numbers[i] < first) {
//     second = numbers[i];
//   }
// }

// console.log("Drugi najveci je", second);

// numbers = [3, 5, 10, 21, 42, 22, 1];
// maxNum = numbers[0];
// minNum = numbers[0];

// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] > maxNum) {
//     maxNum = numbers[i];
//   }
//   if (numbers[i] < minNum) {
//     minNum = numbers[i];
//   }
// }

// console.log("Ralika je", maxNum - minNum);

// numbers = [1, 2, 3, 4, 5, 65, 7, 8, 9, 77, 10];

// for (num of numbers) {
//   if (num === 65 || num === 77) {
//     console.log(num);
//     break;
//   }
// }

// numbers = [1, 2, 3];

// console.log(numbers[5]);
// console.log(numbers.length);
// console.log(numbers);

// numbers.push(Number(prompt("Unesite broj")));

// console.log(numbers);

// numbers = [1, 2, 3];

// console.log(numbers);

// numbers.pop();

// console.log(numbers);

// numbers = [1, 2, 3];
// console.log(numbers);

// a = numbers.shift();
// console.log(a);
// console.log(numbers);

// numbers = [1, 2, 3];
// console.log(numbers);

// numbers.unshift(5);
// console.log(numbers);

// arr1 = [1, 20, 3, 50];
// arr2 = [];

// for (el of arr1) {
//   arr2.unshift(el);
// }
// console.log(arr1);
// console.log(arr2);
// kolicina = Number(prompt("Koliko vam treba el: "));
// arr = [];

// for (i = 0; i < kolicina; i++) {
//   arr.push(Number(prompt("Unesite el: ")));
// }

// console.log(arr);

// myColor = ["Red", "Green", "White", "Black"];
// str = myColor[0];
// for (i = 1; i < myColor.length; i++) {
//   str += "+" + myColor[i];
// }

// console.log(str)

// str = "The Quick Brown Fox";
// res = "";

// for (i = 0; i < str.length; i++) {
//   if (i % 2 === 0) {
//     res += str[i].toUpperCase();
//   } else {
//     res += str[i].toLowerCase();
//   }
// }

// console.log(res);

// arr = [42, 25, 56, 47, 32];

// parni = [];
// neparni = [];
// for (el of arr) {
//   if (el % 2 === 0) {
//     parni.push(el);
//   } else {
//     neparni.push(el);
//   }
// }

// console.log("Parni su: ", parni);
// console.log("Neparni su: ", neparni);

// =========== domaci======

// unos = Number(prompt("unesite broj"));
// console.log(unos);
// arr = [0, 2, 5, 4, 6, 8];
// min = "-" ;
// for(i = 0; i < arr.length; i++){
//   console.log(arr[i]);
//   if(arr[i] % 2 === 0){
//     arr += min;
//   }
// } 
// console.log(arr)  

// unos = Number(prompt("unesi broj da bi video je li paran ili nije"));

// broj = [0, 2, 5, 4, 6, 8];

// parni = [];
// neparni = [];
// crt = "-"
// for (el of broj){
//   // parni.push(crt)
//   if(el % 2 === 0){
//     parni.push(el, crt)
//   }else{parni.push(el)}
// }
// console.log("parni su", parni)
// console.log("neparni su", neparni)


// broj = [0, 2, 5, 4, 6, 8];
// parni = [];
// neparni = [];
// crt = "-"
// for (i = 0; i < broj.lenght; i++){
//   console.log(broj++)
// }

// niz = ['novi pazar', 'beograd', 'sombor', 'nis', 'valjevo'];

// for (index = 0; index < niz.length; index++){
//   grad = niz[index];
//   duzinaNaziva = grad.length;
//   console.log(grad, duzinaNaziva);
// }
// console.log("-------------------------")
// niz = ['novi pazar', 'beograd', 'sombor', 'nis', 'valjevo'];
// for(let grad of niz){
//     let duzinaNaziva = grad.length
//     console.log(grad, duzinaNaziva);
    
// }

// unos = Number(prompt("unesi broj bodova"));

// if(unos <= 20){
//   console.log("dobio si jedan")
// }if(unos >= 21 && unos <= 41){
//   console.log("dobio si dva")
// }if(unos >= 40 && unos <= 61){
//   console.log("dobio si tri")
// }if (unos >= 60 && unos <= 80){
//   console.log("dobio si cetiri")
// }if(unos >= 81 && unos <= 100){
//   console.log("dobio si pet")
// }

// unos = Number(prompt("unesite broj redova"));
// sum = "";
// for(i = 0; i < unos; i++){
//   sum += "*";
//   console.log(sum)
// }

// broj = [0, 2, 5, 4, 6, 8];
// parni = [];
// neparni = [];
// crt = "-"
// for (i = 0; i < broj.length; i++){
//   console.log(broj)
//   if(broj.length % 2 === 0){
//     broj[i] += crt
    
//   }
// }

// function sum(a, b) {
//   console.log("Zbir je: ", a + b);
// }

// sum(3, 7);

// sum(10, 2);

// sum(Number(prompt("Unesite broj")), 1);

// function findLargest(arr) {
//   max = arr[0];
//   for (el of arr) {
//     if (el > max) {
//       max = el;
//     }
//   }

//   console.log("Najveci broj je: ", max);
// }

// findLargest([1, 2, 7, 3]);

// console.log("1000lines of code");

// findLargest([1, 2, 3, 4, 5, 6, 7, 8]);

// console.log("asd".includes("b"));

// function checkIsAnagram(a, b) {
//   isAnagram = true;
//   if (a.length !== b.length) {
//     isAnagram = false;
//   }
//   for (char of a) {
//     if (!b.includes(char)) {
//       isAnagram = false;
//     }
//   }
//   if (isAnagram) {
//     console.log("Anagram");
//   } else {
//     console.log("Not anagram");
//   }
// }

// checkIsAnagram("spare", "peers");

// function calculateAverage(a, b, c) {
//   console.log("Average is : ", (a + b + c) / 3);
// }

// calculateAverage(1, 2, 3);

// function matrix(n) {
//   for (i = 0; i < n; i++) {
//     str = "";
//     for (j = 0; j < n; j++) {
//       str += i;
//     }
//     console.log(str);
//   }
// }

// matrix(10);

// DOMACIIIIII

// function arr (a, b, c){
//   e = 0;
//   e = a -  b + c
//   console.log(e)
// }
// arr(10, 15, 20);

//  VEZBA

// unos = Number(prompt("unosite negativne brojeve"));
// for (i = 0; i < unos; i++){
//   if (unos % 2 != 0){
//     unos = Number(prompt("unosite negativne brojeve"));
//     console.log(unos)
//   }
// }

// a = "END"
// unos = (prompt("unesite vase ime"));
// while (a != unos){
//   console.log(unos)
//   unos = (prompt("unesite vase ime"));
// }
// while(true){
//   unos = (prompt("unesite vase ime"));
//   if (unos === "END"){
//     // console.log("uspeo si")
//     break;
//   }
//   console.log(unos)
// }

// arr = [22, 12, 32, 54, 65, 20, 77];

// for (i = 0; i < arr.length; i++){
//   console.log(arr[i])
//   if (arr[i] === 65){
//     console.log("u nizu je pronadjen broj 65")
//   } if (arr[i] === 77){
//     console.log("u nizu je pronadjen broj 77")
//   }
// }

// arr = [0, 2, 5, 6, 4, 7, 8];
// num = 0;
// pet = 0
// for (i = 0; i < arr.length; i++){
//   num = arr[i]
//   console.log(num)
//   if(num % 2 === 0){
//     num
//   }
// }

// arr = [1, 2, 5, 6, 4, 7, 8];
// min = "-"
// console.log(arr);
// for (i = 0; i < arr.length; i++){
//   if(arr[i] % 2 === 0){
//     arr[i] += min
//     console.log(arr)
//   }
// }

// function ab (dy, sy){
//  x = dy - sy - sy
//  console.log(x)
// }
// ab(60, 25);

// function sum (a){
//   for(i = 0; i < a; i++){
//     if (i % 2 !== 0){
//       console.log(i)
//     } 
//   }
// }
// sum(15);

// function sum (a, b){
// a.toLoweCase
// b.toLoweCase
// if( a === b){
//   console.log(1)
// }
// }
// sum("a", "b")

// function nem (){
// sum = "";
// unos = Number(prompt("unesi broj redova"));
// for(i = 0; i < unos; i++){
//     sum += "*"
//     console.log(sum)
// }
// }   

// nem();

//  trodimenzi

// b = 20;
// for (i = 0; i < b; i++){
//     i++
//     console.log(i)
// }
// b = 20;
// for (i = 0; i <= b; i++){
//     // console.log(i)
//     if (i % 5 === 0 ){
//         console.log(i)
//     }
// }

// sum = ""
// unos = Number(prompt("unesite broj redova"))
// for (i = "*"; i < unos; i++){
//     sum += i
//     console.log()
// }

// function num (start, limit){
//     for (i = start; i <= limit; i++){
//     if (i % start === 0){
//         console.log(i)
//     }
        
//     }

// }
// num(4, 10)

// niz = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     ];

//     // niz = [
//     //     [2, 3, 6],
//     //     [1, 5, 9],
//     //     [4, 7, 8],
//     // ]

//     for (i = 0; i < niz.length; i++){
//         for (j = 0; j < 3; j++){
//             // console.log(niz[i][j])
//             console.log(niz[i][j])
//         }
//     }

// niz = [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9],
//         ];
//         n = niz.length;
//         for (i = 0; i < n / 2; i++){
//             for(j = i; j < n - i - 1; j++){
//                 tmp = niz[i][j];
//                 console.log(tmp[])
//                 console.log(tmp)
               
//             }
//         }
// function rotateCounterClockwise(a){
//     var n=a.length;
//     for (var i=0; i<n/2; i++) {
//         for (var j=i; j<n-i-1; j++) {
//             var tmp=a[i][j];
//             a[i][j]=a[j][n-i-1];
//             a[j][n-i-1]=a[n-i-1][n-j-1];
//             a[n-i-1][n-j-1]=a[n-j-1][i];
//             a[n-j-1][i]=tmp;
//         }
//     }
//     return a;
// }

// arr = [2, 4, 45, 23, 34, 22, 10, 18, 50, 28, 11, 80, 85,
//      34, 63, 265, 235, 240, 876, 124, 289, 328];
// function abs (arr){
//     for (i = 0; i < arr.length; i++){
//         // console.log(arr[i])
       
//         if (arr[i] % 2 === 0){
//             console.log(arr[i])
//         }
//     }
// }
// abs(arr)

// pal = "anavolimilovana"
// function palindrome (string){
//     len = pal.length
// for (i = 0; i < len; i++){
//     // console.log(i)
    
// }
// if(string[i] != string[len - 1 - i]){
//     console.log("ovo je palindrom")
// }else{console.log(nije)}
// }
// palindrome();

// unos = Number(prompt("unesite broj redova"));

// sum = ""
// tab = "  "

// for (i = 0; i < unos; i++){
// sum += "*"
// sum += tab
// for (j = 0;j < unos; j++ ){
//     sum -= tab
// }
// console.log(sum)
// }

// arr = [3, 9, 1, 27, 54, 23];


// mojaF = (e, i, a) => {
//     console.log(e)
//     a = 0;
//     a + e
//     console.log(a)
// }
// arr.forEach(mojaF)

// arr = [0, 1, false, 2, undefined, '', 3, null];


// for (i = 0; i < arr.length; i++){
//     console.log(arr[i])

// }

// mojaF = (e) => {
//     console.log(e)
//     if (e != Number){
        
//     }
// }
// arr.forEach(mojaF)

// arr = [1, 2, 3, 1, 2];
// arr2 = [];
// mojaF = (e) => {
//     console.log(e)
//     if (e === 2 && 1){
//         arr.shift(e)
//     }
// }
// arr.forEach(mojaF)

// function simpleMultiplication (number){
//     if (number % 2 === 0){
//         number * 8
//         console.log(number)
//     }else { number * 9 
//     console.log(number)}
// }
// simpleMultiplication (20)

// function fake(x){
//     str = ""
//     for ( el of x){
//         if ()
//     }
// }

// str = "hello!";
// str1 = "hello"
//  for ( i = 0; i < str.length; i++){
//      console.log(str[i])
//      if (str[i] !== ){
//          str[i].pop()
//      }
//  }

// num =  2;
// for (i = 0; i < navigator; i++){
//     if (num < n ){
//         num ** 2
//         console.log(num)
//     }
// }

// function hello(){
//     a = "hello world"
//     console.log(a)
// }
// hello()

// function hello(){
//     a = "hello world"
//     console.log(a)
// }
// hello()   
// arr = [2, 4, 6, 8, 10, 18, 3, 5, 7];
// arr_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// nel = 0;
// i = 0;
// arr.forEach(vis)
// arr_2.forEach(vis)
// function vis (arr){
//     console.log(arr)
//     if(arr % arr_2[i] === 0){
//         arr_2[i].push(nel)
//     }
// }
// vis();
// console.log("--------")
// console.log(arr_2[

// data = [1, true, "", "daris", false, 23, null, undefined, 123, 0, 77];

// arr = data.filter((el) => {
//     return el
// })
// console.log(arr)

// data = [1, true, "", "daris", false, 23, null, undefined, 123, 0, 77];

// arr = data.filter((el) => {
//     return !el
// })
// console.log(arr)

// data = [3, 6, 8, 2, 9];

// arr = data.filter((el) => {
//     return el > 5
// })
// console.log(arr)

// data = ["dog", "wolf", "by", "family", "eaten", "camping"];

// arr = data.filter((el) => {
//     return el.length >= 5
// })
// console.log(arr)

// data = ["dog", "wolf", "by", "family", "eaten", "camping"];

// arr = data.filter((el) => {
//     return el.length <= 5
// })
// console.log(arr)

// data = [2, 5, 100]
// arr = data.map((el) => {
//     return el * 2   
// })
// console.log(arr)

// data = [2, 5, 100]
// arr = data.map((el) => {
//     return String(el)   
// })
// console.log(arr)

// data = ["dog", "wolf", "by", "family", "eaten", "camping"];

// arr = data.filter((el) => {
//     return 
// })
// console.log(arr)

// data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr = data.every((el) => {
//     return el % 2
// })
// console.log(arr)

// data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr = data.every((el) => {
//     return el > 0
// })
// console.log(arr)

// array iteration domaci ////////////////////////

// arr = [2, 3, 5, 6, 1, 7, 8 , 9, 98];
// a = 2;
// b = 4;

// function mojaF (i, v){
//     if (arr.length % a === 0){
//         console.log("broj je deljiv sa dva ");
//     }else if(arr.length % b === 0){
//         console.log("broj je deljiv sa tri")
//     }
// }
// arr.forEach(mojaF)

// arr = [1, 2, 3, 4];

// mojaF = (e, i, a) => {
//   console.log(e, "je na indexu:", i);
//   console.log(a);
// };

// for (i = 0; i < arr.length; i++) {
//   mojaF(arr[i], i, arr);
// }

// arr.forEach(mojaF);

// arr = [3, 9, 1, 27, 54, 23];

// arr.forEach((el) => {
//   console.log(el);
// });

// data = [1, 2, 3, 1, 2];

// arr = [];

// data.forEach((el) => {
//   if (el !== 1 && el !== 2) {
//     arr.push(el);
//   }
// });

// console.log(arr);

// str = "";
// sum = "*"
// unos = Number(prompt("unesite br. redova"))
//  for (i = 0; i < unos; i++){
//     str += sum;

//  }

// library = [
//     {
//         author: 'bil gates',
//         title: 'the road a head',
//         readingStatus:true
//     },
//     {
//         author: 'steve jobs',
//         title: 'walter isaacson',
//         readingStatus:true
//     },
//     {
//         author: 'bil gates',
//         title: 'jlknklknlkn',
//         readingStatus:false
//     }
// ]
// library.forEach(el => {
//     console.log(el.author, ":", el.readingStatus)
// });
// arr = [2, 4, 6, 7, 8, 9, 19, 20, 10, 4];

// function myF (arr){

// }

// library = [
//         {
//             author: 'bil gates',
//             title: 'the road a head',
//             readingStatus:true
//         },
//         {
//             author: 'steve jobs',
//             title: 'walter isaacson',
//             readingStatus:true
//         },
//         {
//             author: 'bil gates',
//             title: 'jlknklknlkn',
//             readingStatus:false
//         }
//     ]
//     library.forEach(element => {
//         console.log(library.author, ":", library.readingStatus)
//     });

// arr = [2, 4, 6, 7, 8, 9, 19, 20, 10, 4];
// a = 0
// arr.forEach(bet)


// function bet (el, i, njk){
//     arr[i] = a
//     console.log(a)
// }
// ukupno = 0;
// sum1 = 0
// for (i = 0; i < arr.length; i++){
//     // console.log(arr[i])
//     if (i++){
//         sum1 += arr[i] 
//     }
//     console.log(sum1)
// }   

// sum1 = arr[1] + arr[0] + arr[2] + arr[3]
// console.log(sum1)

// primitivni po vrednosti / referentni po referenci////
//BITNOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

// console.log("duekdwnfoewfnkfonkfewofwekf")

// function num (n, s){
//     str = 6;
//     str_2 = "*";
//     for (el of str){
//         console.log(el)
//     }
// }
// num()

// a = [2, 4, 5, 6 ,7 ,8 ,9];
// b = a;
// a.push(43)
// console.log(b)

// car = {
//   type: "Fiat",
//   model: "500",
//   color: "white",
//   price: 10000,
//   equipment: ["ABS", "Air Conditioner", "Parking Sensor"],
//   year: 2003,
//   hp: 120,
//   drive: () => {
//     console.log("You started driving");
//   },
//   startOn: () => {
//     console.log("You started engine");
//   },
// };

// car2 = {
//   type: "Fiat",
//   model: "500",
//   color: "white",
//   price: 10000,
//   equipment: ["ABS", "Air Conditioner", "Parking Sensor"],
//   year: 2003,
//   hp: 120,
//   drive: () => {
//     console.log("You started driving");
//   },
//   startOn: () => {
//     console.log("You started engine");
//   },
// };

// console.log(car == car2);

// a = [1, 2, 3];

// b = a;

// a.push(4);

// console.log(a);
// console.log(b);

// a = [1, 2, 3];

// b = [1, 2, 3];

// console.log(a == b);

// console.log("DARiasss");

// function digitize(n) {
//     //123
//     //[3,2,1]
  
//     arr = [];
  
//     str = n.toString();
//     for (el of str) {
//       arr.unshift(parseInt(el));
//     }
//     return arr;
// }


// function reverse (b){
//     arr = [];
//     str = b.toString
//     for ( el of str){
//         arr.unshift(parseInt(el))
//     }
//     console.log(arr)
// }
// reverse(112) 

// function reverse (bet){
//     str = 123;
//     str1 = str.toString;
//     arr = [];
//     for ( el of str){
//         arr.unshift(el)
//     }
//     console.log(arr)
// }
// reverse();

// a = [1, 2, 3];
// zbir = 0
// i = 0
// while ( i < a.length){
//     zbir += + a[i]
// }
// console.log(zbir)
// file = ("https://jsonplaceholder.typicode.com/users")

//  fetch (file).then((res) => {
//     console.log(res)
//  })
//  .catch ((err) => {
//     console.log(err)
// })

// let str = "dobro dosli na cw";
// for (i = 0; i < str.length + 1; i++){
//    console.log(i)
// }

// myPromise = new Promise ((resolve, reject) => {
//     num = Math.random() * 10;

//     if (num > 5){
//         resolve(num);
//     }
//     reject(`broj je manji od 5 (${num})`);
// });

// myPromise
// .then((res) => {
//     console.log("promise je resolved", res);
// })
// .catch((err) => {
//     console.log(err);
// });
// JSON obaveznoooo

// console.log("hello");

// function nbYear(p0, percent, aug, p) {
//   console.log("djemsi")
//   p0 = 1000;
//   aug = 50;
//   percent = 0.02
//   p = 0;
//   p = p0 + p0 * percent + aug
  
//   console.log(p)
// }
// nbYear()

// function arrayDiff(a, b) {
//   a = [1, 2, 3, 3, 3];
//   b = [2, 5, 3];
//   arr = []
//   for(el of a && el of b){
//     // console.log(el)
 
//   }
//   for (el of b){
//     // console.log(el)
// }

// if (a.length !== b.length){
//     arr.push(el)
// } console.log(arr)
// }
// arrayDiff()


// function sekiDiff(a,b){
//     a=[1,4,6,8];
//     b=[2,4,7];
//     for (let i = 0; i < a.length; i++) {
//         for (let j = 0; j < b.length; j++) {
//             if (a[i]!==b[j]) {
//                 console.log(a[i]);
//             }
            
//         }
        
//     }
// }

// sekiDiff()

// str = "ooxx"

// for (el of str){
//     console.log(str[el])
// }

// function oddOrEven(array) {
//     arr = [2, 4, 6, 7, 8, 4, 12, 3, 7, 10, 1, 10, 11];
//     sum = 0;
//     for (el of arr){
//         console.log(el)
//         sum = sum + el
//     }
//     console.log(sum)
//     if (sum % 2 === 0){
//         console.log(true)
//     }else{console.log(false)}

//   }
//   oddOrEven()

// function findShort(s){
// arr = ["djemsi", "cuk", "jeste", "ok"];
// //   console.log(arr)
//   for(el of arr){
//     console.log(el.length)
//     a = [arr[0]];
//     if (a < el.length){
//         a = arr[el]
//         console.log(a)
//     }
//   }
// }
// findShort()

// function minMax(arr){
//     return [0,0]; 
//     arr = [1, 2, 3, 4, 5];
//     for (el of arr){
//         console.log(el)
//     }
//   }
//   minMax()
 
// let a = prompt("unesite text");
// const div = document.getElementById("js")
// console.log(a)
// div.innerText = a;

click = document.getElementById("dzemil");

function mojaF(){
    console.log("color")
   
    if (on){
         click.style.backgroundColor = "red"
    }{ click.style.backgroundColor = "blue"}
   
    
}
