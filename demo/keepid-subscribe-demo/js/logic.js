// General logic
function isUserPinValid(user_pin) {
    if (/^[a-zA-Z0-9]{6}$/.test(user_pin)) { // Match 6 alpha-numeric chars
        return true;
    }
    return false;
}

// Button logic
function keepidButtonClick() {
    var input_box = document.getElementById("keepid-pin-input");
    var user_pin = input_box.value;

    // Update button colouring
    document.getElementById("keepid-button").style.borderWidth = "2px";
    document.getElementById("keepid-button").style.height = "42px";
    if (!isUserPinValid(user_pin)) {
        document.getElementById("keepid-button").style.borderColor = "red";
        
        // Open KeepId popup window
        document.getElementById("keepid-popup").style.display = "block";
        return
    }
    document.getElementById("keepid-button").style.borderColor = "green";


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
function inputSetBlack() {
    document.getElementById("keepid-pin-input").style.color = "black";
}

function inputUpdateStatus() {
    var input_box = document.getElementById("keepid-pin-input");
    var user_pin = input_box.value;

    if (/^ +$/.test(user_pin) || user_pin == '') {
        input_box.style.color = "black";
    } else if (isUserPinValid(user_pin)) {
        input_box.style.color = "green";
    } else if (/^[a-zA-Z0-9]+$/.test(user_pin)) {
        input_box.style.color = "orange";
    } else {
        input_box.style.color = "red";
    }
}
