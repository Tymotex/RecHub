# RecHub
Built with MongoDB, Express, React and Node.js.
The React frontend uses `react-redux` for state management and `react-router-dom` for routing.

## API Documentation:
| Route          | METHOD | Parameters |                                                 Returns |
| :------------- | :----: | :--------: | ------------------------------------------------------: |
| games/list     |  GET   |     -      | { games: [{ id, name, coverImages, popularity }, ...] } |
| games/showcase |  GET   |     -      |       { showcase: [{title, description, screenshots}, ...] } |
| games/details  |  GET   |  game_id   |                                                { id, age_ratings, artworks, ...more properties..., videos, website } |
