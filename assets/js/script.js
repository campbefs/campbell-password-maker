// must adapt to multiple screen sizes

const generatePassword = () => {


  let passLength = 0;
  console.log(passLength);
  while ( passLength < 8 || passLength > 128) {
    passLength = prompt("What is the length of your password? (Please select a value between 8 and 128.)");
  }

  let characters = {};
  while (!Object.keys(characters).length) {
    console.log('char after', characters.length);
    characters.lowerCase = window.confirm('Would you like to include LOWERCASE characters?');
    characters.upperCase = confirm('Would you like to include UPPERCASE characters?');
    characters.numeric = confirm('Would you like to include NUMBERIC characters?');
    characters.specialChar = confirm('Would you like to include SPECIAL characters?');

    arrBool = Object.values(characters).map( x => x ? true : false);
    console.log('arrBool', arrBool.filter(Boolean))
    if (!arrBool.filter(Boolean).length) {
      alert("You must select at least one type of character for your password!");
      characters = {};
      console.log('char loop again', characters)
    }
  }

  

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const specialChar = [` `, `!`, `”`, `#`, `$`, `%`, `&`, `’`, `(`, `)`, `*`, `+`, `,`, `-`, `.`, 
`/`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, "]", "^", "_", '`', `{`, `|`, `}`, `~`];

const lowerCase = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, 
`q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`];

const upperCase = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, 
`R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`];

const numeric = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`];