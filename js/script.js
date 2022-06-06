
const createButton = document.getElementById ("create-button");

createButton.addEventListener("click",
    function() {

        // DATA COLLECT
        const userName = document.getElementById("user-name").value;
        console.log(userName);

        const userKm = parseInt (document.getElementById ("user-km").value);
        console.log(userKm);

        const userAge = document.getElementById ("user-age").value;
        console.log(userAge);

        // DIFFERENT TICKET PRICES
        
        let standardPrice = parseInt (userKm * 0.21);

        if (userAge === "minorenne") {
            standardPrice = standardPrice - (standardPrice * 0.20);
        } else if (userAge === "over") {
            standardPrice = standardPrice - (standardPrice * 0.40);
        }

        console.log(standardPrice);

        // TICKET RESULT 

        document.getElementById("ticket-name").innerHTML = `Nome passaggero ${userName}`;
        document.getElementById("ticket-price").innerHTML = `Costo biglietto ${standardPrice}`;


    }
);


// const cancelButton = document.getElementById ("cancel-button");

// cancelButton.addEventListener("click",
//     function() {

//         // DATA RESET
//         const userName = document.getElementById("user-name").value = "";

//         const userKm = parseInt (document.getElementById ("user-km").value = "");

//         const userAge = document.getElementById ("user-age").value = "Maggiorenne";


//         // TICKET RESULT 

//     }
// );


