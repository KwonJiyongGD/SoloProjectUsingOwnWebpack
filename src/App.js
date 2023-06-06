import React from 'react';
import './App.css';
import ProfileContainer from './components/ProfileContainer';
import CreateProfileForm from './components/CreateProfileForm';
import PictureShower from './components/RandomAPIpic';

function App() {
  return (
    <div className="app">
      <h1 style={{ color: 'red' }}>Michael/Kwon's CRUD(dy) App</h1>
      <CreateProfileForm />
      <ProfileContainer />
      {/* <PictureShower /> */}
    </div>
  );
}

export default App;
