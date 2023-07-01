# Random Quote Machine

The Random Quote Machine is a web application built using React.js that displays random quotes fetched from an external API. The application allows users to generate a new random quote with the click of a button and share the quote on Twitter.

## Features

- Fetches random quotes from the type.fit API.
- Displays a random quote along with its author.
- Provides a button to generate a new random quote.
- Allows users to share the quote on Twitter using the "Tweet" button.

## Installation

To run the Random Quote Machine locally, follow these steps:

1. Clone the repository or download the source code.
1. Open a terminal and navigate to the project directory.
1. Install the dependencies by running the command: `npm install`
1. Start the development server with the command: `npm start`
1. Open your web browser and visit http://localhost:3000 to see the application running.

## Dependencies

The Random Quote Machine project uses the following dependencies:

- React.js: A JavaScript library for building user interfaces.
- Bootstrap: A popular CSS framework for styling web applications.
- Font Awesome: A library of scalable vector icons.

## Usage

1. Upon opening the application, a random quote and its author will be displayed.
1. To generate a new random quote, click the "New Quote" button.
1. The quote and author will fade out and a new random quote will fade in.
1. To share the quote on Twitter, click the Twitter icon button. This will open a new tab with a pre-filled tweet containing the quote and author.

## Customization

The application has a customizable feature that can be modified in the App.js file:

- mainColors: An array of colors used to generate random background and text colors for the quotes. Modify this array to add or remove colors as desired.

## Acknowledgments

The Random Quote Machine project was inspired by the FreeCodeCamp Random Quote Machine project. The quotes are fetched from the type.fit API.