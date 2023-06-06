import React from 'react';
import './App.css';
import './styles.css';
import ProfileContainer from './components/ProfileContainer';
import CreateProfileForm from './components/CreateProfileForm';
import PictureShower from './components/RandomAPIpic';
import fetchRandomImage from './module/api';

function App() {
  return (
    <div className="app">
      <h1 style={{ color: 'red' }}>Michael/Kwon's CRUD(dy) App</h1>
      <CreateProfileForm />
      <ProfileContainer />
      {console.log(fetchRandomImage())}
      {/* <PictureShower /> */}
    </div>
  );
}

export default App;
