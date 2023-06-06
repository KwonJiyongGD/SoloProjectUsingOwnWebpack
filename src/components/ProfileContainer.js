import React from 'react';
import { useSelector } from 'react-redux';
import ProfileList from './ProfileList';

const ProfileContainer = () => {
  const profiles = useSelector((state) => state.profiles.profiles);

  return (
    <div className="profile-container">
      <h2>Profiles</h2>
      <ProfileList profiles={profiles} />
    </div>
  );
};

export default ProfileContainer;
