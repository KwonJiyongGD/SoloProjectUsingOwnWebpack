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
      <h1 style={{ color: 'red' }}>Michael/Kwon's CRUD(dy) App</h1>
      <Navbar />
      <CreateProfileForm />
      <ProfileContainer />
      {console.log(fetchRandomImage())}
      {/* <PictureShower /> */}
    </div>
  );
}

export default App;
