# Project Title

This project dynamically creates buttons based on the contents of a JSON file. Each button, when clicked, loads the corresponding data. 

## Features

- Dynamically generated buttons from JSON data.
- Data loading on button click.
- Navigation through previously viewed pages using `window.onpopstate`.

## How It Works

The program reads a JSON file and creates a button for each entry. When a button is clicked, the program fetches and loads the corresponding data.

The `window.onpopstate` is used for navigating through the history of viewed pages. When the user navigates back or forward in their browser history, the `window.onpopstate` event is fired, and the page updates to reflect the state of the corresponding history entry.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g