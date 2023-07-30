# refactoredmovieproject
Description: This project is a refactored version of a movie ticket booking web application using React. The original project used web components, which were converted to React components for improved maintainability and modularity. Additionally, the project was personalized and styled to make more personally visually appealing. 

Changes Made:

Main.js:

Converted the web components to React components.
Used React hooks, useState and useEffect, to manage component state and fetch data from 'movies.json'.
Replaced the web component tags with the newly created React component tags.
Added a conditional rendering to display the movie information after data is fetched and loaded.
movies.js:

Created the 'Movie' functional component to render movie cards with dynamic data.
Styled the movie cards with background images, borders, and transitions.
Utilized inline styles and CSS classes to apply appropriate styles to each component.
movies.json:

Added movie data in JSON format, including movie titles, showtimes, screens, rows, seats, and image URLs.
styles.css:

Styled the movie cards with appropriate colors, shadows, and transitions.
Used media queries to make the cards responsive on smaller screens.
Adjusted the alignment and spacing for better visual presentation.
index.html:

Linked the 'styles.css' file to apply the custom styles to the web application.
Imported the necessary React libraries and scripts.
Included the refactored React components ('Main' and 'Movie') using Babel for transpiling.
Design Decisions:

The project was converted from web components to React components to take advantage of React's powerful features, including virtual DOM and component reusability.
The use of React hooks, such as useState and useEffect, allowed for better state management and data fetching.
The movie cards were styled with a minimalist and modern design, featuring background images and subtle animations to create an attractive user interface.
Challenges and Solutions:

The main challenge was to convert the web components to React components without losing functionality. This was addressed by carefully mapping the functionality and restructuring the code to fit the React paradigm.
Ensuring proper state management and asynchronous data fetching required using useState and useEffect hooks to ensure data was fetched and loaded before rendering the movie cards.

Clone the repository from the provided link.
Open the project folder in your code editor.
Open 'index.html' in a web browser or use a local development server to preview the application.
Feel free to provide feedback and suggestions for further improvements!
