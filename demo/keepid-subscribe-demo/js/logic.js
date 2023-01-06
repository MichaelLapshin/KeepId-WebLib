// General logic
function isUserPinValid(user_pin) {
    if (/^[a-zA-Z0-9]{6}$/.test(user_pin)) { // Match 6 alpha-numeric chars
        return true;
    }
    return false;
}

// Button logic
function keepIdButtonClick(element) {
    var input_box = document.getElementById("keepid-pin-input");
    var user_pin = input_box.value;

    // Update button colouring
    element.style.borderWidth = "2px";
    element.style.height = "42px";
    if (!isUserPinValid(user_pin)) {
        element.style.borderColor = "red";
        
        // Open KeepId popup window
        document.getElementById("keepid-popup").style.display = "block";
        return
    }
    element.style.borderColor = "green";


    // Send HTTP Request
    const Http = new XMLHttpRequest();
    Http.open("POST", 'http://localhost:8002/create');
    Http.setRequestHeader('Content-type', 'application/json');
    Http.send();
    Http.onreadystatechange=(e)=>{
        console.log(Http.responsetex)
    };
}

// Popup logic
function inputSetBlack(element) {
    element.style.color = "black";

    var buttons = document.getElementsByClassName("keepid-button");
    for (var i = 0; i < buttons.length; i++) {
        buttons.item(i).style.borderColor = "black";
        buttons.item(i).style.borderWidth = "1px";
    }
}

function inputUpdateStatus(element) {
    var user_pin = element.value;

    if (/^ +$/.test(user_pin) || user_pin == '') {
        element.style.color = "black";
    } else if (isUserPinValid(user_pin)) {
        element.style.color = "green";
    } else if (/^[a-zA-Z0-9]+$/.test(user_pin)) {
        element.style.color = "orange";
    } else {
        element.style.color = "red";
    }
}

// KeepId input size adjustment
function maximizeKeepIdInput() {
    document.getElementById("keepid-popup").style.display = "block";
    document.getElementById("keepid-popup-min").style.display = "none";
}

function minimizeKeepIdInput() {
    document.getElementById("keepid-popup").style.display = "none";
    document.getElementById("keepid-popup-min").style.display = "block";
}
