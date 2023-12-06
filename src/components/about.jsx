import React from 'react';
import JaiNavbar from './navbar';
import { Typography, Grid,Breadcrumbs, Link } from '@mui/material';
import ColorInversionFooter from './footer'
import Mission from './mission';
import about from '../about.jpg'

function JaiwinAbout() {

  return (
    <>
      <JaiNavbar />
      <Breadcrumbs aria-label="breadcrumb" sx={{marginTop:10, mx:3 }}>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">About US</Typography>
        </Breadcrumbs>
      <Grid container rowSpacing={1} columnSpacing={1} >
        <Grid item xs={12} md={5} lg={5} sx={{ m: 2 }}>
        <img src={about} alt="Lobby" style={{ width: '100%', height: '100%' }} />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
        <Typography variant="h3" sx={{ m: 2 }}>
            About Us</Typography>
          <Typography sx={{ mx: 2 }}>
            A wide variety of hygienic toiletries were supplied and traded by Jaiwin Enterprises. Sanitary Pads, Diapers, Phenyls, Sanitary Napkin Vending Machines, and many more items are among the things we sell. We also provide maintenance services for the machines we sell.

            Our ability to create goods that efficiently and effectively meet every need sets us apart from the competition. We prioritise product quality and prompt service to provide complete client satisfaction. Simple indigenous technology that is readily available, adaptable, affordable, and dependable powers our business. This technology was made possible by our enthusiasm for innovation and dedication to research and development.

            Our business upholds the motto "honesty, quality, and services first" and takes every contract it signs very seriously. Our well-equipped production facility, which is updated with the newest technology, is where we make our products. Additionally, to safeguard our items from harm of any type, we have a sizable storage facility.

          </Typography>
        </Grid>
      </Grid>
      <Mission></Mission>
      <ColorInversionFooter />
    </>
  );
}
export default JaiwinAbout;