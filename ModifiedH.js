//Global variables that store the number of guests per room.
var room1total = 0;
var room2total = 0;
var room3total = 0;
var room4total = 0;
var room5total = 0;
var room6total = 0;

var script =[]; //Empty array containing all the guests that have checked in since the script started

///////////////////////////// START OF ROOM 1 ///////////////////////////////////////////////
function checkIn() {
    if (room1total > 3) {  //IF the room1total is greater than 3
        window.alert("ROOM 1 IS FULL");
    }
    else {
        room1total++; //I will add +1 to the room1total global variable.
        var x = new Date(); //Gets the date 
        var y = x.toLocaleString();
        var newList = document.createElement('li');
        newList.setAttribute("class","newLi");
        var u = document.getElementById('user').value + ' '+y ;

        //Script for room with all guests 
        script.push(u);  //Prints the script array to the div.
        document.getElementById('scriptall').innerHTML= script; 
       
        var newText = document.createTextNode(u);
        newList.appendChild(newText);
        var position = document.getElementById('ol1'); // I am getting the OL by its ID.
        position.appendChild(newList);
        document.getElementById('user').value = " ";

    } 
}

    var guestList = document.getElementById("ol1");
    guestList.addEventListener("click", function(event){;
    var newLi = event.target;
    guestList.removeChild(newLi);
    });



    var isVisible = true;
function vTest() {
    if (isVisible == true ) {
    document.getElementById('z').style.visibility = "hidden"; 
    isVisible = false;
    }
    else {
    document.getElementById('z').style.visibility = "visible";
    isVisible = true;
    }
}

function getout1() {
    var myList = document.getElementById('ol1');  //gets the ol1
    myList.innerHTML = '';   //deletes all the stuff inside the ol
    room1total = 0;  //resets the room1total back to 0
}
///////////////////////////// END OF ROOM 1 ///////////////////////////////////////////////









///////////////////////////// START OF ROOM 2 ///////////////////////////////////////////////
function checkIn2() {
    if (room2total > 3) {
        alert("ROOM 2 IS FULL");
    }
    else {
        room2total++;                
        var x = new Date();
        var y = x.toLocaleString();
        var newList = document.createElement('li');
        newList.setAttribute("class","newLi2");
        var u = document.getElementById('userTwo').value + ' '+y ;

        script.push(u); 
        document.getElementById('scriptall').innerHTML = script; 

        var newText = document.createTextNode(u);
        newList.appendChild(newText);
        var position = document.getElementById('ol2'); 
        position.appendChild(newList);
        document.getElementById('userTwo').value = " ";
        
    } 
}

    var guestList = document.getElementById("ol2");
    guestList.addEventListener("click", function(event2){;
    var li = event2.target;
    guestList.removeChild(li);
    });

function vTest2() {
    if (isVisible == true ) {
    document.getElementById('zTwo').style.visibility = "hidden"; 
    isVisible = false;
    }
    else {
    document.getElementById('zTwo').style.visibility = "visible";
    isVisible = true;
    }
}

function getout2() {
    var myList = document.getElementById('ol2');  
    myList.innerHTML = '';  
    room2total = 0; 
    
}

///////////////////////////// END OF ROOM 2 ///////////////////////////////////////////////







///////////////////////////// START OF ROOM 3 ///////////////////////////////////////////////
function checkIn3() {
    if (room3total > 3) {
        alert("ROOM 3 IS FULL");
    }
    else {
        room3total++;
        var x = new Date();
        var y = x.toLocaleString();
        var newList = document.createElement('li');
        newList.setAttribute("class","newLi3");
        var u = document.getElementById('userThree').value + ' '+y ;

        script.push(u); 
        document.getElementById('scriptall').innerHTML = script;

        var newText = document.createTextNode(u);
        newList.appendChild(newText);
        var position = document.getElementById('ol3'); 
        position.appendChild(newList);
        document.getElementById('userThree').value = " ";
        
    } 
}

    var guestList = document.getElementById("ol3");
    guestList.addEventListener("click", function(event3){;
    var li = event3.target;
    guestList.removeChild(li);
    });

    
function vTest3() {
    if (isVisible == true ) {
    document.getElementById('zThree').style.visibility = "hidden"; 
    isVisible = false;
    }
    else {
    document.getElementById('zThree').style.visibility = "visible";
    isVisible = true;
    }
}

function getout3() {
    var myList = document.getElementById('ol3');  
    myList.innerHTML = '';   
    room3total = 0;  
    }
