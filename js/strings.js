//STEP 1
// let name=prompt("Enter your name please");
// alert(name.length)

//STEP 2
// let name=prompt("Enter your name please");

// let number=parseInt(prompt(`Enter a number between 0 and ${name.length-1}`));
// if (number>=0 && number<=name.length-1){
//     alert(name.charAt(number));
// }
// else {
//     alert("Wrong number")
// }

//STEP 3
// let fname=prompt("Enter your first name please");
// let lname=prompt("Enter your last name please");
// let result = 'Your name is:'.concat(' ', fname, ' ', lname);
// alert(result);

//STEP 4
// let fox='The quick brown fox jumps over the lazy dog';
// let result = fox.indexOf("fox");
// alert(result);

//STEP 5
// let fox='The quick brown fox jumps over the lazy dog';
// let result = fox.lastIndexOf("fox");
// alert(result);

//STEP 6
// let name=prompt("Enter your name please");
// let fox='The quick brown fox jumps over the lazy dog';
// let indexFox = fox.indexOf("the lazy dog");
// let result = fox.slice(0, indexFox);
// alert(result.concat(name));

//STEP 7
// let word=prompt("Enter your word please");
// let fox='The quick brown fox jumps over the lazy dog';
// let position = fox.search(word);
// if (position>=0){
//     alert(true);
// }
// else {
//     alert(false)
// }

//STEP 8
// let old_string='The quick brown fox jumps over the lazy dog';
// let position = old_string.search("the lazy dog");
// let new_string = old_string.substring(position);
// alert(new_string.toUpperCase())

//STEP 9
// let fox=' THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ';
// alert(fox.trim().toLowerCase());

//STEP 10
let fox='the quick brown fox jumps over the lazy dog';
let firstLetter = fox.charAt(0).toUpperCase();
fox=fox.slice(1);
alert (firstLetter.concat(fox)) 