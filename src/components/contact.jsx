import React from 'react';
import JaiNavbar from './navbar';
import ColorInversionFooter from './footer'
import './contact.css'
import { Box, Grid, Container, Link } from '@mui/material';
import Enquiry from './enquiry';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';


function JaiwinContact() {

  return (
    <>
      <JaiNavbar />

      <Box className="Section contact_us">
        <Container >
          <Grid container justifyContent="center">
            <Grid item xs={12} md={10} lg={8} >
              <div className="contact_inner" >
                <div className="contact_field" >
                  <h3 >Contact Us</h3>
                  <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                  <Enquiry title=""></Enquiry>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={2}>
              <div className="right_conatct_social_icon d-flex align-items-end">
                <div className="contact_info_sec">
                  <h4>Contact Info</h4>
                  <div className="d-flex info_single align-items-center">
                    <FontAwesomeIcon icon={faMobileAlt} />
                    <Link href="tel:+91-9894832012" underline="hover">
                      <span> +91-9894832012</span>

                    </Link>
                  </div>
                  <div className="d-flex info_single align-items-center">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <Link href="mailto:jaiwinenterprises@gmail.com" underline="hover">
                      <span> jaiwinenterprises@gmail.com</span>
                    </Link>
                  </div>
                  <div className="d-flex info_single align-items-center">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>No.25,shanmathi avenue, iyyankulam,paruthipattu,avadi, Chennai-71, India - 600071</span>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>

        </Container>
        <Container className=" map_sec">
          <Grid container justifyContent="center">
            <Grid item xs={12} md={10} lg={8}>
              <div className="map_inner">
                <h4>Find Us on Google Map</h4>
                <div className="map_bind">
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d971.5172271706164!2d80.10546292847513!3d13.094819305430253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDA1JzQxLjMiTiA4MMKwMDYnMjIuMCJF!5e0!3m2!1sen!2sin!4v1701599658846!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: "1px solid #000" }} // Adjust border properties as needed
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>

                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <ColorInversionFooter />
    </>
  );
}
export default JaiwinContact;