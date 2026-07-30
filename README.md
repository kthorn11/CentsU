# CentsU

CentsU is a budgeting web application made for college students. 
It helps users keep track of their spending, create a monthly budget, and work toward savings goals.

## Project Description

CentsU was created to help college students manage their money in one single place. 
Students often have expenses such as food, transportation, school supplies, subscriptions, and personal purchases.
These costs add up quickly, especially when they are not being tracked. 
The application allows users to create an account, log in, save expenses, organize expenses by category, create a monthly budget, and monitor how much money remains.
Users can also set a savings goal, enter their current savings, and view their progress as a percentage. 

## Architecture Overview

CentsU follows a basic web application structure with three main parts:

## Frontend

The frontend is what the user sees and interacts with.

- HTML creates the structure of the pages.
- CSS controls the design, spacing, and the overall appearance.
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
- Expenses stores expense amounts, categories, dates, and user IDs.
- Budgets stores monthly budget amounts and user IDs.
- Goals stores savings goals, current saving amounts, and user IDs. 

Each saved record includes the user's ID so that users can only access their own information.

## Data Flow

The application follows this process: 

- The user enters the information into the form.
- JavaScript reads the information.
- JavaScript sends the information to Cloud Firestore.
- Firestore gets the information and saves it under the logged-in user's ID.
- The application retrieves the saved information.
- The page updates to show the results.

## What the Application Can Do

- Create an account and log in
- Log out securely
- Add expenses 
- Choose a category for each expense
- Add the date and amount
- Edit saved expenses
- Create a monthly budget
- See total spending
- See how much money is left in the budget 
- Receive a warning when getting close to or going over the budget
- Set a savings goal
- Enter the amount already saved
- See progress toward the savings goal as a percentage

## Tools Used

- HTML
- CSS
- JavaScript
- Firebase Authentication
- Cloud Firestore
- Git
- GitHub
- GitHub Pages
- Visual Studio 2022

## How CentsU Works

The user first creates an account or logs in.
After logging in, the user can enter their expenses and organize them by category.
The app saves the user's information in Firebase. It adds the expenses together and compares the total to the monthly budget that has been set.
If the user gets close to the budget or spends more than the budget, the app will display a warning.
The user can also enter a savings goal and the amount they have already saved. 
CentsU calculates the percentage of the goal they have completed.

## How to clone and run CentsU 

### Requirements

Make sure you have:
- Git
- Visual Studio 2022
- Google Chrome or any other web browser
- Internet conncetion

### Clone the Repository

Open Command Prompt, Git Bash, or any terminal: 

git clone https://github.com/kthorn11/CentsU.git


### Open the Project

Open CentsU folder in Visual Studio 2022.

### Run the Application

Open the index.html file using Live Server or another local web server.

### Use the Application 
- Create an account or log in.
- Add expenses
- Create a monthly budget.
- Set a savings goal.
- View your budget status and savings progress.

## Future Improvements

- Allow users to update an existing budget instead of creating a new one.
- Add charts and graphs to help users better understand their spending habits.
- Add reminders to encourage users to stay within their budget.
- Allow users to export their expense history.
- Improve the overall experience for users.

## Author
Kaitlyn Thornton