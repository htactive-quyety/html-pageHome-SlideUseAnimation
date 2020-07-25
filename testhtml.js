var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slide");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 10000); // Change image every 10 seconds

}

function myFunction() {
    var x = document.getElementById("mynavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}


function getData() {
    var name = document.getElementById("output_name").innerHTML = "Name is: " + document.getElementById(
        "name").value;
    var email = document.getElementById("output_email").innerHTML = "Email is: " + document.getElementById(
        "email").value;
    var subject = document.getElementById("output_subject").innerHTML = "Subject is: " + document.getElementById(
        "subject").value;
    var message = document.getElementById("output_message").innerHTML = "Mesage is: " + document.getElementById(
        "message").value;
}