import { initializeApp }
    from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";

import {
    getAuth,
    onAuthStateChanged
}
    from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

import {
    getFirestore,
    collection,
    addDoc,
    query,
    where,
    onSnapshot,
    deleteDoc,
    updateDoc,
    doc
}
    from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyDd7OeZg-7plntGmuV3wUbdE4KcHAlXoLU",
    authDomain: "centsu-70adb.firebaseapp.com",
    projectId: "centsu-70adb",
    storageBucket: "centsu-70adb.firebasestorage.app",
    messagingSenderId: "1040402383303",
    appId: "1:1040402383303:web:0a1e28d96f5308c54dd9e2"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const database = getFirestore(app);

var addExpenseButton =
    document.getElementById("addExpenseButton");

var budgetAmount =
    document.getElementById("budgetAmount");

var saveBudgetButton =
    document.getElementById("saveBudgetButton");

var budgetSummary =
    document.getElementById("budgetSummary");


var expenseBeingEdited = "";


onAuthStateChanged(auth, function (user) {


    var authSection = document.getElementById("authSection");

    var expenseSection = document.getElementById("expenseSection");


    if (user) {
        authSection.style.display = "none";
        expenseSection.style.display = "block";

        displayExpenses(user.uid);
        displayBudget(user.uid);
    }


    else {

        authSection.style.display = "block";
        expenseSection.style.display = "none";
    }
   
});


addExpenseButton.onclick = function () {

    var amount =
        document.getElementById("amount").value;

    var category =
        document.getElementById("category").value;

    var date =
        document.getElementById("date").value;


    if (amount == "" || category == "" || date == "") {
        alert("Please fill in all fields.");
        return;
    }


    if (auth.currentUser == null) {
        alert("Please wait for the database to connect.");
        return;
    }

    if (expenseBeingEdited != "") {

        updateDoc(
            doc(database, "expenses", expenseBeingEdited),
            {
                amount: amount,
                category: category,
                date: date


            }
        )
            .then(function () {

                expenseBeingEdited = "";
                addExpenseButton.innerHTML = "Add Expense";

                document.getElementById("amount").value = "";
                document.getElementById("category").value = "";
                document.getElementById("date").value = "";



            })

            .catch(function (error) {
                alert("This expense could not be updated.");
                console.log(error);
            });

        return;
    }

        addDoc(collection(database, "expenses"),
            {
                amount: amount,
                category: category,
                date: date,
                userId: auth.currentUser.uid
            })
            .then(function () {
                document.getElementById("amount").value = "";
                document.getElementById("category").value = "";
                document.getElementById("date").value = "";
            })
            .catch(function (error) {
                alert("The expense could not be saved.");
                console.log(error);
            });
    };


function displayExpenses(userId) {
    var expenses =
        document.getElementById("expenses");

    var expensesQuery = query(
        collection(database, "expenses"),
        where("userId", "==", userId)
    );


    onSnapshot(expensesQuery, function (results) {
        expenses.innerHTML = "";

        results.forEach(function (savedDocument) {
            var expense = savedDocument.data();
            var expenseId = savedDocument.id;

            var newExpense =
                document.createElement("p");

            var editButton =
                document.createElement("button");

            editButton.innerHTML = "Edit";

            editButton.onclick = function () {

                expenseBeingEdited = expenseId;

                addExpenseButton.innerHTML = "Update Expense";


                document.getElementById("amount").value = expense.amount;
                document.getElementById("category").value = expense.category;
                document.getElementById("date").value = expense.date;
            };





            var deleteButton =
                document.createElement("button");

            deleteButton.innerHTML = "Delete";

            deleteButton.onclick = function () {


                deleteDoc(doc(database, "expenses", expenseId));

            };


            newExpense.innerHTML =
                "Amount: $" + expense.amount +
                "<br>Category: " + expense.category +
                "<br>Date: " + expense.date +
                "<hr>";

            newExpense.appendChild(editButton);

            newExpense.appendChild(deleteButton);

            expenses.appendChild(newExpense);
        });


    });

}

saveBudgetButton.onclick = function () {

    var budget = budgetAmount.value;

    if (budget == "") {


        alert("Please enter a monthly budget.");
        return;


    }


    if (auth.currentUser == null) {

        alert("Please wait for the database to connect.");
        return;
    }

    addDoc(
        collection(database, "budgets"),
        {
            budget: budget,
            userId: auth.currentUser.uid
        }
    )

        .then(function () {
            budgetAmount.value = "";

            alert("Budget saved successfully.");
        })

        .catch(function (error) {

            alert("The budget could not be saved.");
            console.log(error);
        });
};

                 function displayBudget(userId) {


                     var budgetQuery = query(
                         collection(database, "budgets"),
                         where("userId", "==", userId)

                     );

                     onSnapshot(budgetQuery, function (results) {

                         budgetSummary.innerHTML = "";


                         results.forEach(function (savedDocument) {

                             var savedBudget = savedDocument.data();

                             budgetSummary.innerHTML =

                                 "Monthly Budget: $" + savedBudget.budget;

                         });
                         

                     });

                 }
                     
                 
       
