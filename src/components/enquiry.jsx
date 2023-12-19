import React, {useState} from 'react';
import makeRequest from "./api";
import {Box, Typography, CardContent, Button, Grid, TextareaAutosize, TextField} from '@mui/material';

function Enquiry({title}) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        country: '',
        mobile: '',
        description: '',
    });
    const [message, setMessage] = useState('');
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async () => {

        const {name, email, country, mobile, description} = formData;

        // Check if any field is an empty string
        if (!name || !email || !country || !mobile || !description) {
            setMessage('Please fill in all the fields');
            // Remove the message after 5 seconds
            setTimeout(() => {
                setMessage('');
            }, 5000);
            return;
        }
        const userData = {
            ...formData,
            type: 'type', // You might want to modify or clarify 'type'
        };

        // Make the API request here using the userData
        const enquries = await makeRequest('POST', '/enquiries', userData, false);
        console.log(enquries)
        setMessage(enquries);
        setTimeout(() => {
            setMessage('');
        }, 5000);
        setFormData({
            name: '',
            email: '',
            country: '',
            mobile: '',
            description: '',
        });

    };

    return (
        <Box sx={{display: 'flex', flexDirection: 'column',}}>
            <CardContent sx={{flex: '1 0 auto'}}>
                <Typography variant='h4' align='center' sx={{color: "#911ad9"}}>{title}
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="name"
                            name="name"
                            label="Name"
                            fullWidth
                            value={formData.name}
                            onChange={handleInputChange}
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email"
                            fullWidth
                            value={formData.email}
                            onChange={handleInputChange}
                            variant="standard"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="country"
                            name="country"
                            label="Country"
                            fullWidth
                            variant="standard"
                            value={formData.country}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="mobile"
                            name="mobile"
                            label="Phone Number"
                            fullWidth
                            variant="standard"
                            value={formData.mobile}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextareaAutosize
                            required
                            id="description"
                            name="description"
                            label="Description"
                            fullWidth
                            variant="standard"
                            minRows="4"
                            style={{width: "100%"}}
                            placeholder=' Message for us ...'
                            value={formData.description}
                            onChange={handleInputChange}
                        />
                    </Grid>

                </Grid>
                <Button variant="outlined" href="#outlined-buttons" onClick={handleSubmit} color="primary"
                        className='my-3'>Enquiry</Button>

                <p style={{color: 'red'}}>{message}</p>
            </CardContent>

        </Box>
    )
}

export default Enquiry;

