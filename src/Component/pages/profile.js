import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
    const [profileData, setProfileData] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
        bio: 'Software developer with a passion for open-source projects.',
        profilePicture: 'https://via.placeholder.com/150',
        location: 'San Francisco, CA',
        joinDate: 'January 2020'
    });


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setProfileData(prevData => ({
                ...prevData,
                profilePicture: reader.result
            }));
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };



    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header text-center">
                    <label htmlFor="profilePicture" style={{ position: 'relative' }}>
                        <img src={profileData.profilePicture} alt={`${profileData.name}'s profile`} className="rounded-circle" style={{ width: '150px', height: '150px', objectFit: 'cover', cursor: 'pointer' }} />
                        <input type="file" id="profilePicture" name="profilePicture" accept="image/*" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }} onChange={handleImageChange} />
                        <FontAwesomeIcon icon={faPen} style={{ position: 'absolute', bottom: '5px', right: '5px', cursor: 'pointer' }} />
                    </label>
                    <h1 className="h4 mt-2">{profileData.name}</h1>
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush mt-3">
                        <li className="list-group-item"><strong>Email:</strong> {profileData.email}</li>
                        <li className="list-group-item"><strong>Bio:</strong> {profileData.bio}</li>
                        <li className="list-group-item"><strong>Location:</strong> {profileData.location}</li>
                        <li className="list-group-item"><strong>Joined:</strong> {profileData.joinDate}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;
