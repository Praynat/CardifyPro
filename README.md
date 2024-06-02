# CardifyPro

CardifyPro is a platform dedicated to connecting businesses and individuals through innovative card designs. Our mission is to provide a creative space where users can explore and create custom cards that represent their unique brand and personality.

With a user-friendly interface and a wide range of customization options, CardifyPro empowers users to design cards that stand out. Whether you're looking to network, promote your business, or simply share your contact information, CardifyPro is your go-to solution for professional and personal card creation.

## Installation

1. **Clone the GitHub repository**:
   ```bash
   git clone URL_TO_YOUR_REPOSITORY CardifyPro
   cd CardifyPro
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Install MUI (Material-UI) and MUI Icons**:
   ```bash
   npm install @mui/material @emotion/react @emotion/styled
   npm install @mui/icons-material
   ```

4. **Run the project**:
   ```bash
   npm start
   ```

## Usage

1. **Explore cards**:
   - Without signing up, you can explore the different cards available on the platform.
   - Click on a card to see its details.

2. **Sign Up**:
   - To access additional features such as creating, editing, deleting, and liking cards, you need to sign up on the platform.

3. **Create a card**:
   - After signing up, click the `+` or `Create` button to create a new card.

4. **Edit a card**:
   - Select a card you created and click the `Edit` button to make changes.

5. **Like a card**:
   - Click the `Like` button to like a card.

6. **Delete a card**:
   - You can delete a card you created by selecting the card and clicking the `Delete` button.

7. **My Cards**:
   - Access the `My Cards` page to see all the cards you have created.

8. **My Favorites**:
   - Access the `My Favorites` page to see all the cards you have liked.

## Features

- **Explore cards**: View various cards available without signing up.
- **Card details**: Click on a card to see its details, including address, website link, and an embedded map of the location.
- **Sign Up**: Create an account to access additional features.
- **Create cards**: Create new cards by clicking the `+` or `Create` button.
- **Edit cards**: Edit cards you have created by clicking the `Edit` button.
- **Delete cards**: Delete cards you have created by clicking the `Delete` button.
- **Like cards**: Like cards by clicking the `Like` button.
- **My Cards**: View all the cards you have created.
- **My Favorites**: View all the cards you have liked.
- **Edit user profile**: Modify your user profile information.

## Project Structure

```
CardifyPro/
├── node_modules/           # Project dependencies
├── public/                 # Public files (HTML, images, etc.)
│   └── index.html          # Main HTML file
├── src/                    # Application source code
│   ├── Cards/              # Components related to cards
│   ├── contact/            # Components for the contact page
│   ├── forms/              # Components for forms
│   ├── hooks/              # Custom hooks
│   ├── layout/             # Layout components
│   ├── map/                # Embedded map components
│   ├── Pages/              # Different pages of the application
│   ├── providers/          # Context providers
│   ├── routes/             # Route definitions
│   ├── style/              # CSS stylesheets
│   ├── theme/              # Application theme configuration
│   ├── users/              # User management components
│   ├── App.css             # Global application styles
│   ├── App.js              # Main application component
│   ├── App.test.js         # Unit tests for the App component
│   ├── index.css           # Additional global styles
│   ├── index.js            # Application entry point
│   ├── logo.svg            # Application logo
│   ├── reportWebVitals.js  # Performance measuring tools
│   └── setupTests.js       # Test setup configuration
├── .gitignore              # Git ignore file
├── package-lock.json       # Dependency versions lock file
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## Screenshots

- **Homepage**
  
  ![Homepage](../CardifyPro/public/Assets/Images/Readme/CardifyProScreenshotHomePage.png)

- **My Cards**

  ![My Cards](../CardifyPro/public/Assets/Images/Readme/)

- **Favorite Cards**

  ![Favorite Cards](../CardifyPro/public/Assets/Images/Readme/)

- **Search Page**

  ![Search Page](../CardifyPro/public/Assets/Images/Readme/)

- **Login Page**

  ![Login Page](../CardifyPro/public/Assets/Images/Readme/)

- **Card Details**

  ![Card Details](../CardifyPro/public/Assets/Images/Readme/)

## License

This project is a free test project. You are free to use and modify it for testing and learning purposes.

## Contact

For any questions or contributions, you can contact me via [GitHub](https://github.com/Praynat).

---

### Existing Content from Create React App

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

Cela devrait vous permettre de conserver toutes les informations nécessaires, à la fois pour votre projet spécifique et les instructions générales de Create React App. N'oubliez pas d'ajuster les chemins des captures d'écran selon leur emplacement réel dans votre projet.
=======
# CardifyPro
A website to Explore Businesses &amp; Highlight Your Own with Custom Card Creation
>>>>>>> f803d4988c4e67e86ed2a3d8174378b5f8e507d5
#   C a r d i f y P r o  
 