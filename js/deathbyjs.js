//STEP 1
// function alphabetical(newString){
//     let result=Array.from(newString);
//     result.sort();
//     return(result.join(''));
// }
// alert(alphabetical('webmaster'));

//STEP 2
// function vowelsCount(newString){
//     let result=newString.split(" ");
//     let newArr=[];
//     for (let word of result){
//         let firstLetter = word.charAt(0).toUpperCase();
//         word=word.slice(1);
//         newArr.push(firstLetter.concat(word)) 
//     }
//     return(newArr.join(' '));
// }
// alert(vowelsCount( 'the quick brown fox'));

//STEP 3
// function vowelsCount(newString){
//     const vowels =['a', 'e', 'i', 'o', 'u', 'y'];
//     let number=0;
//     let result=Array.from(newString);
//     for (let v of result){
//         if(vowels.includes(v)){number+=1}
//     }
//     return(number);
// }
// alert(vowelsCount('webmaster'));
// alert(vowelsCount( 'The quick brown fox'));

//STEP 4
// function generate(specified){
//     const list =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'g', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't' ,'u' ,'v', 'w', 'x' ,'y' ,'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G' ,'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q','R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3' ,'4' ,'5', '6', '7' ,'8' ,'9' ];
//     let result =[]
//     for(let i=0; i<specified; i++){
//         let helper= Math.floor(Math.random() * list.length)+1 ;
//         result.push(list[helper]);
//     }
//     return(result.join(''));
// }
// alert(generate(9));
// alert(generate(5));


//STEP 5

function Longest_Country_Name(myList){
    let result=myList[0]
    for( let country of myList){
        if(country.length>result.length){
            result=country
        }
    }

    return(result);
}
alert(Longest_Country_Name(["Australia", "Germany", "United States of America"]));


