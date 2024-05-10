import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';

function UserProfile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get('https://sandbox.practical.me/api/user/profile')
      .then(response => {
        if (response.data.isSuccess) {
          setProfile(response.data.data);
        }
      })
      .catch(error => console.error('Error fetching profile:', error));
  }, []);

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
