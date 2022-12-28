# sg-hdb-infograhpic
An infographic website that displays HDB data

# How to run
1. Create a new React.js project: Open a terminal window and navigate to the directory where you want to create your project. Then, run the following command to create a new React.js project:
```
npx create-react-app my-app
```

2. Replace "my-app" with the desired name of your project. This will create a new directory with the specified name and generate the necessary files and dependencies for a basic React.js application.

3. Add the React.js code: Open the project directory in a text editor and replace the existing code in the src/App.js file with the index.js code provided. Make sure to also import the HDBData module that you created in the Python code.

4. Install the dependencies: Run the following command in the terminal window to install the dependencies that are required for the React.js code:
```
npm install
```

5. Start the development server: Navigate to the project directory and run the following command to start the development server:
```
cd my-app
npm start
```

# index.js
display the HDB data in a table, with separate columns for each of the data points that you are interested in (i.e., Location, Type, Size, Sales Price, Rental Price, Demographics, Infrastructure, and Building Details).

# HDBData.py
The getData method makes a request to the HDB DataMall API and includes an Authorization header with the authentication token. You will need to replace YOUR_AUTH_TOKEN with the actual token that you have been provided with.
