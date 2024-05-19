// Document Ready function - ensure the HTML is full loaded before trying to use any JS
// $ = getElement or querySelector

// Grab the document (HTML) and check it is ready:
$(document).ready(function () {
    // ALL Js is placed inside here

    //change backgrund colour of all the p tags to red once document is ready
    $("p").css("color", "red"); // all p tags
    $("#one").css("color", "blue"); // first p tags
    $("#two").css("color", "pink");
    $("#three").css("color", "green");
    $("#four").css("color", "purple");
    $("#five").css("color", "yellow");

    // Body bg-colour to off black
    $("body").css("background-color", "#1f1f1f"); //body

    //click events
    // To hide the p tags
    $("#hideButton").click(function () {
        // my js for the click event
        $("p").fadeOut();
    });
    // To Show the p tags
    $("#showButton").click(function () {
        // my js for the click event
        $("p").fadeIn();
    });

    $("#alert").click(function () {
        // my js for the click event
        alert("ANGEY");
    });

    // onchange of the username update the userResult p tag
    $("#usernameInput").change(function (event) {
        $("#usernameResult").html(event.target.value);
    });
    $("#passwordInput").change(function (event) {
        $("#passwordResult").html(event.target.value);
    });

    /** --------- DATEPICKER ---------- */
    // Initialize datepicker on the inputs:
    $("#start-date").datepicker({
        dateFormat: "dd-mm-yy",
        onSelect: function () {
            // run calculate function:
            const diffDays = calculateDays();
            populateResults(diffDays);
        }
    });

    $("#end-date").datepicker({
        // yy-mm-dd
        dateFormat: "dd-mm-yy",
        onSelect: function () {
            // run calculate function:
            const diffDays = calculateDays();
            populateResults(diffDays);
        }
    });


    // Calculate the difference between the two dates:
    function calculateDays() {
        const startDate = $("#start-date").datepicker("getDate");
        const endDate = $("#end-date").datepicker("getDate");

        // check if we have a start date and an end date
        if (startDate && endDate) {
            // calculate the difference:
            const timeDiff = Math.abs(endDate.getTime() - startDate.getTime()) // make sure the number is a positive number
            console.log(timeDiff);

            // 1000 milliseconds per second
            // 3600 seconds per hour
            // 24 hours in a day
            //1000 * 3600 * 24 = number of milliseconds in a day

            // timeDiff / number of millisecond in day = number of days
            // make sure number of days is a whole number - we use Math.ceil()

            const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            console.log(diffDays);

            // update number of days spans
            $("#number-of-days").text(diffDays)
            // return diffDays to make it accessable to the popluate function
            return diffDays;
        } else {
            // make sure number of days is empty:
            $("#number-of-days").text(""); // set it to empty text
        }
    }

    /** ----- Exmaple of using date to filter ----- */
   
   
    const hotels = [
        {
            id: 1,
            name: "Hotel 1",
            minStay: 3,
            maxStay: 10,
        },
        {
            id: 2,
            name: "Hotel 2",
            minStay: 1,
            maxStay: 5,
        },
        {
            id: 3,
            name: "Hotel 3",
            minStay: 5,
            maxStay: 8,
        },
        {
            id: 4,
            name: "Hotel 4",
            minStay: 4,
            maxStay: 6,
        },
        {
            id: 5,
            name: "Hotel 5",
            minStay: 4,
            maxStay: 9,
        },
    ];

    function populateResults(diffDays) {
         // clear out the results div
         $("#results").html ("");

         // run a for loop over the htoel array to do this for each hotel:
         hotels.forEach(hotel => {
            // check if number of days enter by the user id more than hotel min stay or less than hotel max stay:
            if (diffDays >= hotel.minStay && diffDays <= hotel.maxStay){
                $("#results").append(`<p>${hotel.name}</p>`)
            }else {
                $("#results").append(``);
            }
        });
    }




})