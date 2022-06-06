
const createButton = document.getElementById ("create-button");

createButton.addEventListener("click",
    function() {

        // DATA COLLECT
        const userName = document.getElementById("user-name").value;

        const userKm = parseInt (document.getElementById ("user-km").value);

        const userAge = document.getElementById ("user-age").value;

        // DIFFERENT TICKET PRICES
        let standardPrice = parseInt (userKm * 0.21).toFixed(2);

        if (userAge === "minorenne") {
            standardPrice = standardPrice - (standardPrice * 0.20).toFixed(2);
        } else if (userAge === "over") {
            standardPrice = standardPrice - (standardPrice * 0.40).toFixed(2);
        }

        // DIFFERENT TICKET CLASSES
        let ticketClass = "Biglietto standard";

        if (userAge === "minorenne") {
            ticketClass = "Young economy";
        } else if (userAge === "over") {
            ticketClass = "Over discount";
        }

        // TICKET RESULT 

        document.getElementById("ticket-name").innerHTML = `Nome passaggero ${userName}`;
        document.getElementById("ticket-class").innerHTML = `Offerta ${ticketClass}`;
        document.getElementById("ticket-vagon").innerHTML = `Carrozza ${Math.floor(Math.random() * 10) +1}`;
        document.getElementById("ticket-code").innerHTML = `Codice CP ${Math.floor(Math.random() * 100000) + 1000}`;
        document.getElementById("ticket-price").innerHTML = `Costo biglietto ${standardPrice} ${"€"}`;

        document.getElementById("ticket-result").classList.add("active");
    }
);


const cancelButton = document.getElementById ("cancel-button");

cancelButton.addEventListener("click",
    function() {

        // DATA RESET
        const userName = document.getElementById("user-name").value = "";

        const userKm = parseInt (document.getElementById ("user-km").value = "");

        const userAge = document.getElementById ("user-age").value = "Maggiorenne";


        // TICKET RESULT 
        document.getElementById("ticket-result").classList.remove("active");

    }
);


