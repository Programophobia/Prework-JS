var argButtonName, buttonPaper, buttonRock, buttonScissors, argComputerMove, argMoveId, 
  argPlayerMove, computerMove, playerMove, randomNumber;
  var computerPoint = 0;
  var userPoint = 0;

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');


function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}


function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz (⌣̩̩́_⌣̩̩̀)');
    userPoint++;
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz (⌣̩̩́_⌣̩̩̀)');
    userPoint++;
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz (⌣̩̩́_⌣̩̩̀)');
    userPoint++;
  } else if (argPlayerMove == argComputerMove) {
    printMessage('"Jak do tego doszło? Nie wiem" Remis');
  } else {
    printMessage('Przegrywasz ¯\\_◉‿◉_/¯');
    computerPoint++; 
  }
  printMessage('Zagrałam ' + argComputerMove + ', a Ty ' + argPlayerMove);
  printMessage("Anka: " + computerPoint + " - Ty: "+ userPoint);
  
}

 playerMove = argButtonName;
  console.log('ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
}

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });

