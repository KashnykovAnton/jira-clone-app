# Introduction 
This project is a demo version of Jira that allows you to create tasks in the form of cards. These tasks can be changed in status and given different levels of priority.
The functionality for editing existing cards and deleting them is also implemented. 
The ability to filter and sort cards has also been added.

# Getting Started
1.  Installation process
    Go to the https://dev.azure.com/DTITTS/TAC/_git/task-tracker.user01 or to the https://github.com/KashnykovAnton/jira-clone-app and clone the project with https url. 
    After clonning the project  - type in your terminal "npm i" or "yarn" to install all the project dependencies.

2.	Software dependencies
    Be sure that you have installed on your computer - Node.js (v14.x or later) and npm (v6.x or later). If you don't have it - you can find last versions here: https://nodejs.org/en/download/package-manager . To check your installed versions you can type in your terminal "node -v" and "npm -v".

3.	Latest releases
    This application haven't had releases hystory yet. In future - the releases page for the latest version of the project will be added.
    
4.	API references
    This project uses a mock backend server provided by json-server. For detailed information on the API endpoints, refer to the json-server documentation. The BASE_URL of this project - you can find in src/services/api.js
    To run the server - type in the terminal "npm run server". Server will be run on the port 3030. 

# Build and Test
1.  Start the development server: npm start
2.  Build the project: npm run build
3.  Run tests: npm test

# Contribute
We welcome contributions from the community! To contribute, follow these steps:
1.  Fork the repository: Click the "Fork" button on the top right of the repository page.

2.  Clone your fork: git clone https://github.com/yourusername/task-tracker.git

3.  Create a new branch: git checkout -b feature/your-feature-name

4.  Make your changes: Implement your feature or bug fix.

5.  Commit your changes: git commit -m "Description of your changes"

6.  Push to your fork: git push origin feature/your-feature-name

7.  Create a pull request: Go to the original repository on GitHub and click on "New Pull Request". Provide a clear description of your changes and why they are necessary.