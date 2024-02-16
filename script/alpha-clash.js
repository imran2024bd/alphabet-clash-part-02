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
    // console.log('player Pressed :', playerPressed);
    // console.log(event.key);

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    // console.log(playerPressed , currentAlphabet);
    // to be lowercase of currentAlphabet
    const expectedAlphabet  = currentAlphabet.toLocaleLowerCase();
    // console.log(playerPressed , expectedAlphabet);
    // console.log(currentAlphabetElement.innerText);

    // checked match or not

    if (playerPressed === expectedAlphabet) {
        console.log(' You get a point');
        // console.log(' You have correctly pressed right key :' , expectedAlphabet);
        // update score
        // 1. get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        // console.log(currentScoreText);
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);
        // 2. increase the score by 1
        const newScore = currentScore + 1; 
        // 3. show the update score
        currentScoreElement.innerText = newScore;


        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        ContinueGame();
    }
    else{
        console.log('you missed. you lost a life');
        // step-1: get the current Life number
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        // step-2: reduce the life count
        const newLife = currentLife - 1 ;
        // step-3 : display the updated life count
        currentLifeText = newLife;
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