import React from 'react';

const Profile = () => (
  <form className="container profile">
    <label className="label">Nickname</label>
    <input className="input" type="text" />
    <label className="label">Name</label>
    <input className="input" type="text" />
    <label className="label">Email</label>
    <input className="input" type="email" />
    <label className="label">Bio</label>
    <textarea className="textarea" type="text" />
    <label className="label">Birthdate</label>
    <input className="profile_input" type="date" name="birthday" />
    <label className="label">Favorite Color</label>
    <input className="profile_input" type="color" />
    <button>SAVE</button>
  </form>
);

export default Profile;
