// JavaScript source code
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";



import { auth } from "./script.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
const signupButton = document.getElementById("signupButton");
const logoutButton = document.getElementById("logoutButton");



signupButton.onclick = function () {

    const userEmail = email.value;
    const userPassword = password.value;


    createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then(function () {
            alert("Account created successfully!");

            email.value = "";
            password.value = "";

        })
        .catch(function (error) {
            alert(error.message);
        });
};

    loginButton.onclick = function () {

        const userEmail = email.value;
        const userPassword = password.value;

        signInWithEmailAndPassword(auth, userEmail, userPassword)
            .then(function () {
                alert("Logged in successfully!");

                document.getElementById("authSection").style.display = "none";
                document.getElementById("expenseSection").style.display = "block";
            })
            .catch(function (error) {
                alert(error.message);
            });
    

        logoutButton.onclick = function () {

            signOut(auth)
                .then(function () {

                    alert("Logged out successfully!");

                    document.getElementById("expenseSection").style.display = "none";
                    document.getElementById("authSection").style.display = "block";


                })
                .catch(function (error) {

                    alert(error.message);


                });

        }

        };
