import React from 'react';
import JaiNavbar from './navbar';
import { Typography, Grid } from '@mui/material';
import ColorInversionFooter from './footer'
import returnprivacy from '../returnprivacy.jpg'
import FastForwardIcon from '@mui/icons-material/FastForward';

function JaiwinReturnPrivacy() {

  function PointList({ points }) {
    return (
      <div>
        {points.map((point, index) => (
          <Typography key={index} variant="body1" sx={{ my: 1 }}>
            {index + 1}. {point}
          </Typography>
        ))}
      </div>
    );
  }

  const titleCaps = {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textDecoration: 'underline',
    margin: 2, // This is for margin on the x-axis
  };

  const points = [
    "In case of any defect, you can return the products within 3 calendar days from the date when you received it.",
    "To be eligible for return it is mandatory that",
    "Product should be unused",
    "Product must be in the original packing",
    "Product should be in exact same condition as delivered",
    "You should be able to furnish the receipt or proof of purchase."
  ];

  return (
    <>
      <JaiNavbar />

        <Grid >
          <Grid>
            <img src={returnprivacy} width="100%" height="400" alt="Lobby" />
          </Grid>
          <Grid item md={6} xs={12} sx={{ color: "black", m: 1 }}>
            <Typography variant="h3" sx={{ my: 2 }}>
              Return & Refund Policy
            </Typography>
            <Typography sx={{ m: 2 }}>
              We appreciate the interest shown by you in our products. We are sure that our products would be in sync with your requirement and expectations. To ensure this, our delivery happens only after all necessary approvals for the sample and product quality checks. However, in case you are not entirely satisfied with your purchase, we are here to help.
            </Typography>
            <Typography variant='h6' sx={titleCaps}>
              <FastForwardIcon /> Payments:
            </Typography>
            <Typography sx={{ mx: 5 }}>
              Online Payment at Jaiwin Enterprises is facilitated by Third Party and hence Jaiwin Enterprises cannot be held responsible for any errors. In case of any such issues, you would need to connect with your respective banks only.
              <br></br>
              In case of payment failure being displayed despite payment debit, then the payment would be auto-reversed within 7 working days.
            </Typography>

            <Typography variant='h6' sx={titleCaps}>
              <FastForwardIcon /> Returns:

            </Typography>
            <Typography sx={{ mx: 5 }}>
              <PointList points={points} />

            </Typography>
            <Typography variant='h6' sx={titleCaps}>
              <FastForwardIcon /> Refunds:
            </Typography>
            <Typography sx={{ mx: 5 }}>
              Refunds shall be provided against returned products, subject to clearance on inspection.
              <br></br>
              On receipt of the returned items, they will be inspected to ensure that they are unused, in exact same condition as delivered and in original packaging. We will notify you on the status of your refund post inspection.
              <br></br>
              On approval of return, the refund will be initiated via the same mode as payment was received. The credit would be received within a week (7 days) based on the mode of your payment as well as your card issuer's policies.
            </Typography>

            <Typography variant='h6' sx={titleCaps}>
              <FastForwardIcon /> Shipping:
            </Typography>
            <Typography sx={{ mx: 5 }}>
              You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable.
              <br></br>
              The cost of return shipping will be deducted from your refund.
            </Typography>

            <Typography variant='h6' sx={titleCaps}>
              <FastForwardIcon /> Contact Us:
            </Typography>
            <Typography sx={{ mx: 5 }}>
              If you have any questions on how to return your item to us, contact us on jaiwinenterprises@gmail.com or reach us at +91-9894832012
            </Typography>
          </Grid>
        </Grid>
      <ColorInversionFooter />
    </>
  );
}
export default JaiwinReturnPrivacy;