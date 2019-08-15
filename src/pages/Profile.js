import React from 'react';

const Profile = () => (
  <form className="container profile">
    <label className="label">Nickname</label>
    <input className="input" type="text" value="User" />
    <label className="label">Name</label>
    <input className="input" type="text" value="Test User" />
    <label className="label">Email</label>
    <input className="input" type="email" value="test@user.com" />
    <label className="label">Bio</label>
    <textarea className="textarea" type="text" value="Hey there!" />
    <label className="label">Birthdate</label>
    <input className="profile_input" type="date" name="birthday" value="1990-09-24" />
    <label className="label">Favorite Color</label>
    <input className="profile_input" type="color" value="#49BAC4" />
    <button type="button">SAVE</button>
  </form>
);

export default Profile;
