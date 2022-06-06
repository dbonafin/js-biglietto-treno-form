
// CREATE TICKET RESULT

const createButton = document.getElementById ("create-button");

createButton.addEventListener("click",
    function() {

        // DATA COLLECT
        //the user tell us the needed informations
        const userName = document.getElementById("user-name").value;

        const userKm = parseInt (document.getElementById ("user-km").value);

        const userAge = document.getElementById ("user-age").value;

        // DIFFERENT TICKET PRICES
        //calc of the different prices
        let standardPrice = parseInt (userKm * 0.21).toFixed(2);

        if (userAge === "minorenne") {
            standardPrice = standardPrice - (standardPrice * 0.20).toFixed(2);
        } else if (userAge === "over") {
            standardPrice = standardPrice - (standardPrice * 0.40).toFixed(2);
        }

        // DIFFERENT TICKET CLASSES
        //calc of the different classes
        let ticketClass = "biglietto standard";

        if (userAge === "minorenne") {
            ticketClass = "young economy";
        } else if (userAge === "over") {
            ticketClass = "over discount";
        }

        // TICKET RESULT 
        // every information about the ticket

        document.getElementById("ticket-name").innerHTML = `Nome passaggero ${userName}`;
        document.getElementById("ticket-class").innerHTML = `Offerta ${ticketClass}`;
        document.getElementById("ticket-vagon").innerHTML = `Carrozza ${Math.floor(Math.random() * 10) +1}`;
        document.getElementById("ticket-code").innerHTML = `Codice CP ${Math.floor(Math.random() * 100000) + 1000}`;
        document.getElementById("ticket-price").innerHTML = `Costo biglietto ${standardPrice} ${"€"}`;

        //show the ticket result to the user
        document.querySelector(".ticket-result").classList.add("active");
    }
);


//  CANCEL TICKET RESULT

const cancelButton = document.getElementById ("cancel-button");

cancelButton.addEventListener("click",
    function() {

        // DATA RESET
        const userName = document.getElementById("user-name").value = "";

        const userKm = parseInt (document.getElementById ("user-km").value = "");

        const userAge = document.getElementById ("user-age").value = "Maggiorenne";


        // TICKET RESULT 
        document.querySelector(".ticket-result").classList.remove("active");

    }
);


