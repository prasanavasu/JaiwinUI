import React from 'react';
import JaiNavbar from './navbar';
import { Typography, Grid} from '@mui/material';
import ColorInversionFooter from './footer'
import './about.css'
import Mission from './mission';

function JaiwinAbout() {

  return (
    <>
      <JaiNavbar />

      <Grid spacing={4} sx={{m:3}}>
        <Grid item md={6} xs={12}>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12} className="about-us-image">
              <img src="https://digitalupgrade.com/images/lobbyimage_1.jpg" width="100%" height="400" alt="Lobby" />
            </Grid>
            <Grid item md={6} xs={12} sx={{color:"black"}}>
              <Typography variant="h3" sx={{ my: 2 }}>
                About Us</Typography>
              <Typography sx={{ m: 2 }}>
                A wide variety of hygienic toiletries were supplied and traded by Jaiwin Enterprises. Sanitary Pads, Diapers, Phenyls, Sanitary Napkin Vending Machines, and many more items are among the things we sell. We also provide maintenance services for the machines we sell.

                Our ability to create goods that efficiently and effectively meet every need sets us apart from the competition. We prioritise product quality and prompt service to provide complete client satisfaction. Simple indigenous technology that is readily available, adaptable, affordable, and dependable powers our business. This technology was made possible by our enthusiasm for innovation and dedication to research and development.

                Our business upholds the motto "honesty, quality, and services first" and takes every contract it signs very seriously. Our well-equipped production facility, which is updated with the newest technology, is where we make our products. Additionally, to safeguard our items from harm of any type, we have a sizable storage facility.

              </Typography>
             
            </Grid>
          </Grid>
        </Grid>

      </Grid >
      <Mission></Mission>
      <ColorInversionFooter/>
    </>
  );
}
export default JaiwinAbout;