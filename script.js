// JavaScript source code





        // when the button is clicked
    function addExpense() {



            // Recieve wht the user typed
            var amount = document.getElementById("amount").value;
    var category = document.getElementById("category").value;
    var date = document.getElementById("date").value;

    // Make sure each box is filled
    if (amount == "" || category == "" || date == "") {

        alert("Please fill in all fields.");
    return;

            }

    // Find the Saved Expenses section
    var expenses = document.getElementById("expenses");
    // create a new paragraph
    var newExpense = document.createElement("p");

    // Input Expense information inside
    newExpense.innerHTML =
    "Amount: $" + amount +
    "<br>Category: " + category +
        "<br>Date: " + date +
            "<hr>";

                // Add the new expenses
                expenses.appendChild(newExpense);

                // clear boxes for next expense
                document.getElementById("amount").value = "";
                document.getElementById("category").value = "";
                document.getElementById("date").value = "";

        }
