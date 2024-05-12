import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';

function UserProfile() {
  const [profile, setProfile] = useState(null);
  const token = useSelector(state => state.user.token); // Fetch token from Redux state

  useEffect(() => {
    axios.get('https://sandbox.practical.me/api/user/profile', {
      headers: {
        'Authorization': `Bearer ${token}`  // Use token from Redux state
      }
    }).then(response => {
      if (response.data.isSuccess) {
        setProfile(response.data.data);
      }
    })
    .catch(error => console.error('Error fetching profile:', error));
  }, [token]);  // Add token as a dependency to useEffect

  return profile ? (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">First Name</TableCell>
            <TableCell>{profile.first_name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">Sur Name</TableCell>
            <TableCell>{profile.sur_name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">Email</TableCell>
            <TableCell>{profile.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">Phone</TableCell>
            <TableCell>{profile.phone}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  ) : <div>Loading profile...</div>;
}

export default UserProfile;
