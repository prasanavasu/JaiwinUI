import React from 'react';

import { Box, Typography,  CardContent,  Button, Grid, TextareaAutosize, TextField } from '@mui/material';

function Enquiry({ title }){
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography variant='h4' align='center' sx={{ color: "#911ad9" }}>{ title }
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name"
              name="name"
              label="Name"
              fullWidth

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
              style={{ width: "100%" }}
              placeholder=' Message for us ...'
            />
          </Grid>

        </Grid>
        <Button variant="outlined" href="#outlined-buttons" color="primary" className='my-3'>Enquiry</Button>
      </CardContent>

    </Box>
    )
}

export default Enquiry;

