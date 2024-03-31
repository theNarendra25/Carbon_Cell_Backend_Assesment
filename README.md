# Backend Development Tasks

This repository  folder name as Task_01_03_04 contains solutions for two backend development tasks: Task 1 ,Task 03 and Task 4 Combinedly.

## Task 01: Implement User Authentication with JWT

### Objective:
Develop user authentication functionality using JSON Web Tokens (JWT).

### Requirements:
- Implement JWT authentication using a Node.js framework of your choice (e.g., Express.js).
- Include endpoints for user registration, login, and logout.
- Secure sensitive routes by requiring authentication.

### Implementation:
The implementation involves creating routes for user registration, login, and logout using Express.js. JWT tokens are generated upon successful login and are used for authentication in protected routes.

## Task 03: Implement Swagger Documentation

### Objective:
Document the API endpoints using Swagger for better understanding and usability.

### Requirements:
- Integrate Swagger JS with your Node.js application.
- Document all API endpoints, including request parameters and responses.
- Generate Swagger UI for interactive API documentation.

### Implementation:
Swagger documentation is integrated into the Node.js application using the `swagger-jsdoc` and `swagger-ui-express` packages. Each API endpoint is documented with request parameters, responses, and descriptions.

## Task 04: Secure API Endpoint for Authenticated Users Only

### Objective:
Restrict access to an API endpoint to authenticated users only.

### Requirements:
- Create a new API endpoint that returns a message or data.
- Implement middleware to verify JWT authentication before allowing access.
- Return an error message for unauthenticated requests.

### Implementation:
A new API endpoint is created in Express.js, and middleware is implemented to verify JWT authentication before allowing access to the endpoint. Error handling is implemented to return an error message for unauthenticated requests.

# Task 05: Ethereum Account Balance Retrieval using web3.js

This project demonstrates how to efficiently fetch the balance of an Ethereum account using web3.js in a Node.js application. It includes an API route to retrieve the balance of a specified Ethereum account and handles errors and edge cases gracefully.

## Introduction

When interacting with the Ethereum blockchain to retrieve account balances, it's essential to ensure efficiency and reliability. This project utilizes web3.js, a widely-used JavaScript library for Ethereum development, to streamline the process and provide a robust solution.

## Problem Statement

Retrieving account balances from the Ethereum blockchain involves several challenges, including:

1. Establishing a connection to the Ethereum network.
2. Handling different data formats (e.g., wei, ether).
3. Validating Ethereum account addresses.
4. Ensuring error handling and response formatting are done correctly.

## Solution Approach

To tackle these challenges efficiently, the following approach was taken:

1. **Web3.js Integration**: Utilizing the web3.js library simplifies interaction with the Ethereum blockchain. By initializing a web3 instance with a provider (e.g., Infura), we establish a connection to the Ethereum network without the need to run a local node.

2. **API Route Implementation**: Creating a dedicated API route (`/balance/:address`) allows users to query Ethereum account balances conveniently. This route accepts an Ethereum account address as a parameter and retrieves the balance using web3.js.

3. **Error Handling and Response Formatting**: Proper error handling mechanisms were implemented to ensure robustness. For instance, before fetching the balance, the code validates the provided Ethereum address to avoid unnecessary API calls. Additionally, errors are gracefully handled, and responses are formatted in JSON to provide clear feedback to users.

## Efficiency Measures

Efficiency was prioritized throughout the development process:

1. **Optimized Network Access**: Utilizing Infura as the provider ensures reliable access to the Ethereum network without the overhead of running a local node.

2. **Asynchronous Operations**: Leveraging asynchronous operations in Node.js allows for non-blocking execution, enhancing performance when interacting with external APIs (such as Infura).

3. **Minimalistic Error Handling**: While comprehensive error handling is crucial, unnecessary complexity was avoided to maintain code readability and performance.

## Usage

1. **Installation**: After cloning the repository and installing dependencies, set up a `.env` file with your Infura project ID.

2. **Starting the Server**: Launch the server using `npm start`.

3. **Accessing the API**: Use the provided API endpoint (`GET /balance/:address`) to retrieve Ethereum account balances by specifying the account address.

## Task 02: Implement API Endpoints with Filtering Options

### Objective:
Develop API endpoints to fetch data from a public API with filtering options.

### Requirements:
- Utilize Node.js and Express.js to create API routes.
- Fetch data from the provided public API (https://api.publicapis.org/entries).
- Implement filtering options for data retrieval based on categories and result limits.

### Implementation:
The API endpoints are created in Express.js to fetch data from the provided public API. Filtering options for categories and result limits are implemented to allow users to retrieve specific data based on their preferences.

## Conclusion

Efficiently retrieving Ethereum account balances requires careful consideration of various factors, including network access, data handling, and error management. By leveraging web3.js and implementing best practices, this project offers a reliable and performant solution for interacting with the Ethereum blockchain.

## Credits

This project was created by Narendra Kumar Meena.

