// alert("hello")

// Challenge 1: Your Age in day

function ageIndays(){
    var birthyear = prompt("What year were you born.......My friend ?");
    var ageIndayss = (2020-birthyear)*365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageIndayss + 'days old .');
    h1.setAttribute('id','ageIndays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageIndays').remove();
}



// Challenge 2: Cat Generator

function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://media.giphy.com/media/10AmJ6TIlbYxAk/giphy.gif";
    div.appendChild(image);
}


//Challenge 3: Rock, Paper , Scissors

function rpsgame(yourChoice){
    console.log(yourChoice);
    // console.log(yourChoice.src);
    var humanChoice, botChoice;
    // humanChoice = yourChoice.id;
    // botChoice = ;
    // results = decideWinner(humanChoice,botChoice);// [0,1] human lost| bot win
    // // message = finalMessage(results); //   {
    //     'message':'You Won!',
    //     'color': 'Green'
    // }
    rpsFrontEnd(yourChoice.id,botChoice,message);
}