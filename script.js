function myfunc() {
    // Setting DOM to all boxes or input field
    var box1, box2, box3, box4, box5, box6, box7, box8, box9;
    box1=document.getElementById("box1").value;
    box2=document.getElementById("box2").value;
    box3=document.getElementById("box3").value;
    box4=document.getElementById("box4").value;
    box5=document.getElementById("box5").value;
    box6=document.getElementById("box6").value;
    box7=document.getElementById("box7").value;
    box8=document.getElementById("box8").value;
    box9=document.getElementById("box9").value;

    // Checking if Player X won or not and after that disabled all the other fields to end the game

    if((box1 == "x" || box1 == "X") && (box2 == "x" || box2 == "X") && (box3 == "x" || box3 == "X")){
        document.getElementById('print').innerHTML = "Player X won!";
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
        window.alert('Player X won!');
    } else if ((box1 == "x" || box1 == "X") && (box5 == "x" || box5 == "X") && (box9 == "x" || box9 == "X")) {
        document.getElementById('print').innerHTML = "Player X won!";
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        window.alert('Player X won!');
    } else if ((box1 == "x" || box1 == "X") && (box4 == "x" || box4 == "X") && (box7 == "x" || box7 == "X")) {
        document.getElementById('print').innerHTML = "Player X won!";
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        window.alert('Player X won!');
    } else if ((box4 == "x" || box4 == "X") && (box5 == "x" || box5 == "X") && (box6 == "x" || box6 == "X")) {
        document.getElementById('print').innerHTML = "Player X won!";
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
        window.alert('Player X won!');
    } else if ((box7 == "x" || box7 == "X") && (box8 == "x" || box8 == "X") && (box9 == "x" || box9 == "X")) {
        document.getElementById('print').innerHTML = "Player X won!";
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        window.alert('Player X won!');
    } else if ((box2 == "x" || box2 == "X") && (box5 == "x" || box5 == "X") && (box8 == "x" || box8 == "X")) {
        document.getElementById('print').innerHTML = "Player X won!";
        document.getElementById("box1").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box9").disabled = true;
        window.alert('Player X won!');
    } else if ((box3 == "x" || box3 == "X") && (box6 == "x" || box6 == "X") && (box9 == "x" || box9 == "X")) {
        document.getElementById('print').innerHTML = "Player X won!";
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        window.alert('Player X won!');
    } else if ((box3 == "x" || box3 == "X") && (box5 == "x" || box5 == "X") && (box7 == "x" || box7 == "X")) {
        document.getElementById('print').innerHTML = "Player X won!";
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        window.alert('Player X won!');
    }

    // Check if Player O won & then disable all other fields
    if((box1 == "o" || box1 == "O") && (box2 == "o" || box2 == "O") && (box3 == "o" || box3 == "O")) {
        document.getElementById('print').innerHTML = "Player O won!";
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
        window.alert('Player O won!');
    } else if ((box1 == "o" || box1 == "O") && (box5 == "o" || box5 == "O") && (box9 == "o" || box9 == "O")) {
        document.getElementById('print').innerHTML = "Player O won!";
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        window.alert('Player O won!');
    } else if ((box1 == "o" || box1 == "O") && (box4 == "o" || box4 == "O") && (box7 == "o" || box7 == "O")) {
        document.getElementById('print').innerHTML = "Player O won!";
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        window.alert('Player O won!');
    } else if ((box4 == "o" || box4 == "O") && (box5 == "o" || box5 == "O") && (box6 == "o" || box6 == "O")) {
        document.getElementById('print').innerHTML = "Player O won!";
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
        window.alert('Player O won!');
    } else if ((box7 == "o" || box7 == "O") && (box8 == "o" || box8 == "O") && (box9 == "o" || box9 == "O")) {
        document.getElementById('print').innerHTML = "Player O won!";
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        window.alert('Player O won!');
    } else if ((box2 == "o" || box2 == "O") && (box5 == "o" || box5 == "O") && (box8 == "o" || box8 == "O")) {
        document.getElementById('print').innerHTML = "Player O won!";
        document.getElementById("box1").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box9").disabled = true;
        window.alert('Player O won!');
    } else if ((box3 == "o" || box3 == "O") && (box6 == "o" || box6 == "O") && (box9 == "o" || box9 == "O")) {
        document.getElementById('print').innerHTML = "Player O won!";
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        window.alert('Player O won!');
    } else if ((box3 == "o" || box3 == "O") && (box5 == "o" || box5 == "O") && (box7 == "o" || box7 == "O")) {
        document.getElementById('print').innerHTML = "Player O won!";
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        window.alert('Player O won!');
    }
    
    // Checking for a tie

    else if ((box1 == 'X' || box1 == 'O') && (box2 == 'X' || box2 == 'O') && (box3 == 'X' || box3 == 'O') && 
        (box4 == 'X' || box4 == 'O') && (box5 == 'X' || box5 == 'O') && (box6 == 'X' || box6 == 'O') &&
        (box7 == 'X' || box7 == 'O') && (box8 == 'X' || box8 == 'O') && (box9 == 'X' || box9 == 'O')) {
            document.getElementById('print').innerHTML = "Match Tie!";
            window.alert('Match Tie!');
    } else {
        if (flag == 1) {
            document.getElementById('print').innerHTML = "Player X Turn";
        } else {
            document.getElementById('print').innerHTML = "Player O Turn";
        }
    }
}

