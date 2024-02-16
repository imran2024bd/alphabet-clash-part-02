// function play(){
//      // step-1: hide the home screen. to hide the screen add the class hidden to the home section
//      //     homeSection.classList.add('hidden');
//      //     // console.log(homeSection.classList)
     
//      const homeSection = document.getElementById('home-screen');
//      //  console.log(homeSection.classList);
//      homeSection.classList.add('hidden');

//      // show the playground
//      const playgroundSection = document.getElementById('play-ground');
//     //  console.log('playground section');
//     // console.log(playgroundSection.classList);
//     playgroundSection.classList.remove('hidden');
//     }


function handlekeyboardKeyUpEvent(event) {
    // console.log('button pressed. i am impressed !!!');
    const playerPressed = event.key;
    console.log('player Pressed :', playerPressed);
    // console.log(event.key);

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    // console.log(playerPressed , currentAlphabet);
    // to be lowercase of currentAlphabet
    const expectedAlphabet  = currentAlphabet.toLocaleLowerCase();
    console.log(playerPressed , expectedAlphabet);
    // console.log(currentAlphabetElement.innerText);

    // checked match or not

    if (playerPressed === expectedAlphabet) {
        console.log(' You get a point');
    }
    else{
        console.log('you missed. you lost a life');
    }
}

document.addEventListener('keyup', handlekeyboardKeyUpEvent);


// function handleKeyboardButtonPress() {
//     console.log('button pressed');
// }
// document.addEventListener('keyup', handleKeyboardButtonPress)


function ContinueGame() {
    // step -1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('Your random Alphabet is : ', alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

     // set background color
     setBackgroundColorById(alphabet);

}


    function play() {
        hideElementById('home-screen');
        showElementById('play-ground');
        ContinueGame ()
    }