# iCalendar POC - React, TypeScript & Styled Components

This repository presents a Proof of Concept (POC) for an appointment scheduling application built with React, TypeScript, and Styled Components. It consumes data from a custom API (https://github.com/Reshzera/icalendar-poc) and focuses on key functionalities such as user authentication, registration, and appointment management.

## Key Features

- Login & Registration:  
  Users can securely log in with their credentials or create a new account, which will be authenticated against the custom-built API backend.

- Appointment Management:  
  After logging in, users have access to a dedicated interface for creating, viewing, editing, and deleting their own appointments.

- API Integration:  
  This POC consumes the API endpoints from the iCalendar POC (https://github.com/Reshzera/icalendar-poc) to handle all user and appointment data. The frontend and backend integrate seamlessly to provide a real-time experience.

## Technologies Used

- React (18+): For building the user interface and managing application state.
- TypeScript: Ensuring type safety, better code maintainability, and improved developer experience.
- Styled Components: For component-level styling, enabling a more modular and maintainable UI.
- Axios: For handling HTTP requests to the custom API.

## Next Steps & Improvements

- Better Error Handling: Provide more descriptive and user-friendly error messages.
- Form Validations: Enhance form validations for login and registration to ensure data integrity.
- Improved UI/UX: Add responsive design and refine the look and feel of the application.
- Testing: Implement unit and integration tests to improve code quality and reliability.
