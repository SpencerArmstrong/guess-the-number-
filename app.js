let userNum = document.getElementById("getNumber");
userNum.addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
        run(e);

    }
});

userNum.focus();

function run() {
    document.getElementById("paragraph").innerHTML = "hello";   
    document.getElementById("paragraph").style.backgroundColor = "green";
    document.getElementById("paragraph").style.color = "#fffffff";
    document.getElementById("paragraph").style.padding = "20px";
    randomNum();
    user();
    compareNumbers();
}
function randomNum() {
    let ran = Math.floor(Math.random() * 10)
    let x = document.getElementById("random");
    x.innerHTML = ran;
    x.style.backgroundColor = "#280cc1";
    x.style.color = "#ffffff";
    x.style.padding = "20px";
    x.style.textAlign = "center";
    return ran;
}
function userNumber() {
    let user = document.getElementById("getNumber").value;
    return user;
}

function compareNumbers() {
    let a = usernumber();
    let b = randomNum();
    let z = document.getElementById("compare");
    let c = document.getElementById("counter");
    if (a!= b) {
        innerHTML = "numbers arent the same, computer got " + b + ", and user got" + a;
        z.style.backgroundColor = "pink";
        z.style.color = "white";
        z.style.padding = "20px";
        z.style.textAlign = "center";
        counter++
        c.innerHTML = "You have tried" + counter + "times."
        c.style.backgroundColor = "yellow";
        c.style.color = "white";
        c.style.padding = "20px";
        c.style.textAlign = "center";
    } else if ( a == b) {
        innerHTML = "numbers are the same, computer got " + b + ", and user got" + a;
        z.style.backgroundColor = "blue";
        z.style.color = "white";
        z.style.padding = "20px";
        z.style.textAlign = "center";
        c.innerHTML = "You have tried" + counter + "times to get it right"
        c.style.backgroundColor = "yellow";
        c.style.color = "white";
        c.style.padding = "20px";
        c.style.textAlign = "center";
    }
    resetInput();
}

function resetInput(){
    document.getElementById("getNumber").value = "";
}