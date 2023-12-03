import React from 'react';
import JaiNavbar from './navbar';
import { Typography, Grid } from '@mui/material';
import ColorInversionFooter from './footer'
import privacy from '../privacy.jpg'
import FastForwardIcon from '@mui/icons-material/FastForward';

function JaiwinPrivacy() {

  function PointList({ points }) {
    return (
      <div>
        {points.map((point, index) => (
          <Typography key={index} variant="body1" sx={{my:1}}>
           {index+1}. {point}
          </Typography>
        ))}
      </div>
    );
  }

  const titleCaps = {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textDecoration: 'underline',
    marginX: 2, // This is for margin on the x-axis
  };
  
  const points = [
    'Information is collected from the Users while using the Services such as at the time of enquiry or at certain specific instances wherein Users are requested to provide their personal and business information including contact information.',
    'Unless specifically stated, the personal information requested is for usage by the Company alone. However, the Users may choose to share it with some User / Visitor / Third Party explicitly.',
    'The business information the Users share is used to provide apt solutions and suitable products.',
    'The Company gathers and analyses the usage statistics such as number of unique visitors, pages viewed, screen resolution, browser software etc. in order to improve the user experience and provide better services.',
    'We record browsing, search, requirement posting and buying activities to use the same to provide value-added services.',
    'To extend value-added services, we record the buying and browsing activities including and not limited to their search patterns, client contact details and profiles.'
  ];

  const dist_points = [
    "In a constant endeavour to improve the online platform to make it more efficient and in sync with the current trends and technologies, calls, chats or mails may be used to connect with the Users from time to time regarding our products and services which may be obtained from the automated match-making tools based on your preference, activity etc. via direct mails.",
    "Only the Company or its employees working under confidentiality agreements will send these direct mailers."
  ];
  
  const additionalPoints = [
    "The Company doesn't disclose or share any of the Users personally identifiable information unless under special circumstances or if requested by a government or law enforcement body or as permitted in terms of this Privacy Policy.",
    "The Company may also disclose the User's identity and contact information in special cases to cooperate fully with governmental authorities, law enforcement body, private investigators and/or injured third parties in the investigation of any suspected criminal or civil wrongdoing.",
    "The Company protects the User's data and is at no point involved in any sale of data in bulk or otherwise to any third party wherein it can be misused for telemarketing / email marketing / telesales etc.",
    "It is important that the Users also safeguard their data especially if the Users share the computer with someone else or use a computer in a public place.",
    "The Company takes necessary steps to secure the User information but since data transmission over Internet cannot be 100% secure and it cannot ensure the security of any information transmitted to us and you do so at your own risk."
  ];
  


  return (
    <>
      <JaiNavbar />

      <Grid sx={{ m: 3 }}>
        <Grid >
          <Grid>
            <img src={privacy} width="100%" height="400" alt="Lobby" />
          </Grid>
          <Grid item md={6} xs={12} sx={{ color: "black",m:1 }}>
            <Typography variant="h3" sx={{ my: 2 }}>
              Privacy Policy
            </Typography>
            <Typography sx={{ m: 2 }}>
              jaiwin.co.in is A wide variety of hygienic toiletries were supplied and traded by Jaiwin Enterprises. Sanitary Pads, Diapers, Phenyls, Sanitary Napkin Vending Machines, and many more items are among the things we sell. We also provide maintenance services for the machines we sell.

            </Typography>
            <Typography sx={{ m: 2 }}>
              Jaiwin Enterprises is committed to safeguarding the privacy of its Users. The Users are advised to read the following Privacy Policy in order to have a complete understanding regarding how your personal & business information will be treated. This policy is exclusively applicable on the Website operated by the Company and not beyond. The Company reserves the right to amend these policies at any time by posting the amended version on this site. Such amended version shall automatically be effective upon its posting on this site so you are advised to check this section at regular intervals to be updated on developments.
            </Typography>
            <Typography variant='h6' sx={titleCaps}>
              <FastForwardIcon /> Information Collection & Usage - Business & Personal:

            </Typography>
            <Typography sx={{ mx: 5}}>
              <PointList points={points} />
            </Typography>

            <Typography variant='h6' sx={titleCaps}>
              <FastForwardIcon /> Information Distribution:

            </Typography>
            <Typography sx={{ mx: 5}}>
              <PointList points={dist_points} />

            </Typography>
            <Typography variant='h6' sx={titleCaps}>
              <FastForwardIcon /> Information Sharing and Protection:
            </Typography>
            <Typography sx={{ mx: 5}}>
              <PointList points={additionalPoints} />
            </Typography>
          </Grid>
        </Grid>
      </Grid >
      <ColorInversionFooter />
    </>
  );
}
export default JaiwinPrivacy;