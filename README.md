# E-commerce App by Fitsum

An e-commerce web application built with modern web technologies, providing a responsive, offline-capable shopping experience.
## Features
- **React**: Core framework for a component-based architecture.
- **Redux-Saga**: For handling complex asynchronous state management.
- **Styled Components**: Custom styling with dynamic theming.
- **Firebase**: Authentication and database integration.
- **Progressive Web App (PWA)**: Offline support for a native app 

## Demo
https://e-commerce-app-fitsum.netlify.app/
## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/e-commerce-app.git
   cd e-commerce-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Firebase:
   - Create a Firebase project and add your configuration details in a `.env` file:
     ```
     REACT_APP_API_KEY=your_api_key
     REACT_APP_AUTH_DOMAIN=your_auth_domain
     REACT_APP_PROJECT_ID=your_project_id
     REACT_APP_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
     REACT_APP_APP_ID=your_app_id
     ```

4. Start the app:
   ```bash
   npm start
   ```

5. Run tests:
   ```bash
   npm test
   ```
## Available Scripts

- `npm start`: Runs the app in development mode.
- `npm test`: Launches Jest tests.
- `npm run build`: Builds the app for production.

## PWA Configuration

The app is configured as a PWA. To test offline functionality:
1. Run the app in production mode.
2. Enable "Offline" in Chrome DevTools under the Network tab.