///////////////////////////// END OF ROOM 3 ///////////////////////////////////////////////








///////////////////////////// START OF ROOM 4 ///////////////////////////////////////////////
function checkIn4() {
    if (room4total > 3) {
        alert("ROOM 4 IS FULL");
    }
    else {
        room4total++;
        var x = new Date();
        var y = x.toLocaleString();
        var newList = document.createElement('li');
        newList.setAttribute("class","newLi4");
        var u = document.getElementById('userFour').value + ' '+y ;

        script.push(u); 
        document.getElementById('scriptall').innerHTML = script;

        var newText = document.createTextNode(u);
        newList.appendChild(newText);
        var position = document.getElementById('ol4'); 
        position.appendChild(newList);
        document.getElementById('userFour').value = " ";
        
    } 
}

    var guestList = document.getElementById("ol4");
    guestList.addEventListener("click", function(event4){;
    var li = event4.target;
    guestList.removeChild(li);
    });

    
function vTest4() {
    if (isVisible == true ) {
    document.getElementById('zFour').style.visibility = "hidden"; 
    isVisible = false;
    }
    else {
    document.getElementById('zFour').style.visibility = "visible";
    isVisible = true;
    }
}

function getout4() {
    var myList = document.getElementById('ol4');
    myList.innerHTML = '';  
    room4total = 0;  
    }

///////////////////////////// END OF ROOM 4 ///////////////////////////////////////////////








///////////////////////////// START OF ROOM 5 ///////////////////////////////////////////////
function checkIn5() {
    if (room5total > 3) {
        alert("ROOM 5 IS FULL");
    }
    else {
        room5total++;
        var x = new Date();
        var y = x.toLocaleString();
        var newList = document.createElement('li');
        newList.setAttribute("class","newLi5");
        var u = document.getElementById('userFive').value + ' '+y ;

        script.push(u); 
        document.getElementById('scriptall').innerHTML = script;

        var newText = document.createTextNode(u);
        newList.appendChild(newText);
        var position = document.getElementById('ol5');
        position.appendChild(newList);
        document.getElementById('userFive').value = " ";
        
    } 
}

    var guestList = document.getElementById("ol5");
    guestList.addEventListener("click", function(event5){;
    var li = event5.target;
    guestList.removeChild(li);
    });

    
function vTest5() {
    if (isVisible == true ) {
    document.getElementById('zFive').style.visibility = "hidden"; 
    isVisible = false;
    }
    else {
    document.getElementById('zFive').style.visibility = "visible";
    isVisible = true;
    }
}

function getout5() {
    var myList = document.getElementById('ol5');  
    myList.innerHTML = '';   
    room5total = 0;
}

///////////////////////////// END OF ROOM 5 ///////////////////////////////////////////////








///////////////////////////// START OF ROOM 6 ///////////////////////////////////////////////
function checkIn6() {
    if (room6total > 3) {
        alert("ROOM 6 IS FULL");
    }
    else {
        room6total++;
        var x = new Date();
        var y = x.toLocaleString();
        var newList = document.createElement('li');
        newList.setAttribute("class","newLi6");
        var u = document.getElementById('userSix').value + ' '+y ;

        script.push(u); 
        document.getElementById('scriptall').innerHTML = script;

        var newText = document.createTextNode(u);
        newList.appendChild(newText);
        var position = document.getElementById('ol6'); 
        position.appendChild(newList);
        document.getElementById('userSix').value = " ";
        
    } 
}



    var guestList = document.getElementById("ol6");
    guestList.addEventListener("click", function(event6){;
    var li = event6.target;
    guestList.removeChild(li);
    });

    
function vTest6() {
    if (isVisible == true ) {
    document.getElementById('zSix').style.visibility = "hidden"; 
    isVisible = false;
    }
    else {
    document.getElementById('zSix').style.visibility = "visible";
    isVisible = true;
    }
}

function getout6() {
    var myList = document.getElementById('ol6');  
    myList.innerHTML = '';   
    room6total = 0;
}

///////////////////////////// END OF ROOM 6 ///////////////////////////////////////////////




///////////////////////// START OF GUEST REPORT ///////////////////////////////////////////
function guestreport() {
    var scriptString = script.toString();
    localStorage.setItem('stringscript',scriptString);
    location.href = "GuestReport.html";
}
////////////////////////// END OF GUEST REPORT ////////////////////////////////////////////