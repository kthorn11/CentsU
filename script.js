import { initializeApp }
    from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";

import {
    getAuth,
    signInAnonymously,
    onAuthStateChanged
}
    from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

import {
    getFirestore,
    collection,
    addDoc,
    query,
    where,
    onSnapshot
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
const auth = getAuth(app);
const database = getFirestore(app);

var addExpenseButton =
    document.getElementById("addExpenseButton");


onAuthStateChanged(auth, function (user) {
    if (user) {
        displayExpenses(user.uid);
    }
    else {
        signInAnonymously(auth);
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

            var newExpense =
                document.createElement("p");

            newExpense.innerHTML =
                "Amount: $" + expense.amount +
                "<br>Category: " + expense.category +
                "<br>Date: " + expense.date +
                "<hr>";

            expenses.appendChild(newExpense);
        });
    });
}
