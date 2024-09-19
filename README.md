
## Overview

The Token Generator is a React application that allows users to generate and display tokens based on input parameters. The application enables users to specify the number of tokens, prefix, and the number of tokens per row for both blue and red tokens. The generated tokens are then displayed in a grid layout according to the specified number of tokens per row.

## Features

- Input fields for the number of tokens, prefix, and tokens per row for both blue and red tokens.
- Generate and clear tokens with buttons.
- Responsive design for both desktop and mobile views.
- Tokens are displayed in rows based on the specified number of tokens per row.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Clone the Repository

Clone the repository to your local machine using:


git clone: https://github.com/aparnaraveendrankv/TokenGeneratorApplication
cd token-generator


### Install Dependencies

Navigate to the project directory and install the necessary dependencies:


npm install


### Running the Application

Start the development server with:

npm run dev

This will run the application locally, and you can view it in your browser at `http://localhost:5175`.

### Generating Tokens

1. Enter the number of blue and red tokens you want to generate.
2. Specify the prefix for blue and red tokens.
3. Define how many tokens should be displayed per row.
4. Click the **Generate** button to generate and display the tokens.
5. Click the **Clear** button to reset the form and clear the generated tokens.

## File Structure

- `src/`
  - `components/`
    - `TokenGenerator.jsx`: Main component for token generation and display.
  - `App.jsx`: Main application component.
  - `index.jsx`: Entry point for the React application.
- `public/`
  - `index.html`: HTML template file.
- `package.json`: Project metadata and dependencies.
- `README.md`: Project documentation.



## Acknowledgments

- This project uses Material-UI for React components and styling.


