const userName = document.getElementById("user-name").value;
console.log ("userName");

const userKm = document.getElementById ("user-km").value;
console.log ("userKm");

const standardPrice = parseInt (userKm * 0.21);
console.log ("standardPrice");


const createButton = document.getElementById ("create-button");

createButton.addEventListener("click",
    function() {
        alert("ciao");
    }
);


 