import React from 'react';
import JaiNavbar from './navbar';
import { Typography, Grid } from '@mui/material';
import ColorInversionFooter from './footer'
import termsImage from '../terms.jpg'
import FastForwardIcon from '@mui/icons-material/FastForward';

function JaiwinTerm() {

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

  const terms = [
    'Any and all use of the Website is subject to, and constitutes acknowledgment and acceptance of, the following Terms and Conditions ("Terms").',
    'All Users must to carefully read and fully understand and be in total agreement to the below mentioned Terms before they proceed to use any of the services of the Site ("Services").',
    'Any person who accesses and/or uses the Website and/or Services in any manner ("User", "you", "your") shall be bound by the Terms and the policies formulated herein.',
    'The Terms may be updated/modified/amended (in part or completely) at any time. This may be done with or without prior notice. The amended version shall automatically be effective upon its posting on this Website.',
    'The Users must immediately stop accessing the Website & Services, if they are not in agreement or wish not to be bound by these Terms. These Terms supersede all previous terms and conditions communicated to the Users, for the use of the Website and all rights and liabilities of the Company with respect to any Services to be provided will be limited to the scope of these Terms.'
  ];

  const accuracy = [
    'The Company is not responsible for accuracy, completeness or updation of information that is available on the Website.',
    'The Website displays general information only. It is strictly advised that all due necessary consultation, verification be done before final decision making.',
    'Any reliance on the material on this Website is at your own risk.',
    'Certain products may be exclusively available through the Website. The same products may not be available in the real-time store visits.',
    'Despite all necessary efforts to display as accurately as possible, some inaccuracies / errors / omissions / color variations may persist on the Website related to Services and the Company reserves the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders at any time without prior notice (including after order submission).'
  ];

  const service = [
    'The product prices are subject to change without any prior notice or justification.',
    'The Company reserves the right to discontinue, modify or replace the Service without notice at any time.',
    'The Company shall not be held liable for any such modification, price change, suspension or discontinuance of the Service.'
  ];

  const shipping = [
    'Shipping costs are additional, non-refundable and shall be payable by the Users.',
    'The Shipping costs are dependent on location and order size.',
    'The shipping time is generally 7 - 15 days but may vary depending on location and order size.',
    'A tentative shipping date would be specified in the invoice along with the shipping cost.',
    'Speed deliveries may be requested and would incur additional costs.',
    'In case of returns too, shipping costs for returning your item shall be paid by the Users. If you receive a refund, the cost of return shipping will be deducted from your refund.'
  ];

  const personal = ["The personal information submitted through the Website is governed by our Privacy Policy."]

  const warrenty = [
    'The Company does not guarantee, represent or warrant that the use of the Service will be uninterrupted, timely, secure or error-free and that the results obtained from the use of the Service will be accurate or reliable.',
    'The Users understand and agree that the Company may discontinue the Service or any part of it for indefinite periods of time without notice.',
    'The Users expressly agree that the use of, or inability to use, the Service is at your sole risk. The Service and all products and services delivered to you through the service are (except as expressly stated by us) provided \'as is\' and \'as available\' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.',
    'The Users hereby further agree to indemnify and save the Company, its affiliates, directors, officers and employees harmless, from any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.',
    'The Users hereby agree to indemnify and save the Company, its affiliates, directors, officers and employees harmless, from any and all losses, claims, liabilities (including legal costs on a full indemnity basis) which may arise from your use of the Website or from its breach of any of the terms and conditions of this Agreement.'
  ];


  const termination = [
    'The parties will abide by all the obligations. The liabilities incurred prior to the termination date and shall survive the termination of this agreement for all purposes.',
    'Unless and until termination is requested by either parties, the Terms shall be effective.',
    'The Users may terminate these Terms of Service at any time by notifying the Company that you no longer wish to use our Services, or when you cease using our site.',
    'If in our sole judgment the User fail, or we suspect that you have failed, there is any breach of the provisions of the Terms; the Company may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any f).'
  ];

  const law = ["These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of India and jurisdiction of Chennai, India."]

  const user_agree = [
    'All the information submitted by User is accurate, truthful and can be verified;',
    'The User shall maintain the accuracy of such information in future as well by means of necessary updations / notifications;',
    'The User 18 years of age or older (a major); and',
    'The use of the Site does not violate any applicable law or regulation.',
    'The Users shall use the Website for reasonable and lawful purposes only. The Users shall not indulge in any activity that is unlawful or harms the Website or its content. The Users are provided with a limited license to access and use the Website, solely for the purpose of availing the Services, subject to these Terms.',
    'The Users agree to NOT:',
    'Use the Services in any way that is unlawful, or harms the Company or any other person or entity;',
    'Make false or malicious statements against the Services, the Website or the Company;',
    'Delete or modify any content on the Website, including but not limited to, any information regarding the Services, their performance, sales or pricing, legal notices, disclaimers or proprietary notices such as copyright or trademark symbols, logos, that you do not own or have express permission to modify;',
    'Use any technology or tool to decompile, reverse engineer, or disassemble the content or search and infiltrate the content;',
    'Use any method / scheme to undermine the integrity of the computer systems or networks used by the Website.',
    'Post, copy, upload, distribute, or otherwise transmit any files that contain a virus or other harmful component, or otherwise impair or damage the Website and/or Services or any connected network, or otherwise interfere with any person or entity\'s use or enjoyment of the Website and/or the Services;',
    'Refurbish or replicate any content (information, product details, mail communication) posted on the Website or shared by the Company;',
    'Engage in any form of antisocial, disruptive, or destructive acts;',
    'Host, display, upload, modify, publish, transmit, update or share on or through the Website, any information that belongs to another person, is harmful, harassing, obscene, defamatory, pornographic, harms minors, hateful, ethnically or religiously objectionable, infringes patent / trademark / copyright etc.',
    'Transmit any viruses / worms / any code of a destructive nature.'
  ];

  const user_represent = [
    'All the information submitted by User is accurate, truthful and can be verified;',
    'The User shall maintain the accuracy of such information in future as well by means of necessary updations / notifications;',
    'The User 18 years of age or older (a major); and',
    'The use of the Site does not violate any applicable law or regulation.'
  ];


  return (
    <>
      <JaiNavbar />

      <Grid sx={{ m: 3 }}>
        <Grid >
          <Grid>
            <img src={termsImage} width="100%" height="400" alt="Lobby" />
          </Grid>
          <Grid item md={6} xs={12} sx={{ color: "black", m: 1 }}>
            <Typography variant="h3" sx={{ my: 2 }}>

              Terms & Conditions
            </Typography>
            <Typography sx={{ m: 2 }}>
              jaiwin.co.in is owned and managed by Jaiwin Enterprises. The Company is a proprietor establishment 2019 incorporated under the Companies Act, 1956_. The Company A wide variety of hygienic toiletries were supplied and traded by Jaiwin Enterprises. Sanitary Pads, Diapers, Phenyls, Sanitary Napkin Vending Machines, and many more items are among the things we sell. We also provide maintenance services for the machines we sell.

            </Typography>

            <Typography variant='h6' sx={{ mx: 2, fontWeight: 'bold', textDecoration: 'underline' }}>
              <FastForwardIcon /> TERMS AND CONDITIONS FOR USE OF THE WEBSITE:

            </Typography>
            <Typography sx={{ mx: 5 }}>
              <PointList points={terms} />
            </Typography>

            <Typography variant='h6' sx={{ mx: 2, fontWeight: 'bold', textDecoration: 'underline' }}>
              <FastForwardIcon /> USER WARRANTIES AND RESTRICTIONS:
            </Typography>
            <Typography variant="body1" sx={{  mx: 5, my:2}}>
              A. The Users represent and warrant that
              <Typography sx={{ mx: 5 }}>
                <PointList points={user_represent} />
              </Typography>
            </Typography>

            <Typography variant="body1" sx={{  mx: 5, my:2}}>
              B. The Users shall use the Website for reasonable and lawful purposes only. The Users shall not indulge in any activity that is unlawful or harms the Website or its content. The Users are provided with a limited license to access and use the Website, solely for the purpose of availing the Services, subject to these Terms.
            </Typography>

            <Typography variant="body1" sx={{  mx: 5, my:2}}>
              C. The Users agree to NOT
              <Typography sx={{ mx: 5 }}>
                <PointList points={user_agree} />
              </Typography>
            </Typography>

            <Typography variant="body1" sx={{  mx: 5, my:2}}>
            D. The Users are solely responsible for protecting and maintaining the confidentiality of their information
            </Typography>

            <Typography variant='h6' sx={{ mx: 2, fontWeight: 'bold', textDecoration: 'underline' }}>
              <FastForwardIcon /> ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION AND SERVICES:
            </Typography>
            <Typography sx={{ mx: 5 }}>
              <PointList points={accuracy} />
            </Typography>

            <Typography variant='h6' sx={{ mx: 2, fontWeight: 'bold', textDecoration: 'underline' }}>
              <FastForwardIcon /> MODIFICATIONS TO THE SERVICE AND PRICES:
            </Typography>
            <Typography sx={{ mx: 5 }}>
              <PointList points={service} />
            </Typography>

            <Typography variant='h6' sx={{ mx: 2, fontWeight: 'bold', textDecoration: 'underline' }}>
              <FastForwardIcon /> Shipping Policy:
            </Typography>
            <Typography sx={{ mx: 5 }}>
              <PointList points={shipping} />
            </Typography>

            <Typography variant='h6' sx={{ mx: 2, fontWeight: 'bold', textDecoration: 'underline' }}>
              <FastForwardIcon /> PERSONAL INFORMATION:
            </Typography>
            <Typography sx={{ mx: 5 }}>
              <PointList points={personal} />
            </Typography>

            <Typography variant='h6' sx={{ mx: 2, fontWeight: 'bold', textDecoration: 'underline' }}>
              <FastForwardIcon /> DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY, INDEMNIFICATION:
            </Typography>
            <Typography sx={{ mx: 5 }}>
              <PointList points={warrenty} />
            </Typography>

            <Typography variant='h6' sx={{ mx: 2, fontWeight: 'bold', textDecoration: 'underline' }}>
              <FastForwardIcon /> TERMINATION:
            </Typography>
            <Typography sx={{ mx: 5 }}>
              <PointList points={termination} />
            </Typography>

            <Typography variant='h6' sx={{ mx: 2, fontWeight: 'bold', textDecoration: 'underline' }}>
              <FastForwardIcon /> GOVERNING LAW:
            </Typography>
            <Typography sx={{ mx: 5 }}>
              <PointList points={law} />
            </Typography>
          </Grid>
        </Grid>
      </Grid >
      <ColorInversionFooter />
    </>
  );
}
export default JaiwinTerm;