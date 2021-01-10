// Assignment Code
var generateBtn = document.querySelector("#generate");


var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upper = ['A', 'B', 'D', 'C', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
 
var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

var special = ['!', '@', '#', '$', '%', '^', '&', '*'];
var passwordPool = [];
var textArea = document.querySelector("#thepassword");
var finalPassword = "";



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
// console.log(characterCount);

generateBtn.addEventListener("click",
    function () {

        var characterCount = parseInt(prompt("Your password needs to be more than 8 but less than 128 character. How many characters do you want your password to be?"))


        if (characterCount < 8 || characterCount > 128 || !characterCount) {
            do {
                if (!characterCount) { alert("please enter numeric value") }
                if (characterCount < 8 || characterCount > 128) { alert("Your password can't be less than 8 or more than 128 character, try again.") }
                var characterCount = parseInt(prompt("Your password needs to be more than 8 but less than 128 character. How many characters do you want your password to be?"))

            }
            while (characterCount < 8 || characterCount > 128 || !characterCount);
          

        }

        console.log(characterCount);


        var withSpecialChar = confirm("Click ok if you'd like special characters");
        var withUpperCase = confirm("Click Ok if you want upper case Characters");
        var withLowerCase = confirm("click Ok for lower case characters");
        var withNumberChar = confirm("Click ok if you want number characters");

       


        console.log(withSpecialChar)


        if (withSpecialChar) {
            for (i = 0; i < special.length; ++i) {
                passwordPool.push(special[i]);
            }
        }


        if (withUpperCase) {
            for (i = 0; i < upper.length; ++i) {
                passwordPool.push(upper[i]);
            }
        }

        if (withLowerCase) {
            for (i = 0; i < lower.length; ++i) {
                passwordPool.push(lower[i]);
            }
        }

        if (withNumberChar) {
            for (i = 0; i < number.length; ++i) {
                passwordPool.push(number[i]);
            }
        }


        console.log(passwordPool)

        // var allChoices = upper + lower + number + special;
        // allChoices = allChoices.split ("");
        // console.log(allChoices)
        // console.log(passwordPool)
        // create a function that runs this for loop characteraount amout of times

        for (var i = 0; i < characterCount; i++) {
            // var character = Math.floor(Math.random() * allChoices.length);
            // passwordPool += allChoices.substring(character, character++);
            finalPassword += passwordPool [Math.floor(Math.random()* passwordPool.length)];
            console.log(i);
            console.log(characterCount);
            console.log(characterCount);
            if (i + 1 == characterCount) {
                textArea.value = finalPassword;
                console.log(finalPassword);
                console.log(i);
            }
            console.log("character count", characterCount)
        }

    //  allChoices.value = passwordPool;
        //return the value of all values from the for loop
        // generateBtn.addEventListener("click",allChoices);

        // return password; document.querySelector("thepassword");
    })
    generateBtn.addEventListener("click", passwordPool);
