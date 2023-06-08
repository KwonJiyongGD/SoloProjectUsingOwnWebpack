import React from 'react';
import './App.css';
import './styles.css';
import ProfileContainer from './components/ProfileContainer';
import CreateProfileForm from './components/CreateProfileForm';
import PictureShower from './components/RandomAPIpic';
import fetchRandomImage from './module/api';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <h1>Michael/Kwon's CRUD(dy) App</h1>
      <Navbar />
      <ProfileContainer />
      {console.log(fetchRandomImage())}
      {/* <PictureShower /> */}
      <CreateProfileForm />
    </div>
  );
}

export default App;

//removed from json script:

// "start": "webpack-dev-server --config webpack.config.js --open"

/*  "start": "NODE_ENV=production node server/server.js",
    "build": "webpack",
    "dev": "NODE_ENV=development nodemon server/server.js & NODE_ENV=development webpack serve",
 */
