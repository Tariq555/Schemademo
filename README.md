# Schemademo

## About
A schedule system REST API with an admin panel. 

# Contributors
1. Albin Björk 
2. Mauro Andres Gil
3. Oskar Knutsson
4. Tariq Habach
5. Toriqul Islam (toriqul007)

# Communications
- Discord
- Group Meetings 
- Trello (To keep track of our project work)

# Tech-stack
- Java-script
- React 
- SQLite
- Node.js
- Github (for versioning and CICD)
- Vite
- Postman and Newman
- Cypress
- AWS Cloud
- 

# Work Process
We are working in a group following Agil software development process and Scrum metology. We have divided the workflow into two sprints. We start every sprint by planning the workflow and setting up backlogs and finish the sprint with review and feedback. We try to have a distance meeting via discord ofen, so we can discuss the problems and progress. We also do pair-programming when we have time. 

# How to get started
- First of all, the owner of the repository should add you as a contributor and you should clone the repo in your computer and install node package manager in some directories
- Follow the steps below to run the application
 1. npm install
 2. cd admin --> npm install --> npm run build
 3. cd .. 
 4. cd schedule-data-service --> npm install
 5. cd ..
 6. npm run dev


# Branching
- Dev is our default branch and we have a protection rule for this branch. Admin approval is needed to merge another branch with dev.
- The main branch we use for code ready to go live. The current main branch is also the product in use.
- We create a new branch from dev in order to work for a feature and merge it with dev when the feature is ready.

# Testing
We have 2 types of tests in our project. 
- API: We use postman and newman 
- UI : We use Cypress
We can run these tests locally by following the steps below:
- API test Command: npm run api
- UI test command: npm cypress run

# CICD
We use github action for CICD flow    
CI: Everytime we make any change, push or merge into dev branch, the CI will run but it has to pass the tests before
CD: When our dev branch is done and ready to go live, we merge dev branch with main which will deploy in the server

## Invoicing
REST API 

POST /data/invoices

```json
{
    "startDate": "date",
    "endDate": "date",
    "school": INT,
    "class": INT (optional),
    "course": INT id (optional)
}
```

Invoices PDFs are generated in /schedule-data-service/invoices

