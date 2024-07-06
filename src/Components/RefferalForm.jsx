import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import axios from 'axios';

const ReferralForm = ({ handleClose }) => {
  const [form, setForm] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
    course: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await axios.post('http://localhost:5000/api/referrals', { form });
      const response = await axios.post('http://localhost:5000/api', {form} );
    console.log(response.data + 'responsefromserver')
    
      handleClose();
    } catch (error) {
      console.error('Error submitting referral', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
        Refer a Friend
      </Typography>
      <TextField
        name="referrerName"
        label="Your Name"
        fullWidth
        margin="normal"
        value={form.referrerName}
        onChange={handleChange}
        required
      />
      <TextField
        name="referrerEmail"
        label="Your Email"
        fullWidth
        margin="normal"
        type="email"
        value={form.referrerEmail}
        onChange={handleChange}
        required
      />
      <TextField
        name="refereeName"
        label="Friend's Name"
        fullWidth
        margin="normal"
        value={form.refereeName}
        onChange={handleChange}
        required
      />
      <TextField
        name="refereeEmail"
        label="Friend's Email"
        fullWidth
        margin="normal"
        type="email"
        value={form.refereeEmail}
        onChange={handleChange}
        required
      />
      <TextField
        name="course"
        label="Course to Refer"
        fullWidth
        margin="normal"
        value={form.course}
        onChange={handleChange}
        required
      />
      <TextField
        name="message"
        label="Message"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        value={form.message}
        onChange={handleChange}
      />
      <Box mt={2}>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit Referral
        </Button>
      </Box>
    </form>
  );
};

export default ReferralForm;