// Function to reset the game!
function myFunc_2() {
    //Reloads the current URL
    location.reload();
    document.getElementById('box1').value = '';
    document.getElementById('box2').value = '';
    document.getElementById('box3').value = '';
    document.getElementById('box4').value = '';
    document.getElementById('box5').value = '';
    document.getElementById('box6').value = '';
    document.getElementById('box7').value = '';
    document.getElementById('box8').value = '';
    document.getElementById('box9').value = '';
}

// Functions will check whose turn it is, and put an X or O accordingly
flag = 1;
function myFunc_3() {
    if(flag == 1) {
        document.getElementById("box1").value = "X";
        document.getElementById("box1").disabled = true;
        flag = 0;
    } else {
        document.getElementById("box1").value = "O";
        document.getElementById("box1").disabled = true;
        flag = 1;
    }
}
function myFunc_4() {
    if(flag == 1) {
        document.getElementById('box2').value = "X";
        document.getElementById('box2').disabled = true;
        flag = 0;
    } else {
        document.getElementById('box2').value = "O";
        document.getElementById('box2').disabled = true;
        flag = 1;
    }
}
function myFunc_5() {
    if(flag == 1) {
        document.getElementById('box3').value = "X";
        document.getElementById('box3').disabled = true;
        flag = 0;
    } else {
        document.getElementById('box3').value = "O";
        document.getElementById('box3').disabled = true;
        flag = 1;
    }
}function myFunc_6() {
    if(flag == 1) {
        document.getElementById('box4').value = "X";
        document.getElementById('box4').disabled = true;
        flag = 0;
    } else {
        document.getElementById('box4').value = "O";
        document.getElementById('box4').disabled = true;
        flag = 1;
    }
}function myFunc_7() {
    if(flag == 1) {
        document.getElementById('box5').value = "X";
        document.getElementById('box5').disabled = true;
        flag = 0;
    } else {
        document.getElementById('box5').value = "O";
        document.getElementById('box5').disabled = true;
        flag = 1;
    }
}function myFunc_8() {
    if(flag == 1) {
        document.getElementById('box6').value = "X";
        document.getElementById('box6').disabled = true;
        flag = 0;
    } else {
        document.getElementById('box6').value = "O";
        document.getElementById('box6').disabled = true;
        flag = 1;
    }
}function myFunc_9() {
    if(flag == 1) {
        document.getElementById('box7').value = "X";
        document.getElementById('box7').disabled = true;
        flag = 0;
    } else {
        document.getElementById('box7').value = "O";
        document.getElementById('box7').disabled = true;
        flag = 1;
    }
}function myFunc_10() {
    if(flag == 1) {
        document.getElementById('box8').value = "X";
        document.getElementById('box8').disabled = true;
        flag = 0;
    } else {
        document.getElementById('box8').value = "O";
        document.getElementById('box8').disabled = true;
        flag = 1;
    }
}function myFunc_11() {
    if(flag == 1) {
        document.getElementById('box9').value = "X";
        document.getElementById('box9').disabled = true;
        flag = 0;
    } else {
        document.getElementById('box9').value = "O";
        document.getElementById('box9').disabled = true;
        flag = 1;
    }
}