# CentsU

CentsU is a budgeting web application made for college students. 
It helps users keep track of their spending, create a monthly budget, and work toward savings goals.

## Project Description

CentsU was created to help college students manage their money in one single place. 
Students often have expenses such as food, transportation, school suplies, subscriptions, and personal purchases.
These costs add up quickly, especially when they are not being tracked. 
The application allows users to create an account, log in, save expenses, organize expenses by category, create a monthly budget, and monitor how much money remains.
Users can also set a savings goal, enter their current savings, and view their progress as a percentage. 

## Architecture Overview

Centsu follows a basic web application structure with three main parts:

## Frontend

The frontend is what the user sees and interacts with.

- HTML creates the structure of the pages.
- CSS controls the design, spacing, and the overal appearance.
- JavaScript handles button clicks, calculations, form input, and communication with Firebase.

## Firebase Authentication

Firebase Authentication manages user accounts.

It allows users to:

- Create an account
- Log in
- Log out
- Access their own information securely

## Cloud Firestore

Cloud Firestore stores the application data. 

The database currently contains three main parts:
- Expenses stores expense amounts, categories, data, and user IDs.
- Budgets stores monthly budgt amounts and user IDs.
- Goals stores savings goals, current saving amounts, and user IDs. 

Each saved record includes the user's ID so that users can only access their own information.

## Data Flow

The application follows this process: 

- The user enters the information into the form.
- JavaScript reads the information.
- JavaScript sends the information to Cloud Firetore.
- Firestore gets the information and saves it under the logged-in user's ID.
- The application retrives the saved information.
- The page updates to show the results.

## What the Application can do

- Create an account and log in
- Log out securely
- Add expenses 
- Choose a category for each expense
- Add the date and amount
- Edit saved expenses
- Create a monthly budget
- See total spending
- See how much money is left in the budget 
- Receive a warning when getting close to or going over the budgt
- Set a savings goal
- Enter the amount already saved
- Seeprogress toward the savings goal as a percentage

## Tools Used

- HTML
- CSS
- JavaScript
- Firebase Authentication
- Cloud Firestore
- Git
- GitHub
- GitHub pages
- Visual Studio 2022

## How CentsU Works

User first creates an account or log in. 
After logging in, the user can enter their expenses and organize them by catergory.
The app 