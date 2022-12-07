/* Thank you for your interest in LoanGlide. We are excited to welcome you to the take-home test portion of the process.

Write a simple program that can merge two strings or 
sorts the characters in a string without using the functions (like sort), 
build 5 letter words with at most 2 vowels etc


Please add the following emails to your private Gitlab/GitHub project
administrant@optimhire.com

Please complete the project within 5 business days (a calendar week) and fill out the rest of this form.
We will get back to you for the next steps after we evaluating your project.

Thank you and good luck !
LoanGlide */

function sort(arr) {
    arr = arr.split("");
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr.join("");
}

function mergeTwoStrings(stringOne, stringTwo){
    return stringOne+stringTwo
}


//merge two strings
let mergedString = sort(mergeTwoStrings("zxyw","dbcaopqr"))


function buildFiveLetterWords(){
    let mergedAry = mergedString.split("")
    let finalAry = []
    for (let i = 0; i < mergedAry.length; i++) {
        let tmpAry = []
        while (tmpAry.length<5) {
            tmpAry.push(mergedAry[0]) 
            mergedAry = removeItemFromAry(mergedAry, mergedAry[0])
        }
        finalAry.push(tmpAry)
    }
    finalAry.push(mergedAry)
    

    let finalString = ''
    for (let i = 0; i < finalAry.length; i++) { 
        for (let j = 0; j < finalAry[i].length; j++) { 
            finalString+=finalAry[i][j]
        }
        finalString+=' '   
    }
    return finalString.trim()
}

function removeItemFromAry(array, item){
    let index = array.indexOf(item);
    if (index > -1) { 
        array.splice(index, 1); 
    }else{
        return []
    }
    return array
}


let fiveLatterWords = buildFiveLetterWords();
console.log('fiveLatterWords',fiveLatterWords);




