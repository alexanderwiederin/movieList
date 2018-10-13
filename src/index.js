// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import movieData from './data/movieData.js';

ReactDOM.render(
  <App movies={movieData}/>,
  document.getElementById('app')
);
