# Historical Event Finder

This project is a web application that allows users to find historical events that occurred on a specific date. It uses a React frontend to interact with users and an Express backend to fetch data from an external API.

## Features

- Select a month and date
- Retrieve a random historical event that occurred on the selected date
- Display the event details to the user

## Tech Stack

- Frontend: React
- Backend: Express.js
- API: [On This Day API](https://byabbe.se/on-this-day/)

## Setup and Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies for both frontend and backend:
   ```
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Create a `.env` file in the backend directory and add your environment variables:
   ```
   PORT=5000
   API_URL=https://byabbe.se/on-this-day
   ```

4. Start the backend server:
   ```
   cd backend
   npm start
   ```

5. In a new terminal, start the frontend development server:
   ```
   cd frontend
   npm start
   ```

6. Open your browser and navigate to `http://localhost:3000` to use the application.

## Usage

1. Select a month from the dropdown menu.
2. Enter a date in the input field.
3. Click the "Get Event" button.
4. View the random historical event that occurred on the selected date.

## API Reference

This project uses the [On This Day API](https://byabbe.se/on-this-day/) to fetch historical events. 


## License

This project is open source and available under the [MIT License](LICENSE).
